// Dead simple component for the hello world (hi mom!)
import * as React from "react";
import Helmet from "react-helmet";
import importedComponent from "react-imported-component";
import { Fade } from "react-reveal";

import { Flex, Card } from "rebass";

import ModalBlok from "../components/ModalBlok";

const SoundBlok = importedComponent(() => import("../pages/BlokSound"));
const MxBlok = importedComponent(() => import("../pages/BlokMx"));
const WebBlok = importedComponent(() => import("../pages/BlokWeb"));
const VxBlok = importedComponent(() => import("../pages/BlokVx"));
const MotionBlok = importedComponent(() => import("../pages/BlokMotion"));
const InteractiveBlok = importedComponent(() =>
  import("../pages/BlokInteractive")
);
const RxBlok = importedComponent(() => import("../pages/BlokRx"));

const MotionBg = "https://media.giphy.com/media/Xth5kFQm3ahg5swyBK/giphy.gif";
const InteractiveBg =
  "https://media.giphy.com/media/1xoqRHHLqXKNc02nM0/giphy-downsized-large.gif";
const MxBg =
  "https://media.giphy.com/media/229roNqcyGIZNfWCfj/giphy-downsized-large.gif";
const RxBg =
  "https://media.giphy.com/media/MVgLYGeuRP4JynEhNU/giphy-downsized-large.gif";
const SoundBg =
  "https://media.giphy.com/media/8JQ9uF8Oe1Ktmmdd8o/giphy-downsized-large.gif";
const VxBg =
  "https://media.giphy.com/media/2w5OEVjSb7f3Y9UQRr/giphy-downsized-large.gif";
const WebBg = "https://media.giphy.com/media/8lNgT2uFKdFDh7b2l2/giphy.gif";

let delay1 = 500;
let delay2 = 800;
let delay3 = 1200;
let delay4 = 3000;
let delay5 = 1600;
let delay6 = 1900;
let delay7 = 2200;
let duration1 = 3000;
let height = "29vh";
let width = "100%";
let close = "&#10005;";

const HomePage: React.SFC<{}> = () => {
  return (
    <span>
      <Helmet>
        <title>alkenox-me</title>
      </Helmet>

      <Flex flexWrap="wrap">
        <Card opacity={0.7} px={2} py={2} width={[1, 1, 1, 1 / 2]}>
          <Fade
            left
            appear={true}
            enter={true}
            exit={true}
            duration={`${duration1}`}
            delay={`${delay1}`}
          >
            <ModalBlok
              label="Sound Design"
              bgimg={SoundBg}
              tint="rgb(0,0,0)"
              width={`${width}`}
              height={`${height}`}
              bradius={60}
              close={`${close}`}
              component={<SoundBlok />}
            />
          </Fade>
        </Card>

        <Card opacity={0.7} px={2} py={2} width={[1, 1, 1, 1 / 2]}>
          <Fade
            right
            appear={true}
            enter={true}
            exit={true}
            duration={`${duration1}`}
            delay={`${delay2}`}
          >
            <ModalBlok
              label="Music Production"
              bgimg={MxBg}
              tint="rgb(0,0,0)"
              width={`${width}`}
              height={`${height}`}
              bradius={60}
              close={`${close}`}
              component={<MxBlok />}
            />
          </Fade>
        </Card>

        <Card opacity={0.7} px={2} py={2} width={[1, 1, 1, 1 / 4]}>
          <Fade
            left
            appear={true}
            enter={true}
            exit={true}
            duration={`${duration1}`}
            delay={`${delay3}`}
          >
            <ModalBlok
              label="Web / Stack Development"
              bgimg={WebBg}
              tint="rgb(0,0,0)"
              width={`${width}`}
              height={`${height}`}
              bradius={60}
              close={`${close}`}
              component={<WebBlok />}
            />
          </Fade>
        </Card>

        <Card opacity={0.7} px={2} py={2} width={[1, 1, 1, 2 / 4]}>
          <Fade
            appear={true}
            enter={true}
            exit={true}
            duration={`${duration1}`}
            delay={`${delay4}`}
          >
            <ModalBlok
              label="Video Production"
              bgimg={VxBg}
              tint="rgb(0,0,0)"
              width={`${width}`}
              height={`${height}`}
              bradius={60}
              close={`${close}`}
              component={<VxBlok />}
            />
          </Fade>
        </Card>

        <Card opacity={0.7} px={2} py={2} width={[1, 1, 1, 1 / 4]}>
          <Fade
            right
            appear={true}
            enter={true}
            exit={true}
            duration={`${duration1}`}
            delay={`${delay5}`}
          >
            <ModalBlok
              label="Motion Graphics"
              bgimg={MotionBg}
              tint="rgb(0,0,0)"
              width={`${width}`}
              height={`${height}`}
              bradius={60}
              close={`${close}`}
              component={<MotionBlok />}
            />
          </Fade>
        </Card>

        <Card opacity={0.7} px={2} py={2} width={[1, 1, 1, 1 / 2]}>
          <Fade
            left
            appear={true}
            enter={true}
            exit={true}
            duration={`${duration1}`}
            delay={`${delay6}`}
          >
            <ModalBlok
              label="Interactive Media"
              bgimg={InteractiveBg}
              tint="rgb(0,0,0)"
              width={`${width}`}
              height={`${height}`}
              bradius={60}
              close={`${close}`}
              component={<InteractiveBlok />}
            />
          </Fade>
        </Card>

        <Card opacity={0.7} px={2} py={2} width={[1, 1, 1, 1 / 2]}>
          <Fade
            right
            appear={true}
            enter={true}
            exit={true}
            duration={`${duration1}`}
            delay={`${delay7}`}
          >
            <ModalBlok
              label="Audio / Visual Rx"
              bgimg={RxBg}
              tint="rgb(0,0,0)"
              width={`${width}`}
              height={`${height}`}
              bradius={60}
              close={`${close}`}
              component={<RxBlok />}
            />
          </Fade>
        </Card>
      </Flex>
    </span>
  );
};

export default HomePage;
