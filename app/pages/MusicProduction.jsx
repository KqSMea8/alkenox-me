import React from 'react'
import { Helmet } from 'react-helmet'

import '../styles/n0-x.styles.scss'
import MxHeader from '../static/svg/mxProHeader.svg'
import { Fade } from 'react-reveal'

import AudioPlayer from 'react-modular-audio-player'

let audioScores = [
  {
    src: 'https://github.com/alkenox/alkenox-me-audio/blob/master/film_score_reel.mp3?raw=true',
    title: "SFXsource",
    artist: "n0-x"
  }
];

let audioSourceCues = [
  {
    src: 'https://github.com/alkenox/alkenox-me-audio/blob/master/dick_tracey.mp3?raw=true',
    title: "Dick Tracey",
    artist: "n0-x"
  },
  {
    src: 'https://github.com/alkenox/alkenox-me-audio/blob/master/uh_lil_lit.mp3?raw=true',
    title: "Uh Lil Lit",
    artist: "n0-x"
  },
  {
    src: 'https://github.com/alkenox/alkenox-me-audio/blob/master/broken_seams.mp3?raw=true',
    title: "Broken Seams",
    artist: "n0-x"
  },
  {
    src: 'https://github.com/alkenox/alkenox-me-audio/blob/master/on_display.mp3?raw=true',
    title: "On Display",
    artist: "n0-x"
  },
  {
    src: 'https://github.com/alkenox/alkenox-me-audio/blob/master/reflexion.mp3?raw=true',
    title: "Reflexion",
    artist: "n0-x"
  },
  {
    src: 'https://github.com/alkenox/alkenox-me-audio/blob/master/tommys_place.mp3?raw=true',
    title: "Tommy's Place",
    artist: "n0-x"
  },
  {
    src: 'https://github.com/alkenox/alkenox-me-audio/blob/master/vegas_overnight.mp3?raw=true',
    title: "Vegas Overnight",
    artist: "n0-x"
  }
];

const MusicProduction = () => (

  <span>

    <Helmet><title>Music Production</title></Helmet>

    <div className='content'>

      <Fade duration={ 2000 } delay={ 0 } enter exit fraction={ .3 }>
        <div className='nox-12 bg-logo'>
          <div className='bg-tint-2'>
            <MxHeader />
          </div>
        </div>
      </Fade>

      <Fade left duration={ 2000 } delay={ 0 } enter exit fraction={ .3 }>
        <div className='nox-12 bg-filmScore'>
          <div className='bg-tint-2 content'>
            <div className='text-light center-content'>
              <div className='text'>
                <AudioPlayer
                  audioFiles={audioScores}/>
                Film & Television Scoring
              </div>
            </div>
          </div>
        </div>
      </Fade>

      <Fade right duration={ 2000 } delay={ 0 } enter exit fraction={ .3 }>
        <div className='nox-12 bg-gameScore'>
          <div className='bg-tint-2 content'>
            <div className='text-light center-content'>
              <div className='text'>
                Interactive Scoring
              </div>
            </div>
          </div>
        </div>
      </Fade>

      <Fade left duration={ 2000 } delay={ 0 } enter exit fraction={ .3 }>
        <div className='nox-12 bg-sourceCue'>
          <div className='bg-tint-2 content'>
            <div className='text-light center-content'>
              <div className='text'>
                <AudioPlayer
                  audioFiles={audioSourceCues}/>
                Source & Background Cue Production
              </div>
            </div>
          </div>
        </div>
      </Fade>

      <div><br /><br /><br /></div>

    </div>

  </span>

    )

export default MusicProduction
