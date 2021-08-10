import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import { BoxContainer } from "./SignInElement";
import Footer from '../footer/footer';

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  // sets errors for email and password for validating inputs for user login
  // calls login function and upon authentication and success, redirects user to dashboard
  async function handleSubmit(e) {
    e.preventDefault();
      try {
        setError('');
        setLoading(true);
        await login(emailRef.current.value, passwordRef.current.value);
        history.push('/Dashboard');
      } catch {
        setError('Failed to login');
      }
      setLoading(false);
  }

  return (
    <>
      <BoxContainer>
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required  />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required  />
            </Form.Group>
            <Button disabled={loading} className="w-100" style={{backgroundColor: '#FF6150', border:'none', padding:'12px 30px'}} type="submit">
              Login
            </Button>
          </Form>
        </Card.Body>
      </BoxContainer>
      <div className="w-100 text-center mt-2" style={{marginBottom: '200px'}}>
        Need an account? <Link to="/signup">Sign up</Link>
      </div>
      <Footer />
    </>
  );
};