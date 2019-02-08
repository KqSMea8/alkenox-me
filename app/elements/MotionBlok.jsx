import React from 'react'
import { Link } from 'react-router-dom'

import { Fade } from 'react-reveal'

import '../styles/n0-x.styles.scss'

const MotionBlok = () => (

    <Fade right duration={ 2000 } delay={ 750 } enter exit fraction={ .8 }>
      <span className='motionBlok'>
        <Fade cascade duration={ 3000 } delay={ 1500 } fraction={ .8 }>
          <h2><Link to='/motion-graphics' exact>Motion Graphics</Link></h2>
        </Fade>
        <span className='bg' />
      </span>
    </Fade>

)

export default MotionBlok
