import React, { useState} from 'react';
import { Form } from 'react-bootstrap';
import { storage, db } from '../../firebase';
import { messageAppear, uploadImg } from './Utility';
import './Event.css';

const Event = ({image, name, description, id, imgUrl, userID}) => {
  const [newName, setNewName] = useState(name);
  const [newDescription, setNewDescription] = useState(description);
  const [updateForm, setUpdateForm] = useState('none');
  const [detailBtnName, setDetailBtnName] = useState('SEE MORE');
  const [newImg, setNewImg] = useState(image);
  const [newImgUrl, setNewImgUrl] = useState(imgUrl);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  // Display toggle for event update form
  const openCloseUpdateForm = () =>
    (updateForm === 'none') ? setUpdateForm('block') : setUpdateForm('none');

  // Store events to firestore user collection
  // The user can save with or without image
  const updateEventToFirestore = (url) => {
    if (url === undefined) url = '';
    db.collection('events').doc(id).update({
      description: newDescription,
      name: newName,
      imgUrl: url
    });
  };

  //Save events to firestore and storage
  //image store in firebase storage
  const handleUpload = (e) => {
    e.preventDefault();
    if (newImg.name === undefined) {
      updateEventToFirestore(newImgUrl);
    } else {
      const uploadTask = storage.ref(`images/${newImg.name}`).put(newImg);
      uploadTask.on(
        'state_changed',
        snapshot => {},
        error => {
          console.log(error);
        },
        () => {
          storage
          .ref('images')
          .child(newImg.name)
          .getDownloadURL()
          .then(url => {
            updateEventToFirestore(url);
            setNewImgUrl(url);
          });
        }
      );
    }
    openCloseUpdateForm();
    messageAppear(setMessage, 'Successfully Updated');
  };

  //Delete the selected event from user's saved events
  const deleteSavedEvent = () => {
    db.collection('users')
      .doc(userID)
      .get()
      .then(
        result => {
          const { savedEvents } = result.data();
          if(savedEvents.includes(id)){
            const newArray = savedEvents.filter( e => e !== id);
            db.collection('users')
              .doc(userID)
              .set(
            { savedEvents: newArray },
            { merge: true }
          )
          }
        }
      );
  }

  //Delete selected event from firebase
  const deleteEvent = () => {
    deleteSavedEvent();
    db.collection('events').doc(id).delete();
  };

  //Display toggle for description
  const seeMore = ({target}) => {
    const withImgP = target.parentNode.parentNode.querySelector('.withImgP');
    withImgP.classList.toggle('show');
    const btnName = (withImgP.classList.contains('show')) ? 'SEE LESS' : 'SEE MORE';
    setDetailBtnName(btnName);
  };

  //Insert the selected event to saved events
  const insertSavedEvent = e => {
    db.collection('users')
    .doc(userID)
    .get()
    .then(
      result => {
        const { savedEvents } = result.exists ? result.data() : { savedEvents: [] };
        if(savedEvents.includes(id)){
          messageAppear(setMessage,'The event is already in your dashboard');
          return;
        }
        const newArray = [...savedEvents, id];
        db.collection('users')
        .doc(userID)
        .set(
          { savedEvents: newArray },
          { merge: true }
        );
        messageAppear(setMessage, 'Successfully Added');
      }
    );
    e.preventDefault();
  };

  //Event wiithout image HTML
  const eventWithoutImg = (eventName, eventDescription) => `
  <div class="noImgEvent">
    <h3 class="eventTitle">${eventName}</h3>
    <p class="noImgP">${eventDescription}</p>
  </div>

  `;

  //Event with image HTML
  const eventWithImg = (eventName, imageURL, eventDescription) => `
  <div class="imgEvent">
    <h3 class="eventTitle">${eventName}</h3>
    <img class="eventImages" src=${imageURL} alt="event"/>
    <p class="withImgP">${eventDescription}</p>
  </div>

  `;

  return (
        <div key={id}>
          <div>
            { message && <div className="messageDiv"><p className="message">{message}</p></div>}
          </div>
          <div>
            { error && <div className="errorDiv"><p className="errorMessage">{error}</p></div>}  
          </div>
          <div className="dataContainer">
            {
              (imgUrl) ? <div dangerouslySetInnerHTML={{__html: eventWithImg(name, imgUrl, description)}}></div> : 
              <div dangerouslySetInnerHTML={{__html: eventWithoutImg(name, description)}}></div>
            }
            <div className="eventBtns">
                {
                  imgUrl &&  <button onClick={seeMore} className="viewDetailBtn">{detailBtnName}</button>
                }
                <button onClick={deleteEvent} className="eBtn">DELETE</button>
                <button onClick={openCloseUpdateForm} className="eBtn">EDIT</button>
                <button onClick={insertSavedEvent} className="eBtn saveBtn">SAVE</button>
            </div>
          </div>

          <div>
            <Form className="updateForm" style={{display: updateForm}}>
              <Form.Group>
                <h2 className="formTitle">Update Event Form</h2>
                <Form.Label>Event Name</Form.Label>
                <Form.Control type="name"
                defaultValue={name}
                onChange={(e) => setNewName(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3}
                              defaultValue={description}
                              onChange={(e) => setNewDescription(e.target.value)}/>
              </Form.Group>
              <Form.Group>
                  <Form.Label>Image</Form.Label>
                  <Form.File type="image" onChange={(e) => uploadImg(e, setNewImg, setError)}/>
                </Form.Group>
              <button onClick={openCloseUpdateForm} type="cancel" className="eBtn cancelBtn">Cancel</button>
              <button onClick={handleUpload} className="eBtn" type="submit">Update</button>
            </Form>
          </div>
        </div>
  );
};

export default Event;