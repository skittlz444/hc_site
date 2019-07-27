import React, {Suspense, lazy} from 'react';
// import logo from './logo.svg';
// import styles from './App.module.css';
import MyNavBar from './components/NavBar';
import sharedStyles from './components/SharedStyles.module.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import WOW from 'wowjs'
require('animate.css')
require('bootstrap')

const Home = lazy(() => import('./components/Home'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  return (
    <div className="App">
      <Router>
        <MyNavBar/>
        <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/contact' component={Contact} />
        </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
