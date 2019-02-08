import React from 'react'
import { Helmet } from 'react-helmet'

import '../styles/n0-x.styles.scss'

import WebDev from '../static/svg/webHeader.svg'
import { Fade } from 'react-reveal'


const WebDesign = () => (
<span>
  
  <Helmet><title>Web Design</title></Helmet>

  <div className='content'>

    <Fade duration={ 2000 } delay={ 0 } enter exit fraction={ .3 }>
      <div className='nox-12 bg-logo'>
        <div className='bg-tint-2'>
          <WebDev />
        </div>
      </div>
    </Fade>

    <Fade left duration={ 2000 } delay={ 0 } enter exit fraction={ .3 }>
      <div className='nox-12 bg-proto'>
        <div className='bg-tint-2 content'>
          <div className='text-light center-content'>
            <span className='nox-12 heading text-center'>Building The Prototype</span>
            <span className='nox-12 text'>Everything begins with a prototype. You will work with one or more of our designers to develop the overall look, style, and aesthetics of your vision.</span>
          </div>
        </div>
      </div>
    </Fade>

    <Fade right duration={ 2000 } delay={ 0 } enter exit fraction={ .3 }>
      <div className='nox-12 bg-dev'>
        <div className='bg-tint-2 content'>
          <div className='text-light center-content'>
            <span className='nox-12 heading text-center'>Development </span>
            <span className='nox-12 text'>Once we have a prototype to work off of, we can hand it over to our development department where the design will become functional code.</span>
          </div>
        </div>
      </div>
    </Fade>

    <Fade left duration={ 2000 } delay={ 0 } enter exit fraction={ .3 }>
      <div className='nox-12 bg-manage'>
        <div className='bg-tint-2 content'>
          <div className='text-light center-content'>
            <span className='nox-12 heading text-center'>Website Management</span>
            <span className='nox-12 text'>We handle all of your management needs including <br />
              -adding, modifying, or removing pages<br />
            -data analytics</span>
          </div>
        </div>
      </div>
    </Fade>

    <Fade right duration={ 2000 } delay={ 0 } enter exit fraction={ .3 }>
      <div className='nox-12 bg-seo'>
        <div className='bg-tint-2 content'>
          <div className='text-light center-content'>
            <span className='nox-12 heading text-center'>Site Optimization</span>
            <span className='nox-12 text'>We will take care of all of your site's metadata to make sure your site is found by the most popular search engines. We also optimize all of your images and media for a smooth user experience.</span>
          </div>
        </div>
      </div>
    </Fade>

    <Fade left duration={ 2000 } delay={ 0 } enter exit fraction={ .3 }>
      <div className='nox-12 bg-modern'>
        <div className='bg-tint-2 content'>
          <div className='text-light center-content'>
            <span className='nox-12 heading text-center'>Modern Web Development</span>
            <span className='nox-12 text'>Yes we do offer your traditional PHP and Jquery based design and development but we offer modern web development as well. Which includes using frameworks such as NodeJs, ReactJs, and more.</span>
          </div>
        </div>
      </div>
    </Fade>

    <Fade right duration={ 2000 } delay={ 0 } enter exit fraction={ .3 }>
      <div className='nox-12 bg-serverless'>
        <div className='bg-tint-2 content'>
          <div className='text-light center-content'>
            <span className='nox-12 heading text-center'>Serverless Web Development</span>
            <span className='nox-12 text'>Not all web experiences require a server to be functional and can be cheaper as well as more efficient without one.</span>
          </div>
        </div>
      </div>
    </Fade>

    <div><br /><br /><br /></div>

  </div>
</span>
)

export default WebDesign
