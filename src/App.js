import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomeScreen from './components/WelcomeScreen';
import HomeScreen from './components/HomeScreen';
import SearchResults from './components/SearchResults';
import DestinationDetails from './components/DestinationDetails';
import SaveTrip from './components/SaveTrip';
import FeedbackForm from './components/FeedbackForm';
import Navigation from './components/Navigation';
import GlobalStyles from './GlobalStyles';

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Navigation />
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/details" element={<DestinationDetails />} />
        <Route path="/save" element={<SaveTrip />} />
        <Route path="/feedback" element={<FeedbackForm />} />
      </Routes>
    </Router>
  );
};

export default App;
