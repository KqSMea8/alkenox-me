import * as React from "react";

import { Formik, FormikActions, FormikProps, Form } from "formik";
import { Flex } from "rebass";

import * as contactForm from "./contactForm";
import InitialValues from "./initialValues";
import ValidationSchema from "./validationSchema";

class FormikHead extends React.Component {
  //handleSubmit = (values, { props = this.props, setSubmitting }) => {
  //process form submission here
  //done submitting, set submitting to false
  //    setSubmitting(false);
  //    return;
  //  };
  handleSubmit = (values: any, { props = this.props, setSubmitting }: any) => {
    console.log(values);
    alert("Form Submitted");
    setSubmitting(false);
    return;
  };

  public render() {
    return (
      <span>
        <Formik
          initialValues={contactForm.InitialValues}
          validationSchema={contactForm.ValidationSchema}
          onSubmit={(values: {}, actions: FormikActions<{}>) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
            }, 1000);
          }}
          render={(formProps: FormikProps<{}>) => (
            <Form id="contactUs">
              {props.children}
              <button type="submit" disabled={formProps.isSubmitting}>
                Send
              </button>
            </Form>
          )}
        />
      </span>
    );
  }
}

export default FormikHead;
