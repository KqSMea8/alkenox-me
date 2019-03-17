import * as React from "react";
import ReactModal from "react-modal";

import styled from "@emotion/styled";
import { Button } from "antd";

import LabelBlok from "./LabelBlok";

interface IBlok {
  label?: string;
  tint?: string;
  bgimg?: string;
  width?: string;
  height?: string;
  close?: string;
  trigger?: string;
  component?: object;
  bradius?: number;
}

class ModalBlok extends React.Component<IBlok> {
  state: { showModal: boolean };
  props!: IBlok;
  constructor(props: IBlok) {
    super(props);
    this.state = {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  public render() {
    return (
      <span>
        <span onClick={this.handleOpenModal}>
          <LabelBlok
            label={this.props.label}
            bgimg={this.props.bgimg}
            tint={this.props.tint}
            width={this.props.width}
            height={this.props.height}
            bRad={this.props.bradius}
          />
        </span>
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel={this.props.trigger}
          closeTimeoutMS={1000}
          style={{
            overlay: {
              zIndex: 10200,
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.8)"
            },
            content: {
              zIndex: 10200,
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              border: "none",
              background: "rgba(0, 0, 0, 0)",
              overflow: "auto",
              WebkitOverflowScrolling: "touch",
              borderRadius: "0",
              outline: "none",
              padding: "0"
            }
          }}
        >
          <Button
            shape="circle"
            icon="close"
            size="large"
            className="closeTrigger"
            onClick={this.handleCloseModal}
          />
          {this.props.component}
        </ReactModal>
      </span>
    );
  }
}
export default ModalBlok;
