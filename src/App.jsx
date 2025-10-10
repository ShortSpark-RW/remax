import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AIChatButton from './components/AIChatButton';
import FloatingLanguageButton from './components/FloatingLanguageButton';
import Home from './pages/Home';
import ListLayout from './pages/ListLayout';
import SingleProperty from './pages/SingleProperty';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/list-layout" element={<ListLayout />} />
            <Route path="/properties" element={<ListLayout />} />
            <Route path="/property/:id" element={<SingleProperty />} />
            <Route path="/property" element={<SingleProperty />} />
          </Routes>
        </main>
        <Footer />
        <AIChatButton />
        <FloatingLanguageButton />
      </div>
    </Router>
  );
}

export default App;
