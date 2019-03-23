import * as React from 'react';

import ReactPlayer from 'react-player';

import FancyDiv from '../components/fancydiv'

import { Modal, Button } from 'antd';

import { Flex, Link as Href, Image, Box, Card, Heading, Text } from 'rebass';


const VideoPrices = "https://github.com/Alkenox-ME/alkenox-me-images/blob/master/BasicVideoProdPkgs.png?raw=true";
const LiveCamera = "https://github.com/Alkenox-ME/alkenox-me-images/blob/master/record-camera-live-product-reflex-camera-digital-camera-1050502-pxhere.com.jpg?raw=true"
const Teamwork = "https://github.com/Alkenox-ME/alkenox-me-images/blob/master/achievement-agreement-arms-1068523.jpg?raw=true"

const BlokVx: React.SFC<{}> = () => {
  return (
    <Flex flexWrap="wrap">
      <Heading width={1} textAlign='center' fontSize={[3, 4, 5]} mt={5} py={3}>Video Production</Heading>
      <Heading width={1} textAlign='center' fontSize={[3, 4,]}>Web Video</Heading>
    

      <Box width={1/2} mx='auto' py={4} fontSize={3}>
        <p>
          Where ever you turn on the internet, you find yourself faced with at least
          one web video on almost every site you visit, that were
          created to explain products, services, and tell stories to anyone willing
          to stick around and watch. Most lazy web surfers tend to stop when faced
          with a video, which is why web videos have become a way to capture your
          visitors' attention and convert them into customers.
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
      </Box>


      <Box mx='auto' py={2} fontSize={3}>
        <Text pb={5}>Movie Trailer for the Indie Feature Film "Mosaic" with all original scoring and
        3D Motion Graphics.</Text>
      </Box>



    <Flex flexWrap="wrap" width={2/3} mx='auto' >
      <Box width={1/2} mx='auto' fontSize={3}>
        <Heading width={1} textAlign='center' mt={5} fontSize={[3, 4, 5]}>Our Process</Heading>
      </Box>
    </Flex>

    <Flex>
        <h3>Pre-Production</h3>

        <Box width={2/3} mx='auto' py={5} px={2} >
          <img className="fluid" src={Teamwork} />
        </Box>


        <Text width={2/3} mx='auto' py={5} px={2}>
        We come together and figure out what it is you need, get you a quote
        on how much it will cost to effectively produce your project, and sort out
        the shooting schedule with the script that you will either provide us with
        or that we will help you write. This is
        the most important part of any production process. Without good planning,
        the entire project can lose its focus and fall apart very quickly.
        </Text>
      </Flex>


      <Flex flexWrap="wrap" width={2/3} mx='auto' >
        <Box width={1/2} mx='auto' fontSize={3}>
        <h3>Production</h3>

        <p>We embark upon what we have planned out for our shooting
        schedule. We arrive on location, with rehearsed talent, and begin collecting
        all the shots and audio that we need to create your video. In some cases,
        certain audio and/or images may be acquired or created in post-production.
        Any kind of motion graphics, sound effects, voice-overs, or visual effects
        would be completed in Post.</p>
        </Box>
      </Flex>

      <Flex flexWrap="wrap" width={2/3} mx='auto' >
        <Box width={1/2} mx='auto' fontSize={3}>
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
    </Flex>



    <Heading width={1} textAlign='center' mx='auto' pt={4} fontSize={[3, 4, 5]}>Types of Videos</Heading>

    <Flex flexWrap="wrap" width={2/3} mx='auto' >
      <Box width={1/2} mx='auto' px={2} fontSize={3} pb={5} pt={5} >
        <p>

          <ul>
            <li> Branded Video - Under 60 seconds and Builds Awareness</li>
            <br />
            <li> Commercial Video - 30 seconds or less and generates awareness/excitement </li>
            <br />
            <li> Company Story Video - 3 minutes or less and used in the "About Us" or
            "Our Team" section of your website </li>
            <br />
            <li> Explainer Video - 2 minutes or less and designed to explain your company,
            product, service, or subject </li>
            <br />
            <li> Customer Testimonial Video - 3 minutes or less and are authentic accounts
            of how your products or services helped your customer </li>
            <br />
            <li> Movie Trailer - 2 minutes 30 seconds or less (average full length trailer) and drums
            up buzz and excitement for your movie </li>
          </ul>
        </p>
      </Box>


    <Box width={1/4} mx='auto' py={5} px={2} >
      <img className="fluid" src={LiveCamera} />
    </Box>
    </Flex>

    <Box width={1/2} mx='auto' fontSize={4} pb={5} >
      <Text> Contact Us for a free quote. </Text>
    </Box>

  </Flex>
  );
};

export default BlokVx;
