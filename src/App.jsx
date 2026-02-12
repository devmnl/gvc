import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import WorkWithUs from './components/WorkWithUs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trabalhe-conosco" element={<WorkWithUs />} />
      </Routes>
    </Router>
  );
}

export default App;