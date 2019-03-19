import * as React from 'react';
import Helmet from 'react-helmet';
import { Flex, Box, Heading, Text, Image } from 'rebass';

const YinYang = 'https://github.com/Alkenox-ME/alkenox-me-images/blob/master/768px-Yin_yang.png?raw=true';

const AboutPage: React.SFC<{}> = () => {
  return (
    <span>
      <Helmet>
        <title>About Us</title>
      </Helmet>
      <Flex>
        <Box py={[2]} width={[1]} mx='auto' mt={5}>
          <Heading textAlign='center' color="inherit" fontSize={[5, 6]}>
            About Us
          </Heading>
        </Box>
      </Flex>

      <Flex mx='auto' width={[1/4, 1/6, 1/8]}>
        <Box py={[4]}>
          <Image src={YinYang} />
        </Box>
      </Flex>

      <Flex flexWrap="wrap">

          <Text p={2} width={[1, 1, 1, 3/4]} mx='auto' fontSize={[2, 3, 3, 3]}>
            Alkenox Media & Entertainment is an independent media production company,
            officially founded in 2018, in the greater Atlanta area. At its core, we
            are a brother and sister team that, much like yin and yang, find our
            strengths to be complimentary. After working with each other on various
            projects in video production, animation, and web development over a five
            year span, Alkenox-ME was the next logical step.
          </Text>

      </Flex>

        <Box p={[3]} width={[1]}>
          <Text textAlign="center" fontSize={[3, 4, 4, 4]}>
            Now, down to business...
          </Text>
        </Box>

      <Flex flexWrap="wrap">
        <Box p={3} width={[1, 3/4, 1/2, 1/2]} mx='auto'>
          <Text fontSize={[2, 3, 3, 3]}>
            Our work is tailored to provide our clients with custom, high-quality, professional
            digital media services. To allow for this freedom, all of our services are offered
            a-la-cart or via custom bundling, because no two projects are ever really the same.

          </Text>
        </Box>
      </Flex>


      <Flex flexWrap="wrap">
        <Box py={3} px={3} width={[1, 3/4, 1/2, 1/2]} mx='auto'>
          <Text fontSize={[2, 3, 3, 3]}>
            Sight and Sound are the backbone of the user experience. Since one or both of
            these are always being stimulated, they are very important parts of sensory
            marketing and branding. Much like the opening sounds and images to a movie,
            you want your audience to feel the same kind of emotional connection with
            your business.
          </Text>
        </Box>
      </Flex>

            <br />
      <Flex flexWrap="wrap">
        <Box py={3} px={3} width={[1, 3/4, 1/2, 1/2]} mx='auto'>
          <Text fontSize={[2, 3, 3, 3]}>
            But brands are not limited to big companies and
            well known products. People, small businesses, individual artists, and more can
            all have their brand defined and shared with the world. If you want help growing
            your business by enhancing your visibility, give us a call for a free consultation.

          </Text>
        </Box>
      </Flex>
    </span>
  );
};

export default AboutPage;
