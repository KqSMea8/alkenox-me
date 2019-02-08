import React from 'react'
import { Link } from 'react-router-dom'
import { Fade } from 'react-reveal'
import '../styles/n0-x.styles.scss'

const RxBlok = () => (

    <Fade right duration={ 2000 } delay={ 0 } enter exit fraction={ .8 }>
      <span className='rxBlok'>
        <Fade cascade duration={ 3000 } delay={ 1500 } fraction={ .8 }>
          <h2><Link to='/audio-visual-rx' exact>Audio & Visual Rx</Link></h2>
        </Fade>
        <span className='bg' />
      </span>
    </Fade>

)

export default RxBlok
