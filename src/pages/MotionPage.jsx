import React from 'react';
import ReactPlayer from 'react-player';
import { Flex, Box } from 'rebass';

const MotionPage = () => {
  return (
    <Flex flexWrap="wrap">
      <Box width={1}>
        <h1>Motion Graphics</h1>

        <ReactPlayer
          url="https://github.com/alkenox/alkenox-me-videos/blob/master/whiteboard-enoch.mp4?raw=true"
          width="100%"
          height="100%"
          loop
          playing
          volume={0}
        />

        <h2>Interactive Graphic Design</h2>

        <ReactPlayer
          url="https://github.com/alkenox/alkenox-me-videos/blob/master/talent-seq-joker.mp4?raw=true"
          width="100%"
          height="100%"
          loop
          playing
          volume={0}
        />

        <h2>Film & Television</h2>

        <img
          src="https://media.giphy.com/media/MVgLYGeuRP4JynEhNU/source.gif"
          alt="Sissy Promo Gif"
        />

        <h2>Advertising</h2>
      </Box>
    </Flex>
  );
};

export default MotionPage;
