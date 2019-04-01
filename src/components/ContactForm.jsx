import React, { Component } from 'react';
import { Formik } from 'formik';
import { Input } from 'antd';
import { Flex, Box } from 'rebass';
import axios from 'axios';

const { TextArea } = Input;
const encode = data => {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
};
class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', email: '', url: '', message: '' };
  }

  handleSubmit = e => {
    axios('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state })
    })
      .then(() => alert('Success!'))
      .catch(error => alert(error));

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <Formik>
        {({ handleSubmit, handleChange, handleBlur, values, errors }) => (
          <form
            onSubmit={handleSubmit}
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact" />
            <Flex px={[2, 2, 4, 6]} flexWrap="wrap" justifyContent="center">
              <Box px={3} py={1} width={[1]}>
                <Input
                  type="text"
                  placeholder="Jon/Jane Doe"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  name="name"
                />
                {errors.name && <div>{errors.name}</div>}
              </Box>
              <Box px={3} py={1} width={[1]}>
                <Input
                  type="text"
                  placeholder="name@domain. ..."
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  name="email"
                />
                {errors.email && <div>{errors.email}</div>}
              </Box>
              <Box px={3} py={1} width={[1]}>
                <Input
                  type="text"
                  placeholder="https://www.domain. ..."
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.url}
                  name="url"
                />
                {errors.url && <div>{errors.url}</div>}
              </Box>
              <Box px={3} py={1} width={[1]}>
                <TextArea
                  autosize
                  type="text"
                  placeholder="Message"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.msg}
                  name="msg"
                />
                {errors.msg && <div>{errors.msg}</div>}
              </Box>
              <Box width="auto" alignSelf="center">
                <button type="submit">Submit</button>
              </Box>
            </Flex>
          </form>
        )}
      </Formik>
    );
  }
}
export default ContactForm;
