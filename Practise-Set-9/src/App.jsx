import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Members from './pages/Members';
import Classes from './pages/Classes';
import Contact from './pages/Contact';
import NavbarComponent from './components/NavbarComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <>
     <div className="d-flex flex-column min-vh-100">
      <NavbarComponent />

      <main className="flex-grow-1">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/members" element={<Members />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </main>

      <FooterComponent />
    </div>
      
    </>
  );
}

export default App;