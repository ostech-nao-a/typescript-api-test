import React from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

function App() {
  const clickHandler = async () => {
    const res = await axios.get('http://localhost:3030/users')
    console.log(res)
    return res
  }
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={clickHandler}>Click me</button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
