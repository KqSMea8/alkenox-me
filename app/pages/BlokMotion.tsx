import * as React from "react";

import LazyLoad from "react-lazyload";

import ReactPlayer from "react-player";
import AudioPlayer from "react-modular-audio-player";

import { Flex, Link as Href, Image, Box, Card, Heading, Text } from "rebass";

const BlokMotion: React.SFC<{}> = () => {
  return (
    <Flex flexWrap="wrap">
      <Box width={1}>
        <h1>Motion Graphics</h1>
        <LazyLoad offset={100}>
          <ReactPlayer
            url="https://github.com/alkenox/alkenox-me-videos/blob/master/whiteboard-enoch.mp4?raw=true"
            width="100%"
            height="100%"
            loop
            playing
            volume={0}
          />
        </LazyLoad>
        <h2>Interactive Graphic Design</h2>
        <LazyLoad offset={100}>
          <ReactPlayer
            url="https://github.com/alkenox/alkenox-me-videos/blob/master/talent-seq-joker.mp4?raw=true"
            width="100%"
            height="100%"
            loop
            playing
            volume={0}
          />
        </LazyLoad>
        <h2>Film & Television</h2>
        <LazyLoad offset={100}>
          <img
            src="https://media.giphy.com/media/MVgLYGeuRP4JynEhNU/source.gif"
            alt="Sissy Promo Gif"
          />
        </LazyLoad>
        <h2>Advertising</h2>
      </Box>
    </Flex>
  );
};

export default BlokMotion;
