import * as React from "react";

import LazyLoad from "react-lazyload";

import ReactPlayer from "react-player";


import styled from "@emotion/styled";

import { Flex, Link as Href, Image, Box, Card, Heading, Text } from "rebass";

const ArchImg =
  "https://github.com/alkenox/alkenox-me-images/blob/master/architect-architecture-black-and-white-1537008.jpg?raw=true";

const ProtoImg =
  "https://github.com/alkenox/alkenox-me-images/blob/master/black-black-and-white-close-up-1496139.jpg?raw=true";

const CodeImg =
  "https://github.com/alkenox/alkenox-me-images/blob/master/computer-technology-number-web-internet-line-1295472-pxhere.com.jpg?raw=true";

const MngImg =
  "https://github.com/alkenox/alkenox-me-images/blob/master/adult-business-data-1181316.jpg?raw=true";

const UxImg =
  "https://github.com/alkenox/alkenox-me-images/blob/master/business-camera-coffee-1509428.jpg?raw=true";

const UiImg =
  "https://github.com/alkenox/alkenox-me-images/blob/master/laptop-iphone-smartphone-mobile-screen-apple-753019-pxhere.com.jpg?raw=true";

const Ul = styled.ul`
  list-position: inside;
`;

const Li = styled.ul`
  padding: 1em;
`;
const BlokWeb: React.SFC<{}> = () => {
  return (
    <Flex flexWrap="wrap">
      <Box width={1}>
        <h1>
          Web / UX / UI
          <br />
          Design & Development
        </h1>
        <h2>Developing Your Website</h2>

        <LazyLoad>
          <img className="fluid bannerize" src={ArchImg} />
        </LazyLoad>
        <h3>Building The Prototype</h3>
        <LazyLoad>
          <img className="fluid bannerize" src={ProtoImg} />
        </LazyLoad>
        <p>
          Everything begins with a prototype. You will work with one or more of
          our artists/designers to develop the overall look, style, and
          aesthetics of your vision.
        </p>
        <h3>Programming</h3>
        <p>
          Once we have a prototype to build from, we can hand it over to our
          programming department where your custom design will become functional
          code.
        </p>
        <LazyLoad>
          <img className="fluid bannerize" src={CodeImg} />
        </LazyLoad>
        <h3>Website Management & SEO</h3>
        <p>
          After your design is up and running we will manage your site for six
          (6) months. This includes, at minimum, all of your site's basic needs
        </p>
        <LazyLoad>
          <img className="fluid bannerize" src={MngImg} />
        </LazyLoad>
        <Ul>
          <Li>Hosting</Li>
          <Li>Required SSL Certificate</Li>
          <Li>Email Setup</Li>
          <Li>Google Analytics</Li>
          <Li>Social Media Setup</Li>
          <Li>
            2 Hour Training
            <br />
            (For Bloggers & Commerce Sites)
          </Li>
          <Li>Wordpress Integration</Li>
          <Li>Mailing List</Li>
          <Li>
            Site Optimization
            <br />
            (For Popular Search Engines & Browsers)
          </Li>
        </Ul>
        <p>
          After the initial six (6) month term you may take your site and data
          to your own hosting service or in-house management team.
        </p>
        <h2>Defining Your Users' Experience</h2>
        <p>
          We collect data about your target user base and their preferences
          based on your projects goal. This data will help us shape a meaningful
          user interface that will allow for an overall smoother and more
          appreciated experience.
        </p>
        <LazyLoad>
          <img className="fluid" src={UxImg} />
        </LazyLoad>
        <h2>Crafting Your User Interface</h2>
        <LazyLoad offset={100}>
          <img className="fluid bannerize" src={UiImg} />
        </LazyLoad>
        <p>
          Your user interface is the key to your user's heart. It's your brands
          first impression and a unique design can help your brand stand out
          from the massive amount of clinical designs currently in use. Our
          "artists" break this cycle by helping you to convey your brand's
          character as well as imparting information.
        </p>
      </Box>
    </Flex>
  );
};

export default BlokWeb;
