import React from 'react'
import { Helmet } from 'react-helmet'

import '../styles/n0-x.styles.scss'
import SoundHeader from '../static/svg/soundHeader.svg'
import { Fade } from 'react-reveal'
import ReactPlayer from 'react-player'
import AudioPlayer from "react-modular-audio-player"
//import SFXsource from '../static/audio/SFXsource_2015.mp3'

let audioSFX = [
  {
    src: 'https://github.com/alkenox/alkenox-me-audio/blob/master/SFXsource_2015.mp3?raw=true',
    title: "SFXsource",
    artist: "n0-x"
  }
];

const SoundDesign = () => (
  <span>
    <Helmet><title>Sound Design</title></Helmet>

    <div className='content'>

      <Fade duration={ 2000 } delay={ 0 } enter exit fraction={ .3 }>
        <div className='nox-12 bg-logo'>
          <div className='bg-tint-2'>
            <SoundHeader />
          </div>
        </div>
      </Fade>

      <Fade left duration={ 2000 } delay={ 0 } enter exit fraction={ .3 }>
        <div className='nox-12 bg-sound'>
          <div className='bg-tint-2 content'>
            <div className='text-light center-content'>
              <span className='nox-12'>
                <AudioPlayer
                  audioFiles={ audioSFX } />
              </span>
              <div className='text'>
                Sound Design matters. It is what connects your audience to your product. Whether it is designing the dings and whistles on your app, getting the right sounds for your game-scape, sound is what brings your audience into your creation and connects them to it. Whatever your needs, we can help!
              </div>
            </div>
          </div>
        </div>
      </Fade>

      <div className='nox-12'>
        <div className='player-wrapper'>
          <ReactPlayer
            className='react-player'
            url='https://github.com/alkenox/alkenox-me-videos/blob/master/trailer-mosaic.mp4?raw=true'
            width='100%'
            height='100%'
            loop
            playing
            controls
            volume='0'
          />
        </div>
      </div>

      <Fade right duration={ 2000 } delay={ 0 } enter exit fraction={ .3 }>
        <div className='nox-12 bg-film'>
          <div className='bg-tint-2 content'>
            <div className='text-light center-content'>
              <div className='text'>
                Hard effect, soft effect, foley and soundscaping for Film, Television, and Games.
              </div>
            </div>
          </div>
        </div>
      </Fade>

      <div className='nox-12'>
        <div className='player-wrapper'>
          <ReactPlayer
            className='react-player'
            url='https://github.com/alkenox/alkenox-me-videos/blob/master/title-seq-caution.mp4?raw=true'
            width='100%'
            height='100%'
            loop
            playing
            controls
            volume='0'
          />
        </div>
      </div>

      <Fade left duration={ 2000 } delay={ 0 } enter exit fraction={ .3 }>
        <div className='nox-12 bg-branded'>
          <div className='bg-tint-2 content'>
            <div className='text-light center-content'>
              <div className='text'>
                Branded Sound Icons for a project or company.
              </div>
            </div>
          </div>
        </div>
      </Fade>

      <div className='nox-12'>
        <div className='player-wrapper'>
          <ReactPlayer
            className='react-player'
            url='https://github.com/alkenox/alkenox-me-videos/blob/master/aeon-soundDesign.mp4?raw=true'
            width='100%'
            height='100%'
            loop
            playing
            controls
            volume='0'
          />
        </div>
      </div>

      <Fade right duration={ 2000 } delay={ 0 } enter exit fraction={ .3 }>
        <div className='nox-12 bg-interactive'>
          <div className='bg-tint-2 content'>
            <div className='text-light center-content'>
              <div className='text'>
                Interactive projects ranging from audio navigation for the blind to the aesthetics of your user interface are welcome. For projects compatable with Unity or Javascript, we are able to implement our own testing keeping your team available to handle other important aspects of your project.
              </div>
            </div>
          </div>
        </div>
      </Fade>

      <div><br /><br /><br /></div>

    </div>

  </span>
    )

export default SoundDesign
