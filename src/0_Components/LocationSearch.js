import React from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';

export default function LocationSearch() {
  
  return (
    <>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Enter Location"
          aria-label="Enter Location"
          aria-describedby="Location"
        />
      
        {/* I would search up how to insert an image with this button component. */}
        <Button variant="outline-secondary" id="Location">
          Button
        </Button>
      </InputGroup>
    </>
  )
}
