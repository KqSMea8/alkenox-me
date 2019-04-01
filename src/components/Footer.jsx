import React from 'react';
import { Box, Text } from 'rebass';

const Footer = props => {
  return (
    <Box css={{ zIndex: 9999 }} width={[1]} justifyContent="center">
      <Text textAlign="center">
        {props.copyright}
        &nbsp;
        {props.symbol}
        &nbsp;
        {props.year}
        &nbsp;
        {props.company}
        &nbsp;
        {props.rights}
      </Text>
    </Box>
  );
};

export default Footer;
