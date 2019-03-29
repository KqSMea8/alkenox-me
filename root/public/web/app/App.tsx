/// <reference path="../../../core/types/interface.d.ts">

import * as React from "react";
import importedComponent from "react-imported-component";
import { Switch, Route, Redirect } from "react-router-dom";

import "./modernizr.js";
//import "./App.scss";
import Themed from "./global/Theme";

import SiteInterface from "./components/SiteInterface";
import Background from "./components/Background";

import HomePage from "./pages/HomePage";

const AboutPage = importedComponent(() => import("./pages/AboutPage"));

const ContactPage = importedComponent(() => import("./pages/ContactPage"));

const App: React.SFC<{}> = () => {
  return (
    <Themed>
      <Background>
        <SiteInterface>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/about-us" render={() => <AboutPage />} />
            <Route exact path="/contact-us" render={() => <ContactPage />} />
            <Redirect to="/" />
          </Switch>
        </SiteInterface>
      </Background>
    </Themed>
  );
};

export default App;
