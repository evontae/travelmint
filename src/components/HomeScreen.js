import React, { useState } from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

const HomeScreen = () => {
  const [location, setLocation] = useState('');
  const [budget, setBudget] = useState('');
  const [travelDates, setTravelDates] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <HomeContainer>
      <h1>Plan Your Trip</h1>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Budget"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Travel Dates"
          value={travelDates}
          onChange={(e) => setTravelDates(e.target.value)}
        />
        <Button type="submit">Search</Button>
      </Form>
    </HomeContainer>
  );
};

export default HomeScreen;
