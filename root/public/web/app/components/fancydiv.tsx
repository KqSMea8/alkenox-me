import * as React from 'react';
import { Modal, Button } from 'antd';
import { Flex, Link as Href, Image, Box, Card, Heading, Text } from 'rebass';
import styled from '@emotion/styled'

const LiveCamera = "https://github.com/Alkenox-ME/alkenox-me-images/blob/master/blur-camera-camera-equipment-639090.jpg?raw=true"


const Fancy = styled.div `
  background-image: url({LiveCamera})

`

const FancyDiv: React.SFC<{}> = (props) => {
  return (
  <Box width={this.props.width}>
    <Fancy className='pricebg'>
      {this.props.children}

    </Fancy>
  </Box>
  );
};

export default FancyDiv;
