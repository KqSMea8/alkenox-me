// Dead simple component for the hello world (hi mom!)

import React from 'react'

import { Fade } from 'react-reveal'

import '../styles/n0-x.styles.scss'

const Services = () => (
  <div className='logo-bg'>
    <div className='bg-tint'>
      <span className='services'>

        <Fade left duration={ 2000 } delay={ 500 } enter exit fraction={ .8 }>
          <span className='webBlok'>
            <Fade cascade duration={ 3000 } delay={ 1500 } fraction={ .8 }>
              <h2>Web Design</h2>
            </Fade>
            <span className='bg' />
          </span>
        </Fade>

        <Fade right duration={ 2000 } delay={ 0 } enter exit fraction={ .8 }>
          <span className='motionBlok'>
            <Fade cascade duration={ 3000 } delay={ 1500 } fraction={ .8 }>
              <h2>Motion Graphics</h2>
            </Fade>
            <span className='bg' />
          </span>
        </Fade>

        <Fade left duration={ 2000 } delay={ 0 } enter exit fraction={ .8 }>
          <span className='interBlok'>
            <Fade cascade duration={ 3000 } delay={ 1500 } fraction={ .8 }>
              <h2>Interactive Design</h2>
            </Fade>
            <span className='bg' />
          </span>
        </Fade>

        <Fade right duration={ 2000 } delay={ 500 } enter exit fraction={ .8 }>
          <span className='vidBlok'>
            <Fade cascade duration={ 3000 } delay={ 1500 } fraction={ .8 }>
              <h2>Video Production</h2>
            </Fade>
            <span className='bg' />
          </span>
        </Fade>

        <Fade left duration={ 2000 } delay={ 500 } enter exit fraction={ .8 }>
          <span className='soundBlok'>
            <Fade cascade duration={ 3000 } delay={ 1500 } fraction={ .8 }>
              <h2>Sound Design</h2>
            </Fade>
            <span className='bg' />
          </span>
        </Fade>

        <Fade right duration={ 2000 } delay={ 0 } enter exit fraction={ .8 }>
          <span className='mxBlok'>
            <Fade cascade duration={ 3000 } delay={ 1500 } fraction={ .8 }>
              <h2>Music Production & Licensing</h2>
            </Fade>
            <span className='bg' />
          </span>
        </Fade>

      </span>
    </div>
  </div>
)

export default Services
