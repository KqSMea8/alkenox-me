import * as React from "react";
import { Field, FieldProps } from "formik";

import { Checkbox } from "antd";
import { Flex, Box, Text } from "rebass";

interface ICheckFieldProps {
  label?: string;
  name?: string;
  value?: string;
}

interface IFormContact {
  traditionalStore?: boolean;
  onlineStore?: boolean;
  traditionalBlog?: boolean;
  vlogBlog?: boolean;
  podcastBlog?: boolean;
  musicPortfolio?: boolean;
  artistPortfolio?: boolean;
  novelistPortfolio?: boolean;
  FilmPortfolio?: boolean;
  eventPromo?: boolean;
  productPromo?: boolean;
  brandPromo?: boolean;
  servicePromo?: boolean;
  outlineProvided?: boolean;
  writingProvided?: boolean;
  imagesProvided?: boolean;
  graphicsProvided?: boolean;
  videoProvided?: boolean;
  audioProvided?: boolean;
  outlineNeeded?: boolean;
  writingNeeded?: boolean;
  imagesNeeded?: boolean;
  graphicsNeeded?: boolean;
  videoNeeded?: boolean;
  audioNeeded?: boolean;
  fullSlot?: boolean;
  sitcom?: boolean;
  spot30sec?: boolean;
  fullFeature?: boolean;
  documentary?: boolean;
  eng?: boolean;
  theatreDelivery?: boolean;
  tvDelivery?: boolean;
  deviceDelivery?: boolean;
  streamingDelivery?: boolean;
  scriptProvided?: boolean;
  scriptNeeded?: boolean;
  storyboardProvided?: boolean;
  storyboardNeeded?: boolean;
  crewProvided?: boolean;
  crewNeeded?: boolean;
  gearProvided?: boolean;
  gearNeeded?: boolean;
  locationsProvided?: boolean;
  locationsNeeded?: boolean;
  propsProvided?: boolean;
  propsNeeded?: boolean;
  musicProvided?: boolean;
  musicNeeded?: boolean;
  scoringProvided?: boolean;
  scoringNeeded?: boolean;
  videoEditingProvided?: boolean;
  videoEditingNeeded?: boolean;
  soundDesignProvided?: boolean;
  soundDesignNeeded?: boolean;
  promoMaterialProvided?: boolean;
  promoMaterialNeeded?: boolean;
  motionGraphicsProvided?: boolean;
  motionGraphicsNeeded?: boolean;
  visualEffectsProvided?: boolean;
  visualEffectsNeeded?: boolean;
  rxProvided?: boolean;
  rxNeeded?: boolean;
  generalSupport?: boolean;
  technicalSupport?: boolean;
  billingSupport?: boolean;
  uxSupport?: boolean;
}

class CheckboxField extends React.Component<ICheckFieldProps> {
  constructor(props: ICheckFieldProps) {
    super(props);
  }
  public render() {
    return (
      <Flex
        alignItems="center"
        justifyContent="center"
        flexWrap="wrap"
        width={1}
        p={3}
      >
        <Box width={1 / 4}>
          <Field name={this.props.name} type="checkbox" />
        </Box>
        <Box width={3 / 4}>
          <Text textAlign="left" fontSize={[2, 3, 3, 3]}>
            {this.props.label}
          </Text>
        </Box>
      </Flex>
    );
  }
}

export default CheckboxField;
