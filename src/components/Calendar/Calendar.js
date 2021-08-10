import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { db, auth } from "../../firebase";
import CalForm from "./CalendarForm";
import "react-big-calendar/lib/css/react-big-calendar.css";

const Schedule = () => {
  const [sched, setSched] = useState([]);
  const [userID, setUserID] = useState("");
  const localizer = momentLocalizer(moment);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserID(user.uid);
        getSchedules(user.uid);
      } else {
        console.log("need to sign in");
        setUserID("");
      }
    });
  }, []);

  // reads the data from Firebase based on the user id of the user upon signing in. Iterates through all the
  // saved schedule and updates onto the calendar
  const getSchedules = (uid) => {
    let newArr = [];
    db.collection("users")
      .doc(uid)
      .onSnapshot((doc) => {
        const sch = doc.exists ? doc.data().schedules : [];
        console.log(sch);
        if (sch === undefined) return;
        sch.forEach((e) => {
          let eventData = {
            title: e.scheduleTitle,
            start: new Date(e.scheduleStart),
            end: new Date(e.scheduleEnd),
          };
          newArr.push(eventData);
        });
        setSched(newArr);
      });
  };

  return (
    <div className="App">
      <Calendar
        localizer={localizer}
        events={sched}
        defaultDate={new Date()}
        style={{ height: 500 }}
      />
      <CalForm userID={userID} />
    </div>
  );
};

export default Schedule;
