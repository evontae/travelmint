import React from 'react';
import styled from 'styled-components';

const DetailsContainer = styled.div`
  padding: 20px;
  background-color: #FFFFFF;
  min-height: 100vh;
`;

const Image = styled.img`
  max-width: 100%;
  border-radius: 10px;
  margin-top: 20px;
`;

const DestinationDetails = ({ destination }) => {
  return (
    <DetailsContainer>
      <h1>{destination.name}</h1>
      <p>{destination.description}</p>
      <Image src={destination.image} alt={destination.name} />
    </DetailsContainer>
  );
};

export default DestinationDetails;
