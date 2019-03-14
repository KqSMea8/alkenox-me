import * as React from "react";
import defineForm from "react-define-form";
import * as Yup from "yup";
import axios from "axios";

import styled from "@emotion/styled";
import { Flex, Box, Heading, Text } from "rebass";
import { Input } from "antd";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  url: string;
  message: string;
}

// The type of props ContactForm receives
interface FormProps {
  initialFirstName?: string;
  initialLastName?: string;
  initialEmail?: string;
  initialUrl?: string;
  initialMessage?: string; // if this passed all the way through you might do this or make a union type
}

const TextArea = Input;

const Hide = styled.span`
  display: none;
`;

const ValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
  url: Yup.string().url("Invalid url"),
  message: Yup.string()
    .min(2, "Too Short!")
    .required("Required")
});

const { Form, Fields } = defineForm(f => ({
  name: f<string>(),
  email: f<string>(),
  url: f<string>(),
  message: f<string>()
}));

const Kontakt = () => (
  <Form
    initialValues={{ name: "", email: "", url: "", message: "" }}
    onSubmit={values => {
      console.log(values);
    }}
    validate={values => {
      ValidationSchema;
      return {};
    }}
    render={({ handleSubmit, pristine, invalid }) => (
      <form
        onSubmit={handleSubmit}
        name="contact"
        method="POST"
        netlify-honeypot="bot-field"
        data-netlify-recaptcha="true"
        data-netlify="true"
      >
        <Flex my={100} flexWrap="wrap" width={[1]}>
          <Flex flexWrap="wrap" mx="auto" width={[1]}>
            <Hide>
              <input name="bot-field" />
            </Hide>

            <Box py={2} px={3} width={[1, 1, 1 / 3, 1 / 3]}>
              <Fields.name
                render={({ input, meta }) => (
                  <div>
                    <label>Name</label>
                    <Input placeholder="Your Name" {...input} />
                    {meta.touched && meta.error && <span>{meta.error}</span>}
                  </div>
                )}
              />
            </Box>

            <Box py={2} px={3} width={[1, 1, 1 / 3, 1 / 3]}>
              <Fields.email
                render={({ input, meta }) => (
                  <div>
                    <label>Email</label>
                    <Input placeholder="Your Email" {...input} />
                    {meta.touched && meta.error && <span>{meta.error}</span>}
                  </div>
                )}
              />
            </Box>

            <Box py={2} px={3} width={[1, 1, 1 / 3, 1 / 3]}>
              <Fields.url>
                {({ input, meta }) => (
                  <div>
                    <label>Website</label>
                    <Input
                      type="text"
                      {...input}
                      placeholder="Do You Have A Website?"
                    />
                    {meta.touched && meta.error && <span>{meta.error}</span>}
                  </div>
                )}
              </Fields.url>
            </Box>

            <Box py={2} px={3} width={[1]}>
              <Fields.message
                render={({ input, meta }) => (
                  <div>
                    <label>Message</label>
                    <TextArea placeholder="Your Message" {...input} />
                    {meta.touched && meta.error && <span>{meta.error}</span>}
                  </div>
                )}
              />
            </Box>
          </Flex>

          <Flex flexWrap="wrap" mx="auto">
            <Box py={2} px={3} width={[1, 1, 1 / 2, 1 / 2]}>
              <button
                className="prime"
                type="submit"
                disabled={pristine || invalid}
              >
                Submit
              </button>
            </Box>
            <Box py={2} px={3} width={[1, 1, 1 / 2, 1 / 2]}>
              <button className="prime" type="reset">
                Reset
              </button>
            </Box>
          </Flex>
        </Flex>
      </form>
    )}
  />
);

export default Kontakt;
