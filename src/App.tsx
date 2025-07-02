import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Garage from './pages/Garage';
import History from './pages/History';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import { FullScreenLoader } from './components/ui';

function App() {
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  useEffect(() => {
    // Simulate app initialization
    const timer = setTimeout(() => {
      setIsInitialLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (isInitialLoading) {
    return (
      <FullScreenLoader 
        text="LOADING GARAGE"
        subtitle="Preparing your automotive experience..."
      />
    );
  }

  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/garage" element={<Garage />} />
            <Route path="/history" element={<History />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  );
}

export default App;