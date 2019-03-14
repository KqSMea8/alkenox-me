import * as React from "react";
import { Field, FieldProps } from "formik";

import { Input } from "antd";
import { Flex, Box, Text } from "rebass";

interface ITextField {
  label?: string;
  name?: string;
  fieldType?: string;
  value?: string;
}

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

class TextField extends React.Component<ITextField> {
  constructor(props: ITextField) {
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
        <Box flex="auto" width={[1, 1, 2 / 3, 1 / 2]}>
          <Text textAlign="left" fontSize={[2, 3, 3, 3]}>
            {this.props.label}
          </Text>
        </Box>
        <Box p={1} width={[1, 1, 2 / 3, 1 / 2]}>
          <Field
            name={this.props.name}
            value={this.props.value}
            render={({ field, form }: FieldProps<IFormContact>) => (
              <div>
                <TextArea
                  autosize
                  value={this.props.value}
                  type="textarea"
                  {...field}
                  placeholder={this.props.label}
                />
              </div>
            )}
          />
        </Box>
      </Flex>
    );
  }
}

export default TextField;
