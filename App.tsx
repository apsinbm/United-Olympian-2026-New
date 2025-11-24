import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TeamGrid from './components/TeamGrid';
import ActionPlan from './components/ActionPlan';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans text-navy-deep">
      <Navbar />
      <main>
        <Hero />
        <TeamGrid />
        <ActionPlan />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;