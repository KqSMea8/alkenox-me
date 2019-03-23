import * as React from 'react';
import { Modal, Button } from 'antd';
import { Flex, Link as Href, Image, Box, Card, Heading, Text } from 'rebass';
import styled from '@emotion/styled'

const Fancy = styled.div `
`

const FancyDiv: React.SFC<{}> = (props) => {
  return (
  <Box width={this.props.width}>
    <Fancy>
      {this.props.children}
    </Fancy>
  </Box>
  );
};

export default FancyDiv;
