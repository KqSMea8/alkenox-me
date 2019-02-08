import React from 'react'
import { Helmet } from 'react-helmet'

import '../styles/n0-x.styles.scss'
import MxHeader from '../static/svg/mxProHeader.svg'
import { Fade } from 'react-reveal'

import AudioPlayer from 'react-modular-audio-player'

import FilmScore from '../static/audio/film_score_reel.mp3'

import BrokenSeams from '../static/audio/broken_seams.mp3'
import DickTracey from '../static/audio/dick_tracey.mp3'
import FeralEncounter from '../static/audio/feral_encounter.mp3'
import OnDisplay from '../static/audio/on_display.mp3'
import Reflexion from '../static/audio/reflexion.mp3'
import TheEscape from '../static/audio/the_escape.mp3'
import TommysPlace from '../static/audio/tommys_place.mp3'
import TwistedDreams from '../static/audio/twisted_dreams.mp3'
import UhLilLit from '../static/audio/uh_lil_lit.mp3'
import VegasOvernight from '../static/audio/vegas_overnight.mp3'

let audioScores = [
  {
    src: FilmScore,
    title: "SFXsource",
    artist: "n0-x"
  }
];

let audioSourceCues = [
  {
    src: DickTracey,
    title: "Dick Tracey",
    artist: "n0-x"
  },
  {
    src: UhLilLit,
    title: "Uh Lil Lit",
    artist: "n0-x"
  },
  {
    src: BrokenSeams,
    title: "Broken Seams",
    artist: "n0-x"
  },
  {
    src: OnDisplay,
    title: "On Display",
    artist: "n0-x"
  },
  {
    src: Reflexion,
    title: "Reflexion",
    artist: "n0-x"
  },
  {
    src: TommysPlace,
    title: "Tommy's Place",
    artist: "n0-x"
  },
  {
    src: VegasOvernight,
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
