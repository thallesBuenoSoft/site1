import React from 'react';
import { Container, Row, Form, Button, Col } from "react-bootstrap";
import './App.css';

function App() {
  return (
    <Container fluid className='p-0 d-flex h-100 align-items-center justify-content-center '>

      <Row fluid>
        <Col className='p-0 m-0 rounded-lg bg-white'>
          <Container col={6} className='p-0 m-0 rounded-lg bg-white'>

            <Row className=' m-5'>
              <h3>LOGIN</h3>
            </Row>

            <Form className='mx-5 mt-4 '>
              <Form.Control lg type='email' placeholder='email' className='mb-4 form-control-lg'></Form.Control>
              <Form.Control type='password' placeholder='password' className='mb-4 form-control-lg'></Form.Control>
            </Form>

            <Row className='justify-content-center mx-5 mb-5'>
              <small className='text-muted'>FORGOT YOUR PASSWORD</small>
            </Row>


            <Row className='mx-0 mt-4'>
              <Col className='p-4 m-0 bg-secondary'  >
                <a className=''>REGISTER</a>
              </Col>
              <Col className='p-4 m-0 bg-dark text-white text-right'>
                <a>SIGN IN</a>
              </Col>
            </Row>

          </Container>
        </Col>
      </Row>


    </Container>
  );
}

export default App;
