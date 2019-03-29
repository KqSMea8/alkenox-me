import * as React from "react";
import * as Yup from "yup";
import {
  Form,
  Input,
  Select,
  AutoComplete,
} from "antd";
import { Flex, Box, Text, Heading, Button } from "rebass";

interface ContactValues {
  name: string;
  email: string;
  url?: string;
  message: string;
}

const InitialValues = {
  name: "",
  email: "",
  website: "",
  message: ""
};

const Yuppers = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .email("Not A Valid Email")
    .required("Required"),
  website: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .url("Not A Valid Url"),
  message: Yup.string()
    .min(2, "Too Short!")
    .required("Required")
});

const { TextArea } = Input;
const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;



class Kontakt extends React.Component<ContactValues> {
  constructor(props: ContactValues) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
      event.preventDefault();
      const form = event.target;
      const data = new FormData(form);


      fetch('/send', {
        method: 'POST',
        body: data,
      });
    }

  public render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit} noValidate>
          <Flex
            mt={[5]}
            flexWrap="wrap"
            justifyContent="center"
            alignItems="center"
          >
            <Text width={[1]} textAlign="center">
              Name
            </Text>

            <Box width={[1]}>
              <Input type="text" id="name" name="name" required />
            </Box>

            <Text width={[1]} textAlign="center">
              Email
            </Text>

            <Box width={[1]}>
              <Input type="email" id="email" name="email" aria-describedby="emailHelp" required />
            </Box>

            <Text width={[1]} textAlign="center">
              Website
            </Text>

            <Box width={[1]}>
              <Input type="text" id="url" name="url" />
            </Box>

            <Text width={[1]} textAlign="center">
              Message
            </Text>

            <Box width={[1]}>
              <TextArea autosize={true} id="message" name="message" required />
            </Box>

            <Button type="submit">Submit</Button>
            <Flex flexWrap="wrap">
              {window.location.hash === "#success" && (
                <Box id="success" width={[1]}>
                  <Text>Your message has been sent!</Text>
                </Box>
              )}
              {window.location.hash === "#error" && (
                <Box id="error" width={[1]}>
                  <Text>An error occured while submitting the form.</Text>
                </Box>
              )}
            </Flex>
          </Flex>
        </Form>
      </div>
    );
  }
}

export default Kontakt;
