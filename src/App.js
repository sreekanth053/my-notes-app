// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import NotFound from './pages/NotFound'; // Create NotFound component for handling 404 errors

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/*" element={<NotFound />} /> {/* Handle 404 errors */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
