import * as React from "react";

import { Field } from "formik";

import { Input } from "antd";
import { Flex, Box, Heading } from "rebass";

import CheckboxField from "./CheckboxField";

interface IFormSupport {
  name?: string;
  email?: string;
  subject?: string;
  website?: string;
  message?: string;
}

const SupportForm: React.SFC<IFormSupport> = () => {
  return (
    <Flex
      flexWrap="wrap"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      mt={3}
      width={[1]}
    >
      <Box p={3} alignSelf="center" width={[1, 1, 1 / 2]}>
        <Heading textAlign="center" fontSize={[3, 3, 4, 5]} color="inherit">
          What kind of support do you require?
        </Heading>
      </Box>
      <Box p={3} className="centerMargin" width={[1, 1 / 2, 1 / 3]}>
        <CheckboxField label="General Question" name="generalSupport" />
        <CheckboxField label="Technical" name="technicalSupport" />
        <CheckboxField label="Billing" name="billingSupport" />
        <CheckboxField label="Experience Querk" name="uxSupport" />
      </Box>
      <Box alignSelf="center" width={[1, 1 / 2, 1 / 3]}>
        <Field
          name="otherSupport"
          type="text"
          component={Input}
          placeholder="Need help with something else..."
          margin="normal"
        />
      </Box>
    </Flex>
  );
};
export default SupportForm;
