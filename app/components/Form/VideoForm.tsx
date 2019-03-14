import * as React from "react";

import { Field, FieldProps } from "formik";

import { DatePicker, Input, InputNumber } from "antd";
import { Flex, Box, Heading, Text } from "rebass";

import CheckboxField from "./CheckboxField";
interface IFormContact {
  firstName?: string;
  lastName?: string;
  email?: string;
  url?: string;
  message?: string;
  otherPortfolio?: string;
  otherProvidedWeb?: string;
  otherNeededWeb?: string;
  deadlineWeb?: string;
  budgetWeb?: number;
  otherPromo?: string;
  description?: string;
  currentWebsite?: string;
  websiteGoal?: string;
  targetAudience?: string;
  competitors?: string;
  unique?: string;
  otherProvidedVideo?: string;
  otherNeededVideo?: string;
  deadlineVideo?: string;
  budgetVideo?: number;
  otherSupport?: string;
}

const TextArea = Input;

const VideoForm: React.SFC<{}> = () => {
  return (
    <Flex flexWrap="wrap" justifyContent="center" width={[1]}>
      <Flex
        flexWrap="wrap"
        flexDirection="column"
        justifyContent="center"
        width={[1, 1, 1 / 2, 1 / 2]}
        mt={4}
      >
        <Box p={1} className="centerMargin" width={[1]}>
          <Heading fontSize={[3, 3, 4, 5]} textAlign="center" color="inherit">
            Type of Video
          </Heading>
        </Box>
        <Box p={3} className="centerMargin" width={[1]}>
          <CheckboxField label="Full Feature" name="fullFeatType" />
          <CheckboxField label="Short" name="shortType" />
          <CheckboxField label="45 Minute Program" name="hourType" />
          <CheckboxField label="20 Minute Program" name="halfType" />
          <CheckboxField label="30 Second Spot" name="spotType" />
          <CheckboxField label="ENG" name="engType" />
        </Box>
      </Flex>
      <Flex
        flexWrap="wrap"
        flexDirection="column"
        justifyContent="center"
        width={[1, 1, 1 / 2, 1 / 2]}
        mt={4}
      >
        <Box p={1} className="centerMargin" width={[1]}>
          <Heading fontSize={[3, 3, 4, 5]} textAlign="center" color="inherit">
            Intended Medium(s)
          </Heading>
        </Box>
        <Box p={3} className="centerMargin" width={[1]}>
          <CheckboxField label="Theatre" name="theatreDistro" />
          <CheckboxField label="Broadcast" name="broadcastDistro" />
          <CheckboxField label="Streaming" name="streamingDistro" />
          <CheckboxField label="Web" name="webDistro" />
          <CheckboxField label="Digital Download" name="digiDistro" />
          <CheckboxField label="Device Based" name="deviceDistro" />
        </Box>
        <Box alignSelf="center" width={[1, 1, 1 / 2, 1 / 2]}>
          <Field
            name="otherDistro"
            render={({ field, form }: FieldProps<IFormContact>) => (
              <div>
                <TextArea
                  autosize
                  type="textarea"
                  {...field}
                  placeholder="Other"
                />
              </div>
            )}
          />
        </Box>
      </Flex>
      <Flex
        flexWrap="wrap"
        flexDirection="column"
        justifyContent="center"
        width={[1, 1, 1 / 2, 1 / 2]}
        mt={4}
      >
        <Box p={1} className="centerMargin" width={[1]}>
          <Heading fontSize={[3, 3, 4, 5]} textAlign="center" color="inherit">
            We Will Be Providing...
          </Heading>
        </Box>
        <Box p={3} className="centerMargin" width={[1]}>
          <CheckboxField label="Script" name="scriptProvided" />
          <CheckboxField label="Storyboard" name="storyboardProvided" />
          <CheckboxField label="Locations" name="locationsProvided" />
          <CheckboxField label="Crew" name="crewProvided" />
          <CheckboxField label="Gear" name="gearProvided" />
          <CheckboxField label="Casting" name="castingProvided" />
          <CheckboxField label="Props" name="propsProvided" />
          <CheckboxField
            label="Background / Source Cues"
            name="musicProvided"
          />
          <CheckboxField label="Scoring" name="scoringProvided" />
          <CheckboxField label="Sound Design" name="soundDesignProvided" />
          <CheckboxField label="Visual Effects" name="visualEffectsProvided" />
          <CheckboxField
            label="Motion Graphics"
            name="motionGraphicsProvided"
          />
          <CheckboxField
            label="Video / Audio Editing"
            name="videoAudioEditingProvided"
          />
          <CheckboxField
            label="Mixing & Mastering"
            name="mixingMasteringProvided"
          />
          <CheckboxField
            label="Promotional Materials"
            name="promoMaterialsProvided"
          />
        </Box>
        <Box alignSelf="center" width={[1, 1, 1 / 2, 1 / 2]}>
          <Field
            name="otherProvidedVideo"
            render={({ field, form }: FieldProps<IFormContact>) => (
              <div>
                <TextArea
                  autosize
                  type="textarea"
                  {...field}
                  placeholder="Other"
                />
              </div>
            )}
          />
        </Box>
      </Flex>
      <Flex
        flexWrap="wrap"
        flexDirection="column"
        justifyContent="center"
        width={[1, 1, 1 / 2]}
        mt={4}
      >
        <Box p={1} className="centerMargin" width={[1]}>
          <Heading fontSize={[3, 3, 4, 5]} textAlign="center" color="inherit">
            We Will Need Provided...
          </Heading>
        </Box>
        <Box p={3} className="centerMargin" width={[1]}>
          <CheckboxField label="Script" name="scriptNeeded" />
          <CheckboxField label="Storyboard" name="storyboardNeeded" />
          <CheckboxField label="Locations" name="locationsNeeded" />
          <CheckboxField label="Crew" name="crewNeeded" />
          <CheckboxField label="Gear" name="gearNeeded" />
          <CheckboxField label="Casting" name="castingNeeded" />
          <CheckboxField label="Props" name="propsNeeded" />
          <CheckboxField label="Background / Source Cues" name="musicNeeded" />
          <CheckboxField label="Scoring" name="scoringNeeded" />
          <CheckboxField label="Sound Design" name="soundDesignNeeded" />
          <CheckboxField label="Visual Effects" name="visualEffectsNeeded" />
          <CheckboxField label="Motion Graphics" name="motionGraphicsNeeded" />
          <CheckboxField
            label="Video / Audio Editing"
            name="videoAudioEditingNeeded"
          />
          <CheckboxField
            label="Mixing & Mastering"
            name="mixingMasteringNeeded"
          />
          <CheckboxField
            label="Promotional Materials"
            name="promoMaterialsNeeded"
          />
        </Box>
        <Box alignSelf="center" width={[1, 1, 1 / 2, 1 / 2]}>
          <Field
            name="otherNeededVideo"
            render={({ field, form }: FieldProps<IFormContact>) => (
              <div>
                <TextArea
                  autosize
                  type="textarea"
                  {...field}
                  placeholder="Other"
                />
              </div>
            )}
          />
        </Box>
      </Flex>

      <Flex justifyContent="center" flexWrap="wrap" p={3}>
        <Box p={1} width={[1, 1 / 2]}>
          <Text textAlign="center" fontSize={[3, 3, 4, 5]} color="inherit">
            Our Deadline
          </Text>
          <Field name="deadlineVideo" component={DatePicker} size="large" />
        </Box>
        <Box p={1} width={[1, 1, 1 / 2, 1 / 2]}>
          <Text textAlign="center" fontSize={[3, 3, 4, 5]} color="inherit">
            Our Budget
          </Text>
          <Field
            name="budgetVideo"
            component={InputNumber}
            formatter={(value: any) =>
              `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
            parser={(value: {
              replace: (arg0: RegExp, arg1: string) => void;
            }) => value.replace(/\$\s?|(,*)/g, "")}
          />
        </Box>
      </Flex>
    </Flex>
  );
};
export default VideoForm;
