import React from 'react'
import { Helmet } from 'react-helmet'

import '../styles/n0-x.styles.scss'
import VidProHeader from '../static/svg/vidProHeader.svg'
import { Fade } from 'react-reveal'
import ReactPlayer from 'react-player'

const VideoProduction = () => (

  <span>

    <Helmet><title>Video Production</title></Helmet>

    <div className='content'>

      <Fade duration={ 2000 } delay={ 0 } enter exit fraction={ .3 }>
        <div className='nox-12 bg-logo'>
          <div className='bg-tint-2'>
            <VidProHeader />
          </div>
        </div>
      </Fade>

      <Fade left duration={ 2000 } delay={ 0 } enter exit fraction={ .3 }>
        <div className='nox-12 bg-vidPro'>
          <div className='bg-tint-2 content'>
            <div className='text-light center-content'>
              <span className='nox-12 text'>
              If you have a story to tell for your product, service, or an independent project, we can put together a package to suit your needs. Do you need help with only one part of the production process, or all the parts? Let us know your budget and we will let you know what we can do with that budget to give you what you need.</span>
            </div>
          </div>
        </div>
      </Fade>

      <Fade right duration={ 2000 } delay={ 0 } enter exit fraction={ .3 }>
        <div className='nox-12 bg-prepro'>
          <div className='bg-tint-2 content'>
            <div className='text-light center-content'>
              <span className='nox-12 heading text-center'>Planning & Prepping</span>
              <span className='nox-12 text'></span>
            </div>
          </div>
        </div>
      </Fade>

      <Fade left duration={ 2000 } delay={ 0 } enter exit fraction={ .3 }>
        <div className='nox-12 bg-pro'>
          <div className='bg-tint-2 content'>
            <div className='text-light center-content'>
              <span className='nox-12 heading text-center'>Production & Management</span>
              <span className='nox-12 text'></span>
            </div>
          </div>
        </div>
      </Fade>

      <Fade right duration={ 2000 } delay={ 0 } enter exit fraction={ .3 }>
        <div className='nox-12 bg-post'>
          <div className='bg-tint-2 content'>
            <div className='text-light center-content'>
              <span className='nox-12 heading text-center'>Putting The Pieces Together</span>
              <span className='nox-12 text'></span>
            </div>
          </div>
        </div>
      </Fade>

      <div className='nox-12'>
        <div className='player-wrapper'>
          <ReactPlayer
            className='react-player'
            url='https://youtu.be/Vl_-M1VmBRc'
            width='100%'
            height='100%'
            controls
            playing
            loop
            volume='0'
          />
        </div>
      </div>

    </div>

    <div><br /><br /><br /></div>

  </span>
)

export default VideoProduction
