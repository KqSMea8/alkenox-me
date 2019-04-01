import React from 'react';
import { Flex, Box } from 'rebass';

const VxPage = () => {
  return (
    <Flex flexWrap="wrap">
      <Box width={[1, 1, 1, 2 / 3]} mx="auto">
        <h1>Video Production</h1>
        <h2>Web Video</h2>
        <p>
          If you have a story to tell for your product, service, or an independent project, we can
          put together a package to suit your needs. Do you need help with only one part of the
          production process, or all the parts? Let us know your budget and we will let you know
          what we can do with that budget to give you what you need.
        </p>

        <h2>Film & Television</h2>
        <h2>Portfolio & Resume</h2>
      </Box>
    </Flex>
  );
};

export default VxPage;
