// Core
import React from 'react';
// Styling
import { Heading } from 'rebass';
// Components
import ContactForm from '../components/ContactForm';

// Page
const ContactPage = () => {
  return (
    <span>
      <Heading p={5} width={1} fontSize={[3, 4, 5, 6]} textAlign="center">
        Contact Us
      </Heading>
      <ContactForm />
    </span>
  );
};

export default ContactPage;
