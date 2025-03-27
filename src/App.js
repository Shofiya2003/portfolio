import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Portfolio from './Portfolio';
import Resume from './components/Resume';
import Projects from './components/Projects';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
            {/* Add other routes */}
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
