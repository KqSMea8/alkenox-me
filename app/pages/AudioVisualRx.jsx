import React from 'react'
import { Helmet } from 'react-helmet'

import '../styles/n0-x.styles.scss'

import RxHeader from '../static/svg/rxHeader.svg'
import { Fade } from 'react-reveal'

const AudioVisualRx = () => (
  <span>

    <Helmet><title>Audio & Visual Rx</title></Helmet>

    <div className='content'>

      <Fade duration={ 2000 } delay={ 0 } enter exit fraction={ .3 }>
        <div className='nox-12 bg-logo'>
          <div className='bg-tint-2'>
            <RxHeader />
          </div>
        </div>
      </Fade>

      <Fade right duration={ 2000 } delay={ 0 } enter exit fraction={ .3 }>
        <div className='nox-12 bg-animation'>
          <div className='bg-tint-2 content'>
            <div className='text-light center-content'>
              <span className='nox-12 heading text-center'>Audio Repair</span>
              <span className='nox-12 text'></span>
            </div>
          </div>
        </div>
      </Fade>

      <Fade left duration={ 2000 } delay={ 0 } enter exit fraction={ .3 }>
        <div className='nox-12 bg-sequence'>
          <div className='bg-tint-2 content'>
            <div className='text-light center-content'>
              <span className='nox-12 heading text-center'>Video Salvage</span>
              <span className='nox-12 text'></span>
            </div>
          </div>
        </div>
      </Fade>

      <Fade right duration={ 2000 } delay={ 0 } enter exit fraction={ .3 }>
        <div className='nox-12 bg-promoGif'>
          <div className='bg-tint-2 content'>
            <div className='text-light center-content'>
              <span className='nox-12 heading text-center'>Photo Repair</span>
              <span className='nox-12 text'></span>
            </div>
          </div>
        </div>
      </Fade>


    </div>

    <div><br /><br /><br /></div>

  </span>

    )

export default AudioVisualRx
