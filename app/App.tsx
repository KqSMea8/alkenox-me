/// <reference path="../../types/interface.d.ts">
// Main component of our application.
// We setup react-helmet, which let us nicely manage our <head />
// It's a nice library you should use!

import * as React from 'react';
import importedComponent from 'react-imported-component';
import { Switch, Route, Redirect } from 'react-router-dom';

import './modernizr.js';
//import "./App.scss";
import Themed from './global/Theme';

import SiteInterface from './components/SiteInterface';
import Background from './components/Background';
import Success from './components/Success';
import Error from './components/Error';

import HomePage from './pages/HomePage';

const AboutPage = importedComponent(() => import('./pages/AboutPage'));

const ContactPage = importedComponent(() => import('./pages/ContactPage'));

const App: React.SFC<{}> = () => {
  return (
    <Themed>
      <Background>
        <SiteInterface>
          <Switch>
            <Route exact path="/" render={() => <HomePage />} />
            <Route exact path="/about-us" render={() => <AboutPage />} />
            <Route exact path="/contact-us" render={() => <ContactPage />} />
            <Route exact path="/success" render={() => <Success />} />
            <Route exact path="/error" render={() => <Error />} />
            <Redirect to="/" />
          </Switch>
        </SiteInterface>
      </Background>
    </Themed>
  );
};

export default App;
