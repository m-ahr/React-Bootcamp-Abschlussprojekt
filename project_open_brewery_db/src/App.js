import './App.css';
import React from 'react';
import Data from './components/data/data';
import Dashboard from './components/dashboard/dashboard';
import Contact from './components/contact/contact';
import {Route, Routes} from 'react-router-dom';
// React-Routing
function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/data" element={<Data/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </div>
  );
}

export default App;