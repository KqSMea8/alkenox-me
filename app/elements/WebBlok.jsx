import React from 'react'
import { Link } from 'react-router-dom'
import { Fade } from 'react-reveal'
import '../styles/n0-x.styles.scss'

const WebBlok = () => (

    <Fade left duration={ 2000 } delay={ 1000 } enter exit fraction={ .8 }>
      <span className='webBlok'>
        <Fade cascade duration={ 3000 } delay={ 1500 } fraction={ .8 }>
          <h2><Link to='/web-design' exact>Web Design & UX / UI Development</Link></h2>
        </Fade>
        <span className='bg' />
      </span>
    </Fade>

)

export default WebBlok
