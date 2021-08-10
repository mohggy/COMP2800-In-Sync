import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth, signGoogle } from '../../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import { BoxContainer } from "./SignInElement";
import Footer from '../footer/footer';

export default function Signup() {
  const emailRef = useRef();
  const userNameRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    if(passwordRef.current.value !==
      passwordConfirmRef.current.value){
        return setError('Password do not match');
      }
      try {
        setError('');
        setLoading(true);
        await signup(emailRef.current.value, passwordRef.current.value, userNameRef.current.value);
        history.push('/Dashboard');
      } catch {
        setError('Failed to create an account');
      }
      setLoading(false);
  }


  // sets errors for validating inputs for user login with google account
  // calls google signin function and upon authentication and success, redirects user to dashboard
  const googleSignin = async (e) => {
    e.preventDefault();
    try {
      setError('');
      await signGoogle();
      history.push('/Dashboard');
    } catch {
      setError('Failed to signin with google');
    }
  }

  return (
    <>
      <BoxContainer>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
          <Form.Group id="userName">
              <Form.Label>User name</Form.Label>
              <Form.Control type="text" ref={userNameRef} required  />
            </Form.Group>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required  />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>password</Form.Label>
              <Form.Control type="password" ref={passwordRef} 
              pattern="[A-Za-z0-9]{7,20}"
              required  />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} 
              pattern="[A-Za-z0-9]{7,20}"
              required  />
            </Form.Group>
            <Button className="auth-btn w-100" style={{backgroundColor: '#FF6150', border:'none', padding:'12px 30px'}} disabled={loading} type="submit">
              Sign Up
            </Button>
          </Form>
          <Button onClick={googleSignin} disabled={loading} className="mt-5" style={{backgroundColor: '#FF6150', border:'none', padding:'12px 30px'}}>Google Signup</Button>
        </Card.Body>
      </BoxContainer>
      <div className="w-100 text-center mt-2" style={{marginBottom: '70px'}}>
        Already have an account? <Link to="/login">Log In</Link>
      </div>
      <Footer />
    </>
  );
};