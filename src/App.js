import React from 'react';
import logo from './logo.svg';
import styles from './App.module.css';
import MyNavBar from './components/NavBar';
require('bootstrap')

function App() {
  return (
    <div className="App">
      <MyNavBar/>
      <header className={styles.App_header}>
        <img src={logo} className={styles.App_logo} alt="logo" />
        <p>
          Test.
        </p>
        <a
          className={styles.App_link}
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
