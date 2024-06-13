import React, { useState } from 'react';
import styled from 'styled-components';

const SaveContainer = styled.div`
  padding: 20px;
  background-color: #FFFFFF;
  min-height: 100vh;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  max-width: 400px;
  margin: auto;
`;

const Input = styled.input`
  padding: 10px;
  border: 2px solid #A9A9A9;
  border-radius: 5px;
  font-size: 1em;
`;

const Button = styled.button`
  background-color: #98FF98;
  color: #006400;
  border: none;
  padding: 15px;
  cursor: pointer;
  font-size: 1.2em;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #006400;
    color: #FFFFFF;
  }
`;

const SaveTrip = () => {
  const [tripName, setTripName] = useState('');

  const handleSave = (e) => {
    e.preventDefault();
    // Handle saving trip
  };

  return (
    <SaveContainer>
      <h1>Save Your Trip</h1>
      <Form onSubmit={handleSave}>
        <Input
          type="text"
          placeholder="Trip Name"
          value={tripName}
          onChange={(e) => setTripName(e.target.value)}
        />
        <Button type="submit">Save Trip</Button>
      </Form>
    </SaveContainer>
  );
};

export default SaveTrip;
