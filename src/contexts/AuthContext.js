import React, {useContext, useState, useEffect} from 'react';
import { db, auth, googleProvider } from '../firebase';

const AuthContext = React.createContext();

//create a user context for authentication 
export function useAuth(){
  return useContext(AuthContext);
}

// google sign in, redirects to pop for login and pulls data into user collection
export function signGoogle () {
  auth.signInWithPopup(googleProvider).then((res) => {
    db.collection('users').doc(res.user.uid).set({
          displayName: res.user.displayName,
          email: res.user.email,
          savedEvents: [],
          schedules: []
        },{ merge: true });
          console.log(res.user.uid)
        }).catch((error) => {
          console.log(error.message)
        })
}

export function AuthProvider({children}) {

  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  // signup function, creates an authenticated user with email, pass, and display name
  // adds user and their info to collection in db
  function signup(email, password, displayName) {
    auth.createUserWithEmailAndPassword(email, password).then ((data) => {
      db.collection('users').doc(data.user.uid).set({
        displayName,
        email,
        savedEvents: [],
        schedules: []
      },{ merge: true });
    })
  }

  // login function, authenticated with email and pass
  function login(email, password){
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return auth.signOut();
  }

  //listens for user state changes to set the current user
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);


  const value = {
    currentUser,
    login,
    signup,
    logout
  }

  return  (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}