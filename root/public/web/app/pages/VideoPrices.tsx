import * as React from 'react';

import ReactPlayer from 'react-player';

import {useSpring, animated} from 'react-spring';

import { Flex, Link as Href, Image, Box, Card, Heading, Text } from 'rebass';

const VideoPrices: React.SFC<{}> = () => {
  return (
    <Flex flexWrap="wrap">
      <Heading width={1} textAlign='center' fontSize={[3, 4, 5]} mt={5} py={3}>Video Production</Heading>
      <Heading width={1} textAlign='center' fontSize={[3, 4,]}>Web Video</Heading>

    </Flex>
  );
};

export default VideoPrices;
