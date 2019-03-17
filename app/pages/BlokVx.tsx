import * as React from "react";

import LazyLoad from "react-lazyload";

import ReactPlayer from "react-player";


import { Flex, Link as Href, Image, Box, Card, Heading, Text } from "rebass";

const BlokVx: React.SFC<{}> = () => {
  return (
    <Flex flexWrap="wrap">
      <Box width={1}>
        <h1>Video Production</h1>
        <h2>Web Video</h2>
        <p>
          If you have a story to tell for your product, service, or an
          independent project, we can put together a package to suit your needs.
          Do you need help with only one part of the production process, or all
          the parts? Let us know your budget and we will let you know what we
          can do with that budget to give you what you need.
        </p>
        <LazyLoad offset={100}>
          <ReactPlayer
            url="https://github.com/alkenox/alkenox-me-videos/blob/master/trailer-mosaic.mp4?raw=true"
            width="100%"
            height="100%"
            controls
            playing
            loop
            volume={0}
          />
        </LazyLoad>
        <h2>Film & Television</h2>
        <h2>Portfolio & Resume</h2>
      </Box>
    </Flex>
  );
};

export default BlokVx;
