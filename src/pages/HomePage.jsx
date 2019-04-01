// Core
import React from 'react';
// Styling
import { Flex, Card } from 'rebass';
import { Fade } from 'react-reveal';
// Components
import LabelBlock from '../components/LabelBlock';

// Images
const MotionBg = 'https://media.giphy.com/media/Xth5kFQm3ahg5swyBK/giphy.gif';
const InteractiveBg = 'https://media.giphy.com/media/1xoqRHHLqXKNc02nM0/giphy-downsized-large.gif';
const MxBg = 'https://media.giphy.com/media/229roNqcyGIZNfWCfj/giphy-downsized-large.gif';
const RxBg = 'https://media.giphy.com/media/MVgLYGeuRP4JynEhNU/giphy-downsized-large.gif';
const SoundBg = 'https://media.giphy.com/media/8JQ9uF8Oe1Ktmmdd8o/giphy-downsized-large.gif';
const VxBg = 'https://media.giphy.com/media/2w5OEVjSb7f3Y9UQRr/giphy-downsized-large.gif';
const WebBg = 'https://media.giphy.com/media/8lNgT2uFKdFDh7b2l2/giphy.gif';

// Variables
const tint = 'rgb(0,0,0)';
const width = '100%';
const height = '29vh';
const bradius = 60;
const bshadow = '3em 3em 1em rgb(25,25,25)';
const fontSz = [4, 5, 6, 6];

const delay1 = 500;
const delay2 = 800;
const delay3 = 1200;
const delay4 = 3000;
const delay5 = 1600;
const delay6 = 1900;
const delay7 = 2200;
const duration1 = 3000;

// Actual Page
const HomePage = () => (
  <Flex flexWrap="wrap">
    <Card opacity={0.7} px={2} py={2} width={[1, 1, 1, 1 / 2]}>
      <Fade left appear enter exit duration={duration1} delay={delay1}>
        <LabelBlock
          label="Sound Design"
          bgimg={SoundBg}
          link="/sound-design"
          tint={tint}
          width={width}
          height={height}
          bradius={bradius}
          bshadow={bshadow}
          fontSz={fontSz}
        />
      </Fade>
    </Card>

    <Card opacity={0.7} px={2} py={2} width={[1, 1, 1, 1 / 2]}>
      <Fade right appear enter exit duration={duration1} delay={delay2}>
        <LabelBlock
          label="Music Production"
          bgimg={MxBg}
          link="/music-production"
          tint={tint}
          width={width}
          height={height}
          bradius={bradius}
          bshadow={bshadow}
          fontSz={fontSz}
        />
      </Fade>
    </Card>

    <Card opacity={0.7} px={2} py={2} width={[1, 1, 1, 1 / 4]}>
      <Fade left appear enter exit duration={duration1} delay={delay3}>
        <LabelBlock
          label="Web / Stack Development"
          bgimg={WebBg}
          link="/web-design"
          tint={tint}
          width={width}
          height={height}
          bradius={bradius}
          bshadow={bshadow}
          fontSz={fontSz}
        />
      </Fade>
    </Card>

    <Card opacity={0.7} px={2} py={2} width={[1, 1, 1, 2 / 4]}>
      <Fade appear enter exit duration={duration1} delay={delay4}>
        <LabelBlock
          label="Video Production"
          bgimg={VxBg}
          link="/video-production"
          tint={tint}
          width={width}
          height={height}
          bradius={bradius}
          bshadow={bshadow}
          fontSz={fontSz}
        />
      </Fade>
    </Card>

    <Card opacity={0.7} px={2} py={2} width={[1, 1, 1, 1 / 4]}>
      <Fade right appear enter exit duration={duration1} delay={delay5}>
        <LabelBlock
          label="Motion Graphics"
          bgimg={MotionBg}
          link="/motion-graphics"
          tint={tint}
          width={width}
          height={height}
          bradius={bradius}
          bshadow={bshadow}
          fontSz={fontSz}
        />
      </Fade>
    </Card>

    <Card opacity={0.7} px={2} py={2} width={[1, 1, 1, 1 / 2]}>
      <Fade left appear enter exit duration={duration1} delay={delay6}>
        <LabelBlock
          label="Interactive Media"
          bgimg={InteractiveBg}
          link="/interactive-media"
          tint={tint}
          width={width}
          height={height}
          bradius={bradius}
          bshadow={bshadow}
          fontSz={fontSz}
        />
      </Fade>
    </Card>

    <Card opacity={0.7} px={2} py={2} width={[1, 1, 1, 1 / 2]}>
      <Fade right appear enter exit duration={duration1} delay={delay7}>
        <LabelBlock
          label="Digital Media Rx"
          bgimg={RxBg}
          link="/digital-media-repair"
          tint={tint}
          width={width}
          height={height}
          bradius={bradius}
          bshadow={bshadow}
          fontSz={fontSz}
        />
      </Fade>
    </Card>
  </Flex>
);

export default HomePage;
