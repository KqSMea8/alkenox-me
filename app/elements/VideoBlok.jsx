import React from 'react'
import { Link } from 'react-router-dom'
import { Fade } from 'react-reveal'
import '../styles/n0-x.styles.scss'

const VideoBlok = () => (

    <Fade duration={ 2000 } delay={ 500 } enter exit fraction={ .8 }>
      <span className='vidBlok'>
        <Fade cascade duration={ 3000 } delay={ 1500 } fraction={ .8 }>
          <h2><Link to='/video-production' exact>Video Production</Link></h2>
        </Fade>
        <span className='bg' />
      </span>
    </Fade>

)

export default VideoBlok
