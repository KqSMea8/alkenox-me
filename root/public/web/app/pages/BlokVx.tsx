import * as React from 'react';

import ReactPlayer from 'react-player';

import {useSpring, animated} from 'react-spring';

import { Flex, Link as Href, Image, Box, Card, Heading, Text } from 'rebass';

const BlokVx: React.SFC<{}> = () => {
  return (
    <Flex flexWrap="wrap">
      <Heading width={1} textAlign='center' fontSize={[3, 4, 5]} mt={5} py={3}>Video Production</Heading>
      <Heading width={1} textAlign='center' fontSize={[3, 4,]}>Web Video</Heading>

      <Box width={1/2} mx='auto' py={4} fontSize={3}>
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


      <Box mx='auto' py={2} fontSize={3}>
        <ReactPlayer
          url="https://github.com/alkenox/alkenox-me-videos/blob/master/trailer-mosaic.mp4?raw=true"
          width="100%"
          height="100%"
          controls
          playing
          loop
          volume={0}
        />

        <Text pb={5}>Movie Trailer for the Indie Feature Film "Mosaic" with all original scoring and
        3D Motion Graphics.</Text>
      </Box>

      <br />


      <Heading width={1} textAlign='center' mt={5} fontSize={[3, 4, 5]}>Our Process</Heading>


      <Box width={1/2} mx='auto' fontSize={3}>

        <h3>Pre-Production</h3>

        <p> We come together and figure out what it is you
        will need, get you a quote on how much it will cost to effectively produce
        your project, and sort out the shooting schedule with the script that you
        will also either provide us with or that we will help you write. This is
        the most important part of any production process. Without good planning,
        the entire project can lose its focus and fall apart very quickly.
        </p>

        <h3>Production</h3>

        <p>We embark upon what we have planned out for our shooting
        schedule. We arrive on location, with rehearsed talent, and begin collecting
        all the shots that we need to create your story.</p>

        <h3>Post-Production</h3>
        <p>Where it all comes together to create the final product. We
        cut the footage together, beautify the footage, and add some motion graphics
        where you have deemed necessary. </p>

      </Box>



    <Heading width={1} textAlign='center' mx='auto' py={3} fontSize={[3, 4, 5]}>The Cost</Heading>

      <Box width={1/2} mx='auto' fontSize={3}>
        <p> Each part of the production process incurs its costs, which is why in video
        production, when asked for an average price, the answer always has to be "It depends...":
          <ul>
            <li>Time - Needed for Pre-Production, Production, and Post</li>
            <li>Talent In front of the camera and behind it - ie. make-up artist,
            drone operator, etc.</li>
            <li>Equipment - Based on type of imagery desired, may need special lenses,
            special or multiple cameras, green screen, or studio space...</li>
            <li>Post-Production Needs - </li>
          </ul>
        </p>
      </Box>

    </Flex>
  );
};

export default BlokVx;
