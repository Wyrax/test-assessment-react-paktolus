import './App.css';
import React, { Component, useState } from 'react';
// import React from 'react';
// import useState from 'react-usestateref';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

let moneyStored;
  if (window.localStorage.balance) {
    moneyStored = parseFloat(localStorage.getItem("balance"));
  } else {
    moneyStored = 42;
    localStorage.setItem("balance", moneyStored);
  }

function App() {
  
  const [balance, setBalance] = useState(moneyStored);
  console.log(`App balance = ${balance}`);

  return (
    <div className="App">
      <Header balance={balance} />
      <Content balance={balance} setBalance={setBalance} />
      <Footer />
    </div>
  );
}

export default App;
