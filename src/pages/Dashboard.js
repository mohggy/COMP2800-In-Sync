import React, {useEffect, useState} from 'react';
import Sidebar2 from "../components/DashboardSidebar/Sidebar2";
import MyCal from "../components/Calendar/Calendar";
import SavedEvent from '../components/Event/SavedEvents';
import { db, auth } from '../firebase';
import Footer from '../components/footer/footer'

const Dashboard = () => {

  const [userName, setUserName] = useState('');

  useEffect (()=> {
    auth.onAuthStateChanged((user) => {
      if(user){
        getDisplayName(user.uid);
      } else {
        console.log('need to sign in');
        getDisplayName('');
      }
    });
  }, []);

  const getDisplayName = (uid) => {
    db.collection('users')
      .doc(uid)
      .get()
      .then(
        result => {
          if (result.exists) { 
            setUserName(result.data().displayName);
            return;
          } else {
            setUserName('Your');
          }
        }
    )
  };
  
  return (
    <>
      <Sidebar2 />
      <div>
        <h1 id="dashTitle"
        style={{margin: "30px"}}
        >Welcome to your Dashboard, {userName}</h1>
      </div>
      <div
        style={{
          margin: "30px"
        }}
      >
        <MyCal />
        </div>
      <SavedEvent/>
      <Footer />
    </>
  );
};

export default Dashboard;
