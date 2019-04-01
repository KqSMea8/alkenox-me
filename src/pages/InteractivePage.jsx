import React from 'react';
import { Flex, Box } from 'rebass';

const InteractivePage = () => {
  return (
    <Flex flexWrap="wrap">
      <Box width={1}>Interactive Media</Box>
      <Box width={1}>
        Interactive Graphic Design Creating animated graphics for your interactive experience.
      </Box>
      <Box width={1}>
        Interactive Soundscaping Interactive sound design not only adds to your users' experience
        but it informs them of important events as well as helps them to navigate more intuitively
        making their experience all the more smooth and enjoyable.
      </Box>
      <Box width={1}>
        Interactive Scoring Music adds a transparent way of implying, conveying, and enhancing what
        the user(s) are experiencing in the moment. For a very simple example, in a console game,
        music can tell player if they are running into danger or are in the clear. It can also be
        used blatently upfront while the user(s) are thinking or searching through a menu.
      </Box>
    </Flex>
  );
};

export default InteractivePage;
