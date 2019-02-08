import React from 'react'
import { Helmet } from 'react-helmet'

import '../styles/n0-x.styles.scss'

import SoundBlok from '../elements/SoundBlok'
import MusicBlok from '../elements/MusicBlok'
import WebBlok from '../elements/WebBlok'
import VideoBlok from '../elements/VideoBlok'
import MotionBlok from '../elements/MotionBlok'
import InteractiveBlok from '../elements/InteractiveBlok'
import RxBlok from '../elements/RxBlok'

const ContentCreation = () => (
  <div className='mainContent'>

    <Helmet><title>Content Creation</title></Helmet>

    <div className='logo-bg'>
      <div className='bg-tint'>
        <span className='services'>

          <SoundBlok />

          <MusicBlok />

          <WebBlok />

          <VideoBlok />

          <MotionBlok />

          <InteractiveBlok />

          <RxBlok />

        </span>
      </div>
    </div>

  </div>
)

export default ContentCreation
