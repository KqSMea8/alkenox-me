import * as React from "react";

import LazyLoad from "react-lazyload";

import ReactPlayer from "react-player";


import { Flex, Link as Href, Image, Box, Card, Heading, Text } from "rebass";

let audioScores = [
  {
    src:
      "https://github.com/alkenox/alkenox-me-audio/blob/master/film_score_reel.mp3?raw=true",
    title: "SFXsource",
    artist: "n0-x"
  }
];

let audioSourceCues = [
  {
    src:
      "https://github.com/alkenox/alkenox-me-audio/blob/master/dick_tracey.mp3?raw=true",
    title: "Dick Tracey",
    artist: "n0-x"
  },
  {
    src:
      "https://github.com/alkenox/alkenox-me-audio/blob/master/uh_lil_lit.mp3?raw=true",
    title: "Uh Lil Lit",
    artist: "n0-x"
  },
  {
    src:
      "https://github.com/alkenox/alkenox-me-audio/blob/master/broken_seams.mp3?raw=true",
    title: "Broken Seams",
    artist: "n0-x"
  },
  {
    src:
      "https://github.com/alkenox/alkenox-me-audio/blob/master/on_display.mp3?raw=true",
    title: "On Display",
    artist: "n0-x"
  },
  {
    src:
      "https://github.com/alkenox/alkenox-me-audio/blob/master/reflexion.mp3?raw=true",
    title: "Reflexion",
    artist: "n0-x"
  },
  {
    src:
      "https://github.com/alkenox/alkenox-me-audio/blob/master/tommys_place.mp3?raw=true",
    title: "Tommy's Place",
    artist: "n0-x"
  },
  {
    src:
      "https://github.com/alkenox/alkenox-me-audio/blob/master/vegas_overnight.mp3?raw=true",
    title: "Vegas Overnight",
    artist: "n0-x"
  }
];
const BlokMx: React.SFC<{}> = () => {
  return (
    <Flex flexWrap="wrap">
      <Box width={1}>
        <h1>Music Production</h1>
        <AudioPlayer audioFiles={audioScores} />
        <h2>Film & Television Scoring</h2>
        <AudioPlayer audioFiles={audioScores} />
        <h2>Film & Television Scoring</h2>
        <h2>Interactive Scoring</h2>
        <AudioPlayer audioFiles={audioSourceCues} />
        <h2>Source & Background Cue Production</h2>
        <AudioPlayer audioFiles={audioSourceCues} />
        <h2>Source & Background Cue Production</h2>
      </Box>
    </Flex>
  );
};

export default BlokMx;
