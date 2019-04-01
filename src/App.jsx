// Core
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';
import loadable from '@loadable/component';

// Styling
import { Flex, Box } from 'rebass';
import styled from '@emotion/styled';
import N0xTheme from './styles/n0x.theme';

// Components
import { HomeBtn, AboutBtn, ContactBtn } from './components/Buttons';
import Footer from './components/Footer';
import Background from './components/Background';

// Pages
import HomePage from './pages/HomePage';

const AboutPage = loadable(() => import('./pages/AboutPage'));
const ContactPage = loadable(() => import('./pages/ContactPage'));
const SoundPage = loadable(() => import('./pages/SoundPage'));
const MxPage = loadable(() => import('./pages/MxPage'));
const WebPage = loadable(() => import('./pages/WebPage'));
const VxPage = loadable(() => import('./pages/VxPage'));
const MotionPage = loadable(() => import('./pages/MotionPage'));
const InteractivePage = loadable(() => import('./pages/InteractivePage'));
const RxPage = loadable(() => import('./pages/RxPage'));

// NavBar Style
const NavBar = styled.div`
  z-index: 1000;
  position: fixed;
  top: 0;
  padding: 1em;
`;

// The Core App
const App = () => {
  return (
    <Router>
      <N0xTheme>
        <Background>
          <Flex flexWrap="wrap" justifyContent="center">
            <NavBar>
              <Link to="/">
                <HomeBtn />
              </Link>
              <Link to="/about-us">
                <AboutBtn />
              </Link>
              <Link to="/contact-us">
                <ContactBtn />
              </Link>
            </NavBar>
            <Box style={{ minHeight: '80vh' }} mt={3} px={4} width={[1]}>
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/about-us" component={AboutPage} />
                <Route exact path="/contact-us" component={ContactPage} />
                <Route exact path="/sound-design" component={SoundPage} />
                <Route exact path="/music-production" component={MxPage} />
                <Route exact path="/web-design" component={WebPage} />
                <Route exact path="/video-production" component={VxPage} />
                <Route exact path="/motion-graphics" component={MotionPage} />
                <Route exact path="/interactive-media" component={InteractivePage} />
                <Route exact path="/digital-media-repair" component={RxPage} />
                <Redirect exact path="/" />
              </Switch>
            </Box>
            <Box mt={5} width={[1]}>
              <Footer
                copyright="Copyright"
                symbol="&copy;"
                year={2019}
                company="Alkenox Media & Entertainment, LLC."
                rights="All rights reserved."
              />
            </Box>
          </Flex>
        </Background>
      </N0xTheme>
    </Router>
  );
};

export default App;
