import * as React from "react";

import { Image, Card, Button, Heading } from "rebass";

interface IBlok {
  label?: string;
  tint?: string;
  bgimg?: string;
  width?: string;
  height?: string;
  bRad?: number;
}

export default class LabelBlok extends React.Component<IBlok> {
  props!: IBlok;
  constructor(props: IBlok) {
    super(props);
  }

  public render() {
    return (
      <Card
        className="relative"
        boxShadow="0 2px 16px rgba(0, 0, 0, 0.25)"
        borderRadius={this.props.bRad}
        src={this.props.bgimg}
      >
        <Heading
          className="absolute hoverOverlay"
          textAlign="center"
          fontSize={[6, 6, 7, 6]}
          width={[1]}
          color="inherit"
        >
          {this.props.label}
        </Heading>

        <Image
          className="hoverImg fitImg"
          borderRadius={this.props.bRad}
          src={this.props.bgimg}
          width={this.props.width}
          height={this.props.height}
        />
      </Card>
    );
  }
}
