/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import { auth, db } from '../../firebase';
import './Event.css';
import { messageAppear } from './Utility';

const savedEvents = () => {
  const [savedAllEvents, setSavedAllEvents] = useState([]);
  const insertDiv = document.querySelector('#insertDiv');
  const closeBtn = document.querySelector('#closeBtn');
  const openSavedEventBtn = document.querySelector('#openSavedEventBtn');
  const [error, setError] = useState(null);

  //When the page load, get all saved events
  useEffect (() => {
    auth.onAuthStateChanged((user) => {
      if(user){
        getSavedEvents(user.uid);
      } else {
        console.log('need to sign in');
      }
    });
  }, []);

  //get saved events from user collection
  //If the user doesn't have saved events collection, create empty array
  const getSavedEvents = (uid) => {
    db.collection('users')
    .doc(uid)
    .get()
    .then(
      result => {
        const savedEvents = (result.exists) ? result.data() : [];
        if(savedEvents === undefined || savedEvents === []) return;
        setSavedAllEvents(savedEvents.savedEvents);
      }
    )
  };

  //If the user has saved events display in dashboard below calendar
  //If the user doesn't have the saved events, return
  const displaySavedEvent = () => {
    if(savedAllEvents.length === 0) {
      messageAppear(setError, 'You do not have saved events, Please go to event page and click save');
      return;
    }
    savedAllEvents.forEach(e => {
      db.collection('events').doc(e).onSnapshot((doc) => {
        if(doc.exists){
          insertDiv.innerHTML +=
            `
          <div class="eventDiv">
            <h2>${doc.data().name}</h2>
            <p>${doc.data().description}</p>
          </div>
          `
        }
      })
      closeBtn.style.display = 'block';
      openSavedEventBtn.style.display = 'none';
    })
  };

  //close the saved events from dashboard
  const closeSavedEvents = () => {
    insertDiv.innerHTML = '';
    closeBtn.style.display = 'none';
    openSavedEventBtn.style.display = 'block';
  };


  return (
    <div id="savedEventDiv">
        <div>
          { error && <div className="errorDiv"><p className="errorMessage">{error}</p></div>}  
        </div>
        <button id="openSavedEventBtn" className="eBtn" onClick={displaySavedEvent}>Check Your Saved Events</button>
        <div id="insertDiv"></div>
        <button id="closeBtn" className="eBtn" style={{display: 'none'}} onClick={closeSavedEvents}>Close Your Saved Events</button>
    </div>
  );
};

export default savedEvents;