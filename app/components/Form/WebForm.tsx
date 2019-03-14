import * as React from "react";

import { Field, FieldProps } from "formik";

import { DatePicker, Input, InputNumber } from "antd";
import { Flex, Box, Heading, Text } from "rebass";

import TextField from "./TextField";
import CheckboxField from "./CheckboxField";
import CheckboxReveal from "./CheckboxReveal";

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

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
const TextArea = Input;

class Store extends React.Component<{}> {
  public render() {
    return (
      <Flex flexWrap="wrap" justifyContent="space-around" width={[1]}>
        <Box className="centerMargin" p={3} width={[1]}>
          <Box width={1}>
            <CheckboxField label="Traditional Store" name="traditionalStore" />
            <CheckboxField label="Online Store" name="onlineStore" />
          </Box>
        </Box>
      </Flex>
    );
  }
}

class Blog extends React.Component<{}> {
  public render() {
    return (
      <Flex flexWrap="wrap" justifyContent="space-around" width={[1]}>
        <Box className="centerMargin" p={3} width={[1]}>
          <CheckboxField label="Traditional Blog" name="traditionalBlog" />
          <CheckboxField label="Vlog (Video Blog)" name="vlogBlog" />
          <CheckboxField label="Podcast (Audio Blog)" name="podcastBlog" />
        </Box>
      </Flex>
    );
  }
}

class Portfolio extends React.Component<{}> {
  public render() {
    return (
      <Flex flexWrap="wrap" justifyContent="space-around" width={[1]}>
        <Box className="centerMargin" p={3} width={[1]}>
          <CheckboxField label="Musician/Artist/Band" name="musicPortfolio" />
          <CheckboxField label="Visual Artist" name="artistPortfolio" />
          <CheckboxField label="Novelist" name="novelistPortfolio" />
          <CheckboxField label="Film/Tv/Media" name="mediaPortfolio" />
          <Box width={[1]}>
            <Field
              name="otherPortfolio"
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
        </Box>
      </Flex>
    );
  }
}

class Promotional extends React.Component<{}> {
  public render() {
    return (
      <Flex flexWrap="wrap" justifyContent="center" width={[1]}>
        <Box className="centerMargin" p={3} width={[1]}>
          <CheckboxField label="Service" name="servicePromo" />
          <CheckboxField label="Event" name="eventPromo" />
          <CheckboxField label="Product" name="productPromo" />
          <CheckboxField label="Brand" name="brandPromo" />
          <Box width={[1]}>
            <Field
              name="otherPromo"
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
        </Box>
      </Flex>
    );
  }
}

const WebForm: React.SFC<{}> = () => {
  return (
    <Flex flexWrap="wrap" justifyContent="center">
      <Box p={3} mt={3} width={1}>
        <Heading fontSize={[3, 3, 3, 4]} textAlign="center" color="inherit">
          Type of Site
        </Heading>
      </Box>

      <Flex flexWrap="wrap" width={[1]}>
        <Box width={[1, 1, 1 / 4, 1 / 4]}>
          <CheckboxReveal label="Store" component={<Store />} />
        </Box>
        <Box width={[1, 1, 1 / 4, 1 / 4]}>
          <CheckboxReveal label="Blog" component={<Blog />} />
        </Box>
        <Box width={[1, 1, 1 / 4, 1 / 4]}>
          <CheckboxReveal label="Portfolio" component={<Portfolio />} />
        </Box>
        <Box width={[1, 1, 1 / 4, 1 / 4]}>
          <CheckboxReveal label="Promotional" component={<Promotional />} />
        </Box>
      </Flex>

      <Flex
        flexWrap="wrap"
        flexDirection="column"
        justifyContent="center"
        mt={3}
        width={[1]}
      >
        <Box p={3} width={[1]}>
          <Heading fontSize={[3, 3, 3, 4]} textAlign="center" color="inherit">
            A Little More Info Please...
          </Heading>
        </Box>
        <Box p={1} width={[1]}>
          <TextField
            label="Describe your business, product, service, or portfolio in a few sentences."
            name="description"
          />
        </Box>
        <Box p={1} width={[1]}>
          <TextField
            label="If you currently have a website, what would you like to change about it?"
            name="currentWebsite"
          />
        </Box>
        <Box p={1} width={[1]}>
          <TextField
            label="What would you like to achieve with your new website?"
            name="websiteGoal"
          />
        </Box>
        <Box p={1} width={[1]}>
          <TextField
            label="Please describe the audience you would like to reach with your new website."
            name="targetAudience"
          />
        </Box>
        <Box p={1} width={[1]}>
          <TextField
            label="Please describe and/or list your direct competitors."
            name="competitors"
          />
        </Box>
        <Box p={1} width={[1]}>
          <TextField
            label="Please desribe what you feel makes what you offer unique from your direct competitors."
            name="unique"
          />
        </Box>
      </Flex>

      <Flex
        flexWrap="wrap"
        flexDirection="column"
        justifyContent="center"
        mt={3}
        width={[1, 1, 1 / 2]}
      >
        <Box p={3} className="centerMargin" width={[1]}>
          <Heading fontSize={[3, 3, 3, 4]} textAlign="center" color="inherit">
            We Will Be Providing...
          </Heading>
        </Box>
        <Box p={3} className="centerMargin" width={[1]}>
          <CheckboxField label="Outline" name="outlineProvided" />
          <CheckboxField label="Wireframe" name="wireframeProvided" />
          <CheckboxField label="Design" name="designProvided" />
          <CheckboxField label="Written Pages" name="pagesProvided" />
          <CheckboxField label="Images/Photos" name="imagesProvided" />
          <CheckboxField label="Graphics" name="graphicsProvided" />
          <CheckboxField label="Video" name="videoProvided" />
          <CheckboxField label="Audio" name="audioProvided" />
        </Box>
        <Box alignSelf="center" width={[1, 1, 1 / 2, 1 / 2]}>
          <Field
            name="otherProvidedWeb"
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
        mt={3}
        width={[1, 1, 1 / 2]}
      >
        <Box p={3} className="centerMargin" width={[1]}>
          <Heading fontSize={[3, 3, 3, 4]} textAlign="center" color="inherit">
            We Will Need Provided...
          </Heading>
        </Box>
        <Box p={3} className="centerMargin" width={[1]}>
          <CheckboxField label="Outline" name="outlineNeeded" />
          <CheckboxField label="Wireframe" name="wireframeNeeded" />
          <CheckboxField label="Design" name="designNeeded" />
          <CheckboxField label="Written Pages" name="pagesNeeded" />
          <CheckboxField label="Images/Photos" name="imagesNeeded" />
          <CheckboxField label="Graphics" name="graphicsNeeded" />
          <CheckboxField label="Video" name="videoNeeded" />
          <CheckboxField label="Audio" name="audioNeeded" />
        </Box>
        <Box alignSelf="center" width={[1, 1, 1 / 2, 1 / 2]}>
          <Field
            name="otherNeededWeb"
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
          <Text textAlign="center" fontSize={[3, 3, 3, 4]} color="inherit">
            Our Deadline
          </Text>
          <Field name="deadlineWeb" component={DatePicker} size="large" />
        </Box>
        <Box p={1} width={[1, 1 / 2]}>
          <Text textAlign="center" fontSize={[3, 3, 3, 4]} color="inherit">
            Our Budget
          </Text>
          <Field
            name="budgetWeb"
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
export default WebForm;
