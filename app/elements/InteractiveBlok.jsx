import React from 'react'
import { Link } from 'react-router-dom'
import { Fade } from 'react-reveal'

import '../styles/n0-x.styles.scss'

const InteractiveBlok = () => (

    <Fade left duration={ 2000 } delay={ 0 } enter exit fraction={ .8 }>
      <span className='interBlok'>
        <Fade cascade duration={ 3000 } delay={ 1500 } fraction={ .8 }>
          <h2 className='hover-lay'><Link to='/interactive-media' exact>Interactive Media</Link></h2>
        </Fade>
        <span className='bg' />
      </span>
    </Fade>

)

export default InteractiveBlok
