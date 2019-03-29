import * as React from "react";
import { Affix, Drawer, Button } from "antd";
import { Box } from "rebass";

interface IModalNav {
  trigger?: string;
  close?: string;
}

export default class NavDrawer extends React.Component<IModalNav> {
  constructor(props: IModalNav) {
    super(props);
  }
  state = { visible: false, placement: "top" };

  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };

  public render() {
    return (
      <span>
        <Affix>
          <Box mt={3}>
            <Button className="btn-nav" onClick={this.showDrawer}>
              {this.props.trigger}
            </Button>
          </Box>

          <Drawer
            className="ant-drawer"
            title="Alkenox Media & Entertainment, LLC."
            width="auto"
            height="auto"
            placement="top"
            mask={true}
            closable={false}
            onClose={this.onClose}
            visible={this.state.visible}
            bodyStyle={{
              backgroundColor: "rgba(0,0,0,.8)"
            }}
            maskStyle={{
              backgroundColor: "rgba(0,0,0,.8)"
            }}
            style={{
              backgroundColor: "rgba(0,0,0,.8)"
            }}
          >
            {this.props.children}
          </Drawer>
        </Affix>
      </span>
    );
  }
}
