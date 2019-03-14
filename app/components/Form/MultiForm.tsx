import * as React from "react";

import { Tabs, Collapse } from "antd";
import Media from "react-media";

import WebForm from "./WebForm";
import VideoForm from "./VideoForm";
import SupportForm from "./SupportForm";

const TabPane = Tabs.TabPane;
const Panel = Collapse.Panel;

const MultiForm: React.SFC<{}> = () => {
  return (
    <div>
      <Media query="(max-width: 51.999em)">
        {matches =>
          matches ? (
            <Collapse accordion>
              <Panel header="Need A Website" key="1">
                <WebForm />
              </Panel>
              <Panel header="Video Production" key="2">
                <VideoForm />
              </Panel>
              <Panel header="Customer Support" key="3">
                <SupportForm />
              </Panel>
            </Collapse>
          ) : (
            <Tabs
              size="large"
              defaultActiveKey="0"
              style={{
                justifyContent: "center",
                textAlign: "center"
              }}
            >
              <TabPane tab="Website" key="1">
                <WebForm />
              </TabPane>
              <TabPane tab="Video Production" key="2">
                <VideoForm />
              </TabPane>
              <TabPane tab="Support" key="3">
                <SupportForm />
              </TabPane>
            </Tabs>
          )
        }
      </Media>
    </div>
  );
};
export default MultiForm;
