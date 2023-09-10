import './App.css';
import React from "react";
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <div class="content">
        <Header />
      </div>
      <div class="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
