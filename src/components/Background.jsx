import React from 'react';
import { Box, Flex } from 'rebass';

const Background = props => {
  return (
    <Flex flexWrap="wrap" justifyContent="center" alignItems="center">
      <Box alignSelf="center">
        <div className="tint-bg">{props.children}</div>
      </Box>
    </Flex>
  );
};
export default Background;
