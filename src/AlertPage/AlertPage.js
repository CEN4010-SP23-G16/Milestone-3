import React from 'react'
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap'

export default function AlertPage() {
  return (
    <>
      <Container>
        <h2>Alerts</h2>
        <Row>

          <Col md={6} className='text-center text-md-start d-flex flex-column justify-content-center'>

            <h1 className="my-5 display-3 fw-bold ls-tight px-3">
              Sign Up for<br />
              <span className="text-primary"> Notifications!</span>
            </h1>
          </Col>

          <Col md={6}>

            <Card className='my-5'>
              <Card.Body className='p-5'>
                <Row>
                  <Col co={6}>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control wrapperClass='mb-4' label='First name' id='form1' type='text' placeholder='First Name'/>
                  </Col>

                  <Col co={6}>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control wrapperClass='mb-4' label='Last name' id='form1' type='text' placeholder='Last Name'/>
                  </Col>
                </Row>
                <Form.Label>Email</Form.Label>
                <Form.Control wrapperClass='mb-4' label='Email' id='form1' type='email' placeholder='Email Address'/>
                
                <Form.Label>Password</Form.Label>
                <Form.Control wrapperClass='mb-4' label='Password' id='form1' type='password' placeholder='Password'/>

                

                <Button className='w-100 mb-4' size='md'>sign up</Button>

                
              </Card.Body>
            </Card>

          </Col>

        </Row>

    
      </Container>
    </>
  )
}
