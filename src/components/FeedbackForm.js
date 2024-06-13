import React, { useState } from 'react';
import styled from 'styled-components';

const FeedbackContainer = styled.div`
  padding: 20px;
  background-color: #FFFFFF;
  min-height: 100vh;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  max-width: 600px;
  margin: auto;
`;

const TextArea = styled.textarea`
  padding: 10px;
  border: 2px solid #A9A9A9;
  border-radius: 5px;
  font-size: 1em;
  resize: vertical;
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

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle feedback submission
  };

  return (
    <FeedbackContainer>
      <h1>Give Us Your Feedback</h1>
      <Form onSubmit={handleSubmit}>
        <TextArea
          rows="5"
          placeholder="Your Feedback"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
        <Button type="submit">Submit</Button>
      </Form>
    </FeedbackContainer>
  );
};

export default FeedbackForm;
