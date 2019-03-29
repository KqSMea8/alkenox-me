import * as React from "react";

import styled from "@emotion/styled";
import { Flex, Box } from "rebass";

import Seo from "./Seo";
import NavDrawer from "./NavDrawer";
import NavBtn from "./NavBtn";
import Footer from "./Footer";

export default class SiteInterface extends React.Component<any> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    const FixTop = styled.span`
      position: fixed;
      top: 0;
      z-index: 2;
    `;

    const Body = styled.div`
      position: relative;
      top: 0;
      bottom: 0;
    `;

    const FixBottom = styled.span`
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 2;
      padding: 0.25em;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(0, 0, 0, 0.8);
    `;

    return (
      <Flex flexWrap="wrap">
        <Seo
          defTitle="Alkenox Media& Entertainment, LLC."
          siteDesc="An Atlanta, Ga based company."
        />
        <Box p={3} width={1}>
          <FixTop>
            <NavDrawer trigger="alkenox-me">
              <NavBtn label="Home" link="/" />

              <NavBtn label="About Us" link="/about-us" />

              <NavBtn label="Contact Us" link="/contact-us" />
            </NavDrawer>
          </FixTop>
          {this.props.children}

          <FixBottom color="darkTint">
            <Footer
              copyright="Copyright"
              symbol="&copy;"
              year={2019}
              company="Alkenox Media & Entertainment, LLC."
              rights="All rights reserved."
            />
          </FixBottom>
        </Box>
      </Flex>
    );
  }
}
