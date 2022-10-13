import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  useEffect(() =>{
    async function fetchData(){
      let placeholder = []
    }
  })
  return (
    <div className="App">
      Hello World
      <Header />
      <Footer />
    </div>
  );
}

export default App;
