import * as React from "react";
import { Link } from "react-router-dom";

import { Button } from "antd";

interface INavBtn {
  label?: string;
  link?: string;
}

export default class NavBtn extends React.Component<INavBtn> {
  constructor(props: INavBtn) {
    super(props);
  }

  public render() {
    return (
      <Button type="default" className="btn-nav">
        <Link to={this.props.link}>{this.props.label}</Link>
      </Button>
    );
  }
}
