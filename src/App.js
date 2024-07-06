import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Profile from './components/Profile';
import Footer from './components/Footer';
const App = () => {
  return (
    <Router>
      <Header />
      <div className="flex flex-col min-h-screen"> 
      <main className="container mx-auto px-4 py-8 flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
<Footer />
</div>
    </Router>
  );
};

export default App;
