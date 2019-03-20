import * as React from 'react';

import ReactPlayer from 'react-player';

import {useSpring, animated} from 'react-spring';
import { Modal, Button } from 'antd';

import { Flex, Link as Href, Image, Box, Card, Heading, Text } from 'rebass';


const VideoPrices = "https://github.com/Alkenox-ME/alkenox-me-images/blob/master/BasicVideoProdPkgs.png?raw=true";


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

        <p> We come together and figure out what it is you need, get you a quote
        on how much it will cost to effectively produce your project, and sort out
        the shooting schedule with the script that you will either provide us with
        or that we will help you write. This is
        the most important part of any production process. Without good planning,
        the entire project can lose its focus and fall apart very quickly.
        </p>

        <h3>Production</h3>

        <p>We embark upon what we have planned out for our shooting
        schedule. We arrive on location, with rehearsed talent, and begin collecting
        all the shots and audio that we need to create your video. In some cases,
        certain audio and/or images may be acquired or created in post-production.
        Any kind of motion graphics, sound effects, voice-overs, or visual effects
        would be completed in Post.</p>

        <h3>Post-Production</h3>
        <p>Here is where we log all the footage and photographs if there are any
        before we begin editing. The time it takes to log everything depends on how
        much footage we have gathered. Basic video editing can take from 30 minutes
        to an hour for each minute of finished video. Basic video editing is finding
        the best shots, cutting them together, and adding in some basic transitions.
        More advanced editing can take much longer because now we are talking about
        adding in animations, visual effects, and compositing. Essentially, the more
        complex a video is, the more time and money it will require.</p>

      </Box>



    <Heading width={1} textAlign='center' mx='auto' py={3} fontSize={[3, 4, 5]}>Pricing</Heading>

      <Box width={1/2} mx='auto' fontSize={3}>
        <p> Types of Videos:

          <ul>
            <li> Branded Video - Under 60 seconds and targets your core audience.</li>
            <li> Commercial Video Ads - 30 seconds or less, Strong Branding Content,
            Builds excitement and gets people talking about your product or services,
            Strong call-to-action, and Entertaining enough to be shared. </li>
            <li>  </li>
            <li>Post-Production - </li>
          </ul>
        </p>
      </Box>

      <Flex flexWrap="wrap" width={3/4} mx='auto' >
      <Box width={3/4} mx='auto' py={3} px={5} >
      <img className="fluid" src={VideoPrices} />
    </Box>
    </Flex>
  </Flex>
  );
};

export default BlokVx;
