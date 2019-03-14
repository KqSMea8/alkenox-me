import * as React from "react";
import { Box, Flex } from "rebass";

class Background extends React.Component<{}> {
  constructor(props: {}) {
    super(props);
  }
  public render() {
    return (
      <Flex flexWrap="wrap" justifyContent="center" alignItems="center">
        <Box alignSelf="center">
          <div className="tint-bg">{this.props.children}</div>
        </Box>
      </Flex>
    );
  }
}
export default Background;
