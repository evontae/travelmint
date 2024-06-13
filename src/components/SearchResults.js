import React from 'react';
import styled from 'styled-components';

const ResultsContainer = styled.div`
  padding: 20px;
  background-color: #FFFFFF;
  min-height: 100vh;
`;

const ResultCard = styled.div`
  border: 2px solid #A9A9A9;
  border-radius: 10px;
  padding: 15px;
  margin: 10px 0;
  background-color: #F0E68C;
`;

const SearchResults = ({ results }) => {
  return (
    <ResultsContainer>
      <h1>Search Results</h1>
      {results.map((result, index) => (
        <ResultCard key={index}>
          <h2>{result.name}</h2>
          <p>{result.description}</p>
        </ResultCard>
      ))}
    </ResultsContainer>
  );
};

export default SearchResults;
