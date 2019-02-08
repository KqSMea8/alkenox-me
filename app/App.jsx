// Main component of our application.
// We setup react-helmet, which let us nicely manage our <head />
// It's a nice library you should use!

import React from 'react'
import importedComponent from 'react-imported-component'
import { Helmet } from 'react-helmet'
import { Switch, Route, Redirect } from 'react-router-dom'

import SiteNav from './components/SiteNav'
import Footer from './components/Footer'

import Home from './pages/Home'

const ContentCreation = importedComponent(() => import('./pages/ContentCreation'))
const VideoProduction = importedComponent(() => import('./pages/VideoProduction'))
const InteractiveMedia = importedComponent(() => import('./pages/InteractiveMedia'))
const SoundDesign = importedComponent(() => import('./pages/SoundDesign'))
const MusicProduction = importedComponent(() => import('./pages/MusicProduction'))
const WebDesign = importedComponent(() => import('./pages/WebDesign'))
const MotionGraphics = importedComponent(() => import('./pages/MotionGraphics'))
const AudioVisualRx = importedComponent(() => import('./pages/AudioVisualRx'))
const About = importedComponent(() => import('./pages/About'))
const Contact = importedComponent(() => import('./pages/Contact'))

const App = () => (
    <span>

      <Helmet defaultTitle="Alkenox Media & Entertainment, LLC">
        <meta charSet="utf-8" />
      </Helmet>

      <SiteNav />

      <div className='mainContent'>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/content-creation" render={() => <ContentCreation /> } />
          <Route exact path="/video-production" render={() => <VideoProduction /> } />
          <Route exact path="/interactive-media" render={() => <InteractiveMedia /> } />
          <Route exact path="/sound-design" render={() => <SoundDesign /> } />
          <Route exact path="/music-production" render={() => <MusicProduction /> } />
          <Route exact path="/web-design" render={() => <WebDesign /> } />
          <Route exact path="/motion-graphics" render={() => <MotionGraphics /> } />
          <Route exact path="/audio-visual-rx" render={() => <AudioVisualRx /> } />
          <Route exact path="/about-us" render={() => <About /> } />
          <Route exact path="/contact-us" render={() => <Contact /> } />
          <Redirect to="/" />
        </Switch>
      </div>

      <Footer />

    </span>
  )

export default App
