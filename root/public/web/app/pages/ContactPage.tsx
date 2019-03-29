import * as React from 'react';
import { withFormik, Formik, FormikActions, FormikErrors, FormikProps, Form, Field, FieldProps } from 'formik';
import * as Yup from 'yup';
import { Input, Select, AutoComplete } from 'antd';
import { Flex, Box, Text, Heading } from 'rebass';
import chalk from 'chalk';
import axios from 'axios'
import axiosContact from '../data/axiosContact'

interface ContactValues {
  name: string;
  email: string;
  url?: string;
  msg: string;
}

const InitialValues = {
  name: '',
  email: '',
  url: '',
  msg: ''
};

const Yuppers = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .email('Not A Valid Email')
    .required('Required'),
  url: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .url('Not A Valid Url'),
  message: Yup.string()
    .min(2, 'Too Short!')
    .required('Required')
});

const { TextArea } = Input;
const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

// Aside: You may see InjectedFormikProps<OtherProps, FormValues> instead of what comes below in older code.. InjectedFormikProps was artifact of when Formik only exported a HoC. It is also less flexible as it MUST wrap all props (it passes them through).
const InnerForm = (props: FormikProps<ContactValues>) => {
  const { touched, errors, isSubmitting } = props;
  return (
    <Form>
      <Input type="hidden" name="_csrf" value="{{csrfToken}}" />
      <Flex mt={[5]} flexWrap="wrap">
        <Box p={[2]} width={[1]}>
        <Field
        name="name"
        render={({ field }: FieldProps<ContactValues>) => (
          <span>
            <Input type="text" {...field} placeholder="Your Name" />
            {touched.name &&
              errors.name &&
              errors.name}
          </span>
        )}
      />
        </Box>
        <Box p={[2]} width={[1]}>
        <Field
        name="email"
        render={({ field }: FieldProps<ContactValues>) => (
          <span>
            <Input type="text" {...field} placeholder="Your Email" />
            {touched.email &&
              errors.email &&
              errors.email}
          </span>
        )}
      />
        </Box>
        <Box p={[2]} width={[1]}>
        <Field
        name="url"
        render={({ field }: FieldProps<ContactValues>) => (
          <span>
            <Input type="text" {...field} placeholder="Your Website" />
            {touched.url &&
              errors.url &&
              errors.url}
          </span>
        )}
      />
        </Box>
        <Box p={[2]} width={[1]}>
        <Field
        name="msg"
        render={({ field }: FieldProps<ContactValues>) => (
          <span>
            <TextArea autosize={true} {...field} placeholder="Your Message" />
            {touched.msg &&
              errors.msg &&
              errors.msg}
          </span>
        )}
      />
        </Box>
        <Box p={[2]} width="auto">
          <button type="submit" disabled={isSubmitting}>Send</button>
        </Box>
        <Box p={[2]} width="auto">
          <button type="reset">Reset</button>
        </Box>
      </Flex>
    </Form>
  );
};

// The type of props ContactForm receives
interface ContactFormProps {
  initialName?: string;
  initialEmail?: string;
  initialUrl?: string;
  initialMsg?: string;
}

// Wrap our form with the using withFormik HoC
const ContactForm = withFormik<ContactFormProps, ContactValues>({
  // Transform outer props into form values
  mapPropsToValues: props => {
    return {
      name: props.initialName ||  '',
      email: props.initialEmail || '',
      url: props.initialUrl ||  '',
      msg: props.initialMsg ||  ''
    };
  },

  // Add a custom validation function (this can be async too!)
  validate: (values: ContactValues) => {
    Yup.object().shape({
      name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
      email: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .email('Not A Valid Email')
        .required('Required'),
      url: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .url('Not A Valid Url'),
      message: Yup.string()
        .min(2, 'Too Short!')
        .required('Required')
    });
  },

  handleSubmit: values => {
    // do submitting things
    axios.post("/send", values)
    .then((response) => {
    console.log(chalk.blue('response: ', chalk.underline.green(`${response}`)));
  })
  .catch((error) => {
    console.log(chalk.red('error: ', chalk.underline.yellow(`${error}`)));
  });
  },
})(InnerForm);

// Use <ContactForm /> wherevs
const ContactPage: React.SFC<ContactValues> = () => {
  return (
    <span>
      <ContactForm />
    </span>
  );
};
export default ContactPage;
