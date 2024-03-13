import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import PageHome from './pages/PageHome';
import PageWorks from './pages/PageWorks';
import PageAbout from './pages/PageAbout';
import PageContact from './pages/PageContact';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Router>
      <div id="site-wrapper">
        <Header />
        <Sidebar />
        <Routes>
          <Route path="/" exact element={<PageHome />} />
          <Route path="/about" element={<PageAbout />} />
          <Route path="/works" element={<PageWorks />} />
          <Route path="/contact" element={<PageContact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;