import * as React from 'react';
import Helmet from 'react-helmet';

import { Flex, Box, Heading, Text } from 'rebass';

const AboutPage: React.SFC<{}> = () => {
  return (
    <span>
      <Helmet>
        <title>About Us</title>
      </Helmet>
      <Flex flexWrap="wrap">
        <Box p={[3]} width={[1]}>
          <Heading textAlign="center" color="inherit" fontSize={[3, 3, 4, 5]}>
            About Us
          </Heading>
        </Box>
        <Box p={[3]} width={[1]}>
          <Text fontSize={[2, 2, 3, 3]}>
            Alkenox Media & Entertainment is an independent media production company, officially
            founded in 2018 in the greater Atlanta area. We tailor our work to provide custom,
            high-quality, professional digital media services to our clients. Due to this, we offer
            all of our services a-la-cart or via custom bundling.
          </Text>
        </Box>
        <Box p={[3]} width={[1]}>
          <Text fontSize={[2, 2, 3, 3]}>
            We are a family business and our clients are an extension of our family, as are the
            members of our team. We will go above and beyond to ensure our family's satisfaction.
          </Text>
        </Box>
      </Flex>
    </span>
  );
};

export default AboutPage;
