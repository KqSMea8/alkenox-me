import * as React from "react";

import LazyLoad from "react-lazyload";

import ReactPlayer from "react-player";
import AudioPlayer from "react-modular-audio-player";

import { Flex, Link as Href, Image, Box, Card, Heading, Text } from "rebass";

const BlokRx: React.SFC<{}> = () => {
  return (
    <Flex flexWrap="wrap">
      <Box width={1}>
        <h1>
          Audio & Visual
          <br />
          Repair
        </h1>
        <h2>Video Repair</h2>
        <h2>Audio Repair</h2>
        <h2>Photo Repair</h2>
      </Box>
    </Flex>
  );
};

export default BlokRx;
