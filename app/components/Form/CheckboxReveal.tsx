import * as React from "react";

import { Checkbox } from "antd";
import { Flex, Box, Text } from "rebass";

function onChange(e: { target: { checked: any } }) {
  console.log(`checked = ${e.target.checked}`);
}

interface IFormRevealProps {
  label?: string;
  value?: string;
  component?: object;
}

interface IFormRevealState {
  isHidden: boolean;
}

class CheckboxReveal extends React.Component<
  IFormRevealProps,
  IFormRevealState
> {
  constructor(props: IFormRevealProps) {
    super(props);
    this.state = {
      isHidden: true
    };
  }

  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    });
  }

  public render() {
    return (
      <Flex alignItems="center" flexWrap="wrap" p={3}>
        <Box width={1 / 4}>
          <Checkbox
            value={this.props.value}
            onChange={onChange}
            onClick={this.toggleHidden.bind(this)}
          />
        </Box>
        <Box width={3 / 4}>
          <Text textAlign="left" fontSize={[2, 3, 3, 3]}>
            {this.props.label}
          </Text>
        </Box>
        {!this.state.isHidden && this.props.component}
      </Flex>
    );
  }
}

export default CheckboxReveal;
