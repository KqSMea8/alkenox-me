import * as React from 'react';

import ReactPlayer from 'react-player';

import { Flex, Link as Href, Image, Box, Card, Heading, Text } from 'rebass';

const BlokVx: React.SFC<{}> = () => {
  return (
    <Flex flexWrap="wrap">
      <Box width={3/4} mx='auto'  mt={5}>
        <h1>Video Production</h1>
        <h2>Web Video</h2>
      </Box>



      <Box width={3/4} mx='auto' py={4} fontSize={3}>
        <p>
          Where ever you turn, the online world has become filled with web videos,
          created to explain products, services, and tell stories to anyone willing
          to stick around and watch. Most lazy web surfers tend to stop when faced
          with a video, which is why web videos have become a way to capture your
          visitors' attention and turn them into customers.
        </p>

        <p>
          Whether you need a short internet commercial for your business, have a
          story to tell, or have video and images that you need turned into
          something with purpose; we are here to help.
        </p>
      </Box>


      <Box mx='auto' py={5} fontSize={3} alignContent='center'>
        <ReactPlayer
          url="https://github.com/alkenox/alkenox-me-videos/blob/master/trailer-mosaic.mp4?raw=true"
          width="100%"
          height="100%"
          controls
          playing
          loop
          volume={0}
        />

        <p>Movie Trailer for the Indie Feature Film "Mosaic" with all original scoring and
        3D Motion Graphics.
        </p>
      </Box>

      <Box width={3/4} mx='auto' py={3} fontSize={3}>
        <h2>Our Process</h2>

        <p>
        Pre-Production is where we come together and figure out what it is you
        will need, get you a quote on how much it will cost to effectively produce
        your project, and sort out the shooting schedule with the script that you
        will also either provide us with or that we will help you write. This is
        the most important part of any production process. Without good planning,
        the entire project can lose its focus and fall apart very quickly.
        </p>

        <p>
        Production is when we embark upon what we have planned out for our shooting
        schedule. We arrive on location, with rehearsed talent, and begin collecting
        all the shots that we need to create your story.
        </p>

      </Box>

      <Box width={3/4} mx='auto' py={3} fontSize={3}>
        <h2>The Cost</h2>


        <p> Prices for video production depend on how much time is needed to
        complete the shoot, how many and what kind of talent are needed in front
        of the camera and behind it, and what kind of equipment is/space is
        needed.
        </p>
      </Box>



    </Flex>
  );
};

export default BlokVx;
