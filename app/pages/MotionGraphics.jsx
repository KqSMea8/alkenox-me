import React from 'react'
import { Helmet } from 'react-helmet'

import '../styles/n0-x.styles.scss'
import MotionHeader from '../static/svg/motionHeader.svg'
import { Fade } from 'react-reveal'

import ReactPlayer from 'react-player'


const MotionGraphics = () => (

  <span>

    <Helmet><title>Motion Graphics</title></Helmet>

    <div className='content'>

      <Fade duration={ 2000 } delay={ 0 } enter exit fraction={ .3 }>
        <div className='nox-12 bg-logo'>
          <div className='bg-tint-2'>
            <MotionHeader />
          </div>
        </div>
      </Fade>

      <Fade right duration={ 2000 } delay={ 0 } enter exit fraction={ .3 }>
        <div className='nox-12 bg-animation'>
          <div className='bg-tint-2 content'>
            <div className='text-light center-content'>
              <span className='nox-12 heading text-center'>Animation</span>
              <span className='nox-12 text'></span>
            </div>
          </div>
        </div>
      </Fade>

      <div className='nox-12'>
        <div className='player-wrapper'>
          <ReactPlayer
            className='react-player'
            url='https://github.com/alkenox/alkenox-me-videos/blob/master/whiteboard-enoch.mp4?raw=true'
            width='100%'
            height='100%'
            loop
            playing
            volume='0'
          />
        </div>
      </div>

      <Fade left duration={ 2000 } delay={ 0 } enter exit fraction={ .3 }>
        <div className='nox-12 bg-sequence'>
          <div className='bg-tint-2 content'>
            <div className='text-light center-content'>
              <span className='nox-12 heading text-center'>Title / Credit Sequence</span>
              <span className='nox-12 text'></span>
            </div>
          </div>
        </div>
      </Fade>

      <div className='nox-12'>
        <div className='player-wrapper'>
          <ReactPlayer
            className='react-player'
            url='https://github.com/alkenox/alkenox-me-videos/blob/master/talent-seq-joker.mp4?raw=true'
            width='100%'
            height='100%'
            loop
            playing
            volume='0'
          />
        </div>
      </div>

      <Fade right duration={ 2000 } delay={ 0 } enter exit fraction={ .3 }>
        <div className='nox-12 bg-promoGif'>
          <div className='bg-tint-2 content'>
            <div className='text-light center-content'>
              <span className='nox-12 heading text-center'>Promotional Gif</span>
              <span className='nox-12 text'></span>
            </div>
          </div>
        </div>
      </Fade>

      <img src='https://github.com/alkenox/alkenox-me-gifs/blob/master/sissy-arrow.gif?raw=true' alt='Sissy Promo Gif' />

      <Fade left duration={ 2000 } delay={ 0 } enter exit fraction={ .3 }>
        <div className='nox-12 bg-vectorArt'>
          <div className='bg-tint-2 content'>
            <div className='text-light center-content'>
              <span className='nox-12 heading text-center'>Logo / Icon</span>
              <span className='nox-12 text'></span>
            </div>
          </div>
        </div>
      </Fade>
    </div>

    <div><br /><br /><br /></div>

  </span>

    )

export default MotionGraphics
