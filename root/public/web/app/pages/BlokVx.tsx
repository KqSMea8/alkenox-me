import * as React from 'react';

import ReactPlayer from 'react-player';

import FancyDiv from '../components/fancydiv';

import { Modal, Button } from 'antd';

import { Flex, Link as Href, Image, Box, Card, Heading, Text } from 'rebass';


const VideoPrices = "https://github.com/Alkenox-ME/alkenox-me-images/blob/master/BasicVideoProdPkgs.png?raw=true";
const LiveCamera = "https://github.com/Alkenox-ME/alkenox-me-images/blob/master/blur-camera-camera-equipment-639090.jpg?raw=true"
const Teamwork = "https://github.com/Alkenox-ME/alkenox-me-images/blob/master/achievement-agreement-arms-1068523.jpg?raw=true"
const Editing = "https://github.com/Alkenox-ME/alkenox-me-images/blob/master/computer-connection-data-1188751.jpg?raw=true"
const Production = "https://github.com/Alkenox-ME/alkenox-me-images/blob/master/action-clapper-film-director-1117132.jpg?raw=true"


const BlokVx: React.SFC<{}> = () => {
  return (
    <Flex flexWrap="wrap" width={1} mx='auto'>
      <Heading width={1} textAlign='center' fontSize={[3, 4, 5]} mt={5} py={3}>
        Video Production
      </Heading>
      <Heading width={1} textAlign='center' fontSize={[3, 4,]}>
        Web Video
      </Heading>

      <Box width={960} mx='auto'>
        <Text width={960} mx='auto' pt={4} fontSize={3}>
          Where ever you turn on the internet, you find yourself faced with at least one web video on almost every site you visit, that were
          created to explain products, services, and tell stories to anyone willing to stick around and watch. Most lazy web surfers tend to stop when faced with a video, which is why web videos have become a way to capture your visitors' attention and convert them into customers.
        </Text>
      </Box>



      <Box width={960} mx='auto'>
        <Text width={960} mx='auto' fontSize={3} py={4}>
          Whether you need a short internet commercial for your business, have a
          story to tell, or have video and images that you need turned into
          something with purpose; we are here to help.
        </Text>
      </Box>



    <Flex flexWrap="wrap" width={6/8} mx='auto'>
      <Box width={2/3} mx='auto' py={4}>
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

        <Text width={6/8} mx='auto' pb={5} textAlign='center' fontSize={3}>Movie Trailer for the Indie Feature Film "Mosaic" with all original scoring and 3D Motion Graphics.
        </Text>
    </Flex>



    <Flex flexWrap="wrap" width={960} mx='auto'>
      <Box width={960} mx='auto' fontSize={3}>
        <Heading width={1} textAlign='center' mt={5} fontSize={[3, 4, 5]}>Our Process</Heading>
      </Box>
    </Flex>

    <Flex flexWrap="wrap" width={6/8} mx='auto' pt={4}>
      <Heading width={6/8} mx='auto' fontSize={[3, 4]} textAlign='center' >Pre-Production</Heading>

        <Box width={1/2} mx='auto' my='auto' pt={4} px={2}>
          <img className="fluid" src={Teamwork} />
        </Box>


        <Text width={1/2} mx='auto' my='auto' pt={4} px={2} fontSize={3} >
        We come together and figure out what it is you need, get you a quote
        on how much it will cost to effectively produce your project, and sort out the shooting schedule with the script that you will either provide us with or that we will help you write. This is the most important part of any production process. Without good planning, the entire project can lose its focus and fall apart very quickly.
        </Text>
      </Flex>


      <Flex flexWrap="wrap" width={6/8} mx='auto' my='auto' pt={4}>
          <Heading width={6/8} mx='auto' fontSize={[3, 4]} textAlign='center'>Production</Heading>

        <Text width={1/2} mx='auto' my='auto' px={2} pt={4} fontSize={3}>
        We embark upon what we have planned out for our shooting
        schedule. We arrive on location, with rehearsed talent, and begin collecting all the shots and audio that we need to create your video. In some cases, certain audio and/or images may be acquired or created in post-production. Any kind of motion graphics, sound effects, v4oice-overs, or visual effects would be completed in Post.
        </Text>

        <Box width={1/2} mx='auto' my='auto' pt={4} px={2}>
          <img className="fluid" src={Production} />
        </Box>
      </Flex>

      <Flex flexWrap="wrap" width={6/8} mx='auto' pt={4}>
        <Heading width={6/8} mx='auto' fontSize={[3, 4]} textAlign='center'>Post-Production</Heading>

          <Box width={1/2} mx='auto' my='auto' pt={4} px={2}>
            <img className="fluid" src={Editing} />
          </Box>


        <Text width={1/2} mx='auto' my='auto' px={2} pt={4} fontSize={[3]}>
        Here is where we log all the footage and photographs if there are any
        before we begin editing. The time it takes to log everything depends on how
        much footage we have gathered. Basic video editing can take from 30 minutes
        to an hour for each minute of finished video. Basic video editing is finding
        the best shots, cutting them together, and adding in some basic transitions.
        More advanced editing can take much longer because now we are talking about
        adding in animations, visual effects, and compositing. Essentially, the more
        complex a video is, the more time and money it will require.
        </Text>
      </Flex>



    <Heading width={1} textAlign='center' mx='auto' pt={5} fontSize={[3, 4, 5]}>Types of Videos</Heading>

    <Flex flexWrap="wrap" width={6/8} mx='auto' my='auto'>
      <Box width={1/2} mx='auto' px={2} fontSize={3} pb={5} pt={5}>
          <ul>
            <li> Branded Video - Under 60 seconds and Builds Awareness</li>
            <br />
            <li> Commercial Video - 30 seconds or less and generates awareness/excitement </li>
            <br />
            <li> Company Story Video - 3 minutes or less and used in the "About Us" or "Our Team" section of your website </li>
            <br />
            <li> Explainer Video - 2 minutes or less and designed to explain your company, product, service, or subject </li>
            <br />
            <li> Customer Testimonial Video - 3 minutes or less and are authentic accounts of how your products or services helped your customer </li>
            <br />
            <li> Movie Trailer - 2 minutes 30 seconds or less (average full length trailer) and drums up buzz and excitement for your movie </li>
          </ul>
      </Box>


    </Flex>

    <Box width={960} mx='auto' fontSize={4} py={5}>
      <Text textAlign='center'> Contact Us for a free quote. </Text>
    </Box>

  </Flex>
  );
};

export default BlokVx;
