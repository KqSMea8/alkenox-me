import * as React from 'react';

import ReactPlayer from 'react-player';
import { Fade, Bounce } from "react-reveal";

import { Flex, Link as Href, Image, Box, Card, Heading, Text } from 'rebass';

const TestImg = "https://github.com/Alkenox-ME/alkenox-me-images/blob/master/favicon.png?raw=true";



const BlokInteractive: React.SFC<{}> = () => {
  return (
    <Flex flexWrap="wrap" mx="auto" width={1}>
    <Bounce
      left
      appear={true}
      enter={true}
      exit={true}
      duration={1300}
      delay={100}
    >

    <Box width={[11/12, 8/12, 1/2, 1/4]} mx='auto' my='auto' pt={4} px={2} alignSelf='center'>
      <img className="fluid" src={TestImg} />
    </Box>
    </Bounce>

    <Flex flexWrap='wrap' mx='auto'>
    <Heading width={1} mt={5} mx='auto' py={3} fontSize={[2, 2, 3, 5]} textAlign='center'>
      <span className='headingSz'>
      Interactive Media
      </span>
    </Heading>

    <Box width={[1, 1, 11/12, 8/12]} mx='auto' px={3}>
      <Text width={[1]} mx='auto' fontSize={4} py={4} textAlign='center'>
        Interactive Graphic Design. Creating animated graphics for your interactive experience.
      </Text>
    </Box>
    <Box width={[1, 1, 11/12, 8/12]} mx='auto' px={3}>
      <Text width={[1]} mx='auto' fontSize={4} py={4}>
        Interactive Soundscaping Interactive sound design not only adds to your users' experience but it informs them of important events as well as helps them to navigate more intuitively making their experience all the more smooth and enjoyable.
      </Text>
    </Box>
    <Box width={[1, 1, 11/12, 8/12]} mx='auto' px={3}>
      <Text width={[1]} mx='auto' fontSize={4} py={4}>
        Interactive Scoring Music adds a transparent way of implying, conveying, and enhancing what the user(s) are experiencing in the moment. For a very simple example, in a console game, music can tell player if they are running into danger or are in the clear. It can also be used blatently upfront while the user(s) are thinking or searching through a menu.
      </Text>
    </Box>
    </Flex>
    </Flex>
  );
};

export default BlokInteractive;
