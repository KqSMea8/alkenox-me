import React from 'react'
import { Helmet } from 'react-helmet'

import '../styles/n0-x.styles.scss'
import InteractiveHeader from '../static/svg/interactiveHeader.svg'
import { Fade } from 'react-reveal'

const InteractiveDesign = () => (

    <span>

      <Helmet><title>Interactive Media</title></Helmet>

      <div className='content'>

        <Fade duration={ 2000 } delay={ 0 } enter exit fraction={ .3 }>
          <div className='nox-12 bg-logo'>
            <div className='bg-tint-2'>
              <InteractiveHeader />
            </div>
          </div>
        </Fade>

        <Fade right duration={ 2000 } delay={ 0 } enter exit fraction={ .3 }>
          <div className='nox-12 bg-animation'>
            <div className='bg-tint-2 content'>
              <div className='text-light center-content'>
                <span className='nox-12 heading text-center'>Game Audio</span>
                <span className='nox-12 text'></span>
              </div>
            </div>
          </div>
        </Fade>

        <Fade left duration={ 2000 } delay={ 0 } enter exit fraction={ .3 }>
          <div className='nox-12 bg-sequence'>
            <div className='bg-tint-2 content'>
              <div className='text-light center-content'>
                <span className='nox-12 heading text-center'></span>
                <span className='nox-12 text'>Including video game environments ranging from interactive sound effects to interactive music...</span>
              </div>
            </div>
          </div>
        </Fade>

        <Fade right duration={ 2000 } delay={ 0 } enter exit fraction={ .3 }>
          <div className='nox-12 bg-promoGif'>
            <div className='bg-tint-2 content'>
              <div className='text-light center-content'>
                <span className='nox-12 heading text-center'>Interactive Scoring</span>
                <span className='nox-12 text'></span>
              </div>
            </div>
          </div>
        </Fade>

        <Fade left duration={ 2000 } delay={ 0 } enter exit fraction={ .3 }>
          <div className='nox-12 bg-vectorArt'>
            <div className='bg-tint-2 content'>
              <div className='text-light center-content'>
                <span className='nox-12 heading text-center'>Web App</span>
                <span className='nox-12 text'></span>
              </div>
            </div>
          </div>
        </Fade>
      </div>

      <div><br /><br /><br /></div>

    </span>

    )

export default InteractiveDesign
