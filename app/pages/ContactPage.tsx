import * as React from 'react';
import { Formik } from 'formik';
import Kontakt from '../components/Form/Kontakt';
import FormikWrap from '../components/Form/FormikWrap';
import GeneralForm from '../components/Form/GeneralForm';
import MultiForm from '../components/Form/MultiForm';

const ContactPage: React.SFC<{}> = () => {
  return (
    <span>
      <Kontakt />
    </span>
  );
};
export default ContactPage;
