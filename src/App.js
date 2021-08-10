import React from 'react';
import Home from './pages/LandingPage.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Dashboard from "./pages/Dashboard";
import Events from './pages/Events';
import Signup from './components/userauth/Signup';
import Login from './components/userauth/Login';
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './components/userauth/PrivateRoute';
import EasterEgg from "./easter/EasterEgg";

function App() {
  return (

    <React.Fragment>
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute path="/events" component={Events} />
            <PrivateRoute path="/Dashboard" component={Dashboard} exact />
            <PrivateRoute path="/EasterEgg" component={EasterEgg} exact />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/" component={Home} exact />
          </Switch>
        </AuthProvider>
      
    </Router>
    </React.Fragment>
  );
}

export default App;
