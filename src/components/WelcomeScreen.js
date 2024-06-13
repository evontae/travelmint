import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #98FF98;
  color: #FFFFFF;
  text-align: center;
  padding: 20px;
`;

const Button = styled.button`
  background-color: #006400;
  color: #FFFFFF;
  border: none;
  padding: 15px 30px;
  margin-top: 20px;
  cursor: pointer;
  font-size: 1.2em;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #004d00;
  }
`;

const WelcomeScreen = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/home');
  };

  return (
    <WelcomeContainer>
      <h1>Welcome to TravelMint</h1>
      <Button onClick={handleGetStarted}>Get Started</Button>
    </WelcomeContainer>
  );
};

export default WelcomeScreen;
