import * as React from "react";

import { Formik, FormikActions, FormikProps, Form } from "formik";
import { Flex } from "rebass";

import InitialValues from "./initialValues";
import ValidationSchema from "./validationSchema";

const FormikWrap: React.SFC<{}> = props => {
  return (
    <span>
      <Formik
        initialValues={InitialValues}
        validationSchema={ValidationSchema}
        onSubmit={(values: {}, actions: FormikActions<{}>) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
        render={(_formikBag: FormikProps<{}>) => (
          <Form id="contactUs">
            {props.children}
            <Flex mb={5} flexWrap="wrap" justifyContent="center">
              <button className="prime" type="submit">
                Send
              </button>
              <button className="prime" type="reset">
                Reset
              </button>
            </Flex>
          </Form>
        )}
      />
    </span>
  );
};
export default FormikWrap;
