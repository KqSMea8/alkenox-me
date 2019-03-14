import * as React from "react";

import { Field, FieldProps } from "formik";

import { Input } from "antd";
import { Flex, Box } from "rebass";

interface IFormContact {
  firstName?: string;
  lastName?: string;
  email?: string;
  url?: string;
  message?: string;
}

const TextArea = Input;

const GeneralForm: React.SFC<{}> = props => {
  return (
    <Flex justifyContent="center" flexWrap="wrap" pt={4} pb={4}>
      <Box p={3} width={[1, 1, 1 / 3, 1 / 3]}>
        <Field
          name="firstName"
          render={({ field, form }: FieldProps<IFormContact>) => (
            <div>
              <Input type="text" {...field} placeholder="First Name" />
              {form.touched.firstName &&
                form.errors.firstName &&
                form.errors.firstName}
            </div>
          )}
        />
      </Box>

      <Box p={3} width={[1, 1, 1 / 3, 1 / 3]}>
        <Field
          name="lastName"
          render={({ field, form }: FieldProps<IFormContact>) => (
            <div>
              <Input type="text" {...field} placeholder="Last Name" />
              {form.touched.lastName &&
                form.errors.lastName &&
                form.errors.lastName}
            </div>
          )}
        />
      </Box>
      <Box p={3} width={[1, 1, 2 / 3, 2 / 3]}>
        <Field
          name="email"
          render={({ field, form }: FieldProps<IFormContact>) => (
            <div>
              <Input type="text" {...field} placeholder="Email" />
              {form.touched.email && form.errors.email && form.errors.email}
            </div>
          )}
        />
      </Box>

      <Box p={3} width={[1, 1, 2 / 3, 2 / 3]}>
        <Field
          name="url"
          render={({ field, form }: FieldProps<IFormContact>) => (
            <div>
              <Input type="text" {...field} placeholder="Website" />
              {form.touched.url && form.errors.url && form.errors.url}
            </div>
          )}
        />
      </Box>
      <Box width={[1, 3 / 4, 3 / 4, 3 / 4]}>{props.children}</Box>

      <Flex
        alignItems="center"
        justifyContent="center"
        flexWrap="wrap"
        width={1}
        p={3}
      >
        <Box p={1} width={[1, 1, 2 / 3, 2 / 3]}>
          <Field
            name="message"
            render={({ field, form }: FieldProps<IFormContact>) => (
              <div>
                <TextArea
                  autosize
                  type="textarea"
                  {...field}
                  placeholder="Your message or other important information."
                />
                {form.touched.message &&
                  form.errors.message &&
                  form.errors.message}
              </div>
            )}
          />
        </Box>
      </Flex>
    </Flex>
  );
};
export default GeneralForm;
