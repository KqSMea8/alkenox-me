import * as React from 'react';
import { Modal, Button } from 'antd';
import { Flex, Link as Href, Image, Box, Card, Heading, Text } from 'rebass';
import styled from '@emotion/styled'

const VxPriceBG = "https://github.com/Alkenox-ME/alkenox-me-images/blob/master/blur-camera-camera-equipment-639090.jpg?raw=true"

interface IFancy {
  width?: string;
  heading?: string;
}

const Fancy = styled.div`
  background-image: url('LiveCamera');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  box-shadow: 5px 10px #000000;
  border-radius: 50px 20px;
  word-wrap: break-word;
`

const Ul = styled.ul`
  list-style: none;
  list-position: inside;
`

const Li = styled.li`
  color: inherit;
`

const FancyDiv: React.SFC<{}> = (props) => {
  return (
  <Box width={this.props.width}>
    <Fancy className='pricebg'>
    <Heading>{this.props.heading}</Heading>
      <Ul>
        <Li>
          {this.props.children}
        </Li>
      </Ul>

    </Fancy>
  </Box>
  );
};

export default FancyDiv;
