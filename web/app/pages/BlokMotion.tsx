import * as React from 'react';

import ReactPlayer from 'react-player';
import { jsx } from '@emotion/core'
import { Flex, Link as Href, Image, Box, Card, Heading, Text } from 'rebass';

const BlokMotion: React.SFC<{}> = () => {
  return (
    <Flex flexWrap="wrap">
    <Heading width={1} textAlign='center' mt={5} py={3} fontSize={[3, 3, 4, 5]}>
      <span className='headingSz'>Motion Graphics</span>
    </Heading>

    <Heading width={1} textAlign='center' mt={5} fontSize={[2, 2, 3, 4]}>
      <span className='headingSz'>
      Whiteboard Animation
      </span>
    </Heading>

      <Box width={[1, 1, 11/12, 8/12]} mx='auto' px={3}>
        <ReactPlayer
          url="https://github.com/alkenox/alkenox-me-videos/blob/master/whiteboard-enoch.mp4?raw=true"
          width="100%"
          height="100%"
          loop
          playing
          volume={0}
        />
      </Box>

        <Heading width={1} textAlign='center' mt={5} py={3} fontSize={[2, 2, 3, 5]}>
          <span className='headingSz'>Interactive Graphic Design</span>
        </Heading>

      <Box width={[1, 1, 11/12, 8/12]} mx='auto' px={3}>
        <ReactPlayer
          url="https://github.com/alkenox/alkenox-me-videos/blob/master/talent-seq-joker.mp4?raw=true"
          width="100%"
          height="100%"
          loop
          playing
          volume={0}
        />
      </Box>

      <Heading width={1} textAlign='center' mt={5} py={3} fontSize={[2, 2, 3, 5]}>
        <span className='headingSz'>Animated Gifs</span>
      </Heading>

      <Box width={[1, 1, 11/12, 8/12]} mx='auto'>
        <img
          src="https://media.giphy.com/media/MVgLYGeuRP4JynEhNU/source.gif"
          alt="Sissy Promo Gif"
        />
      </Box>


    </Flex>
  );
};

export default BlokMotion;
