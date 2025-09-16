import React from 'react';
import './App.css';
import './theme.css';
import Home from './pages/Home';
import Footer from './components/Footer';

// PUBLIC_INTERFACE
function App() {
  /**
   * Root single-page application shell:
   * - Header and content from Home page
   * - Footer persistent
   * Applies Ocean Professional theme variables.
   */
  return (
    <div className="app-shell">
      <Home />
      <Footer />
    </div>
  );
}

export default App;
