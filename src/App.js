import React, {Suspense, lazy} from 'react';
// import logo from './logo.svg';
// import styles from './App.module.css';
import MyNavBar from './components/NavBar';
import sharedStyles from './components/SharedStyles.module.css'
import SuspensePlaceholder from './components/SuspensePlaceholder.js'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
require('animate.css')
require('bootstrap')
// require('./avilon.css')

const Home = lazy(() => import('./components/Home'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  return (
    <div className="App">
      <Router>
        <MyNavBar/>
        <Suspense fallback={<SuspensePlaceholder/>}>
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
