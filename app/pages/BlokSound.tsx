import * as React from "react";
import LazyLoad from "react-lazyload";
import ReactPlayer from "react-player";


import { Flex, Link as Href, Image, Box, Card, Heading, Text } from "rebass";

const Beach =
  "https://github.com/alkenox/alkenox-me-images/blob/master/3d-animated-beach-333528.jpg?raw=true";

let audioSFX = [
  {
    src:
      "https://github.com/alkenox/alkenox-me-audio/blob/master/SFXsource_2015.mp3?raw=true",
    title: "SFXsource",
    artist: "n0-x"
  }
];
const Blok: React.SFC<{}> = () => {
  return (
    <Flex flexWrap="wrap">
      <Box width={1}>
        <h1>Sound Design</h1>
        <AudioPlayer audioFiles={audioSFX} />
        <LazyLoad offset={100}>
          <img className="fluid" src={Beach} />
        </LazyLoad>
        Sound Design matters. It is what connects your audience to your product.
        Whether it is designing the dings and whistles on your app, getting the
        right sounds for your game-scape, sound is what brings your audience
        into your creation and connects them to it. Whatever your needs, we can
        help!
        <LazyLoad offset={100}>
          <ReactPlayer
            url="https://github.com/alkenox/alkenox-me-videos/blob/master/trailer-mosaic.mp4?raw=true"
            width="100%"
            height="100%"
            loop
            playing
            controls
            volume={0}
          />
        </LazyLoad>
        Hard effect, soft effect, foley and soundscaping for Film, Television,
        and Games. Branded Sound Icons for a project or company.
        <LazyLoad offset={100}>
          <ReactPlayer
            url="https://github.com/alkenox/alkenox-me-videos/blob/master/title-seq-caution.mp4?raw=true"
            width="100%"
            height="100%"
            loop
            playing
            controls
            volume={0}
          />
        </LazyLoad>
        <LazyLoad offset={100}>
          <ReactPlayer
            url="https://github.com/alkenox/alkenox-me-videos/blob/master/aeon-soundDesign.mp4?raw=true"
            width="100%"
            height="100%"
            loop
            playing
            controls
            volume={0}
          />
        </LazyLoad>
        Interactive projects ranging from audio navigation for the blind to the
        aesthetics of your user interface are welcome.
      </Box>
    </Flex>
  );
};

export default Blok;
