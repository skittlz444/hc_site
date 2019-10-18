import React, {Suspense, lazy} from 'react';

import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Footer from './components/shared/Footer';
import MyNavBar from './components/shared/NavBar';
import NotFound from './components/shared/NotFound';
//the sharedStyles contains things site wide styling for elements like h1, h2 etc, however since it isn't directly used, npm throws a warning
//about it being unused - on build in the ci/cd tool, warnings are treated like errors and will cause the build to fail, so the 
//warning needs to be suppressed by the next line
// eslint-disable-next-line
import sharedStyles from './components/shared/SharedStyles.module.css';
import SuspensePlaceholder from './components/shared/placeholders/SuspensePlaceholder.js';

require('animate.css');
require('bootstrap');

//start loading the components lazily but implement an immediate promise incase it's required before its ready (preload)
const contactPromise = import('./components/contact/Contact');
const Contact = lazy(() => contactPromise);
const homePromise = import('./components//home/Home');
const Home = lazy(() => homePromise);

function App() {
  return (
    <div className="App">
    <ToastContainer/>
      <Router>
        <MyNavBar/>
        <Suspense fallback={<SuspensePlaceholder/>}>
        <Switch>
          <Redirect exact from="/" to="/home"/>
          <Route exact path='/home' component={Home} />
          <Route path='/contact' component={Contact} />
          <Route component={NotFound} />
        </Switch>
        </Suspense>
        <Footer/>
      </Router>
    </div>
  );
};

export default App;