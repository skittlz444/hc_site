import React, {Suspense, lazy} from 'react';
import MyNavBar from './components/shared/NavBar';
import Footer from './components/shared/Footer';
import sharedStyles from './components/shared/SharedStyles.module.css'
import SuspensePlaceholder from './components/shared/placeholders/SuspensePlaceholder.js'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

require('animate.css')
require('bootstrap')

//start loading the components dynamically but implement a lazy call incase it's required before its ready (preload)
const homePromise = import('./components//home/Home');
const contactPromise = import('./components/contact/Contact');
const Home = lazy(() => homePromise);
const Contact = lazy(() => contactPromise);

function App() {
  return (
    <div className="App">
    <ToastContainer/>
      <Router>
        <MyNavBar/>
        <Suspense fallback={<SuspensePlaceholder/>}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/contact' component={Contact} />
        </Switch>
        </Suspense>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
