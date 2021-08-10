/*
References:
https://www.youtube.com/watch?v=NsHnVSJukj0
@author Sanskar Tiwari

https://www.youtube.com/watch?v=8r1Pb6Ja90o&t=794s
@author Hong Ly
*/

import React, { useEffect, useState } from 'react';
import Sidebar2 from '../components/DashboardSidebar/Sidebar2';
import { Form, Card } from 'react-bootstrap';
import { storage, db, auth } from '../firebase';
import { messageAppear, uploadImg } from '../components/Event/Utility';
import Event from '../components/Event/Event';
import Footer from '../components/footer/footer';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [userID, setUserID] = useState('');
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  let processing = false;

  //when the page loard, display all events
  useEffect (()=> {
    auth.onAuthStateChanged((user) => {
      if(user){
        setUserID(user.uid);
      } else {
        console.log('need to sign in');
        setUserID('');
      }
    });
    getEvents();
  }, []);

  //get events from firestore events collection
  const getEvents = () => {
    db.collection('events').onSnapshot((querySnapshot) => {
        setEvents(
          querySnapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
          imgUrl: doc.data().imgUrl,
          description: doc.data().description
        }))
      );
    });
  };

  //add the selected event to the firestore event collection
  const addEventToFirestore = (url) => {
    db.collection('events').add({
      description,
      name,
      imgUrl: url
    });
    setName('');
    setDescription('');
    processing = false;
  };

  //save the image to firebase storage
  const handleUpload = (e) => {
    e.preventDefault();
    if (processing) return;
    processing = true;
    const imgFile = document.querySelector('#imgFile');
    if (name === '' || description === '') {
      messageAppear(setError, 'Please fill the event name and description');
      return;
    } else if (imgFile.files.length === 0) {
      addEventToFirestore('');
    } else {
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on(
        'state_changed',
        snapshot => {},
        error => {
          console.log(error);
          processing = false;
        }, () => {
          storage
          .ref('images')
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            setImage('');
            imgFile.value = '';
            addEventToFirestore(url);
          });
        }
      );
    }
    messageAppear(setMessage, 'Successfully Added');
  };

  return (
    <>
      <Sidebar2 />
      <h2 className="eventTitle">Events</h2>
        <div>
          <Card id="addForm">
            <Card.Body>
              { message && <div className="messageDiv"><p className="message">{message}</p></div> }
              { error && <div className="errorDiv"><p className="errorMessage">{error}</p></div> }
              <h3 className="subTitle">Add a New Event</h3>
              <Form>
                <Form.Group id="eventName">
                  <Form.Label className="labelName">Event Name</Form.Label>
                  <Form.Control type="name" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group id="desc">
                  <Form.Label className="labelName">Description</Form.Label>
                  <Form.Control as="textarea" rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}/>
                </Form.Group>
                <Form.Group id="image">
                  <Form.Label className="labelName">Image</Form.Label>
                  <Form.File id="imgFile" onChange={(e) => uploadImg(e, setImage, setError)}/>
                  <button id="uploadBtn" className="eBtn" type="submit" onClick={handleUpload}>SAVE</button>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body id="eventCardB">
              {events.map((event) => (
                  <Event
                      key={event.id}
                      name={event.name}
                      imgUrl={event.imgUrl}
                      image = {image}
                      description={event.description}
                      id={event.id}
                      userID={userID}
                  />
                ))}
            </Card.Body>
          </Card>
        </div>
      <Footer/>
    </>
  );
};

export default Events;