import React from 'react'

import { Fade, Flip, Rotate, Zoom, Bounce, Roll, Slide, LightSpeed } from 'react-reveal'

import '../styles/n0-x.styles.scss'

const Header = () => (
    <div className='header'>


      <Fade cascade duration={ 2500 } delay={ 1000 } fraction={ 0.2 }>
        <div className='bg-content'>
          <span>
            <Fade cascade duration={ 2500 } delay={ 500 } fraction={ 0.2 }>
              <h1>alkenox-me</h1>
            </Fade>

            <Fade cascade duration={ 2500 } delay={ 3000 } fraction={ 0.2 }>
              <div className='words'> Specializing in media and entertainment,</div>
            </Fade>
            <Fade cascade duration={ 2500 } delay={ 4000 } fraction={ 0.2 }>
              <div className='words'>offering a dedicated team to assist in building your vision</div>
            </Fade>
            <Fade cascade duration={ 2500 } delay={ 5000 } fraction={ 0.2 }>
              <div className='words'>via standard or other... experimental.. means.</div>
            </Fade>

          </span>
        </div>
      </Fade>
    </div>
)

export default Header
