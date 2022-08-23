import { Form, Formik, Field, ErrorMessage } from "formik";
import React from "react";
import * as Yup from "yup";

function Login() {
  const initialvalues = {
    username: "",
    password: "",
  };

  const onSubmit = (values, props) => {
    console.log(values);
    console.log(props);
    setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
    }, 2000);
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .email("please enter a valid email")
      .required("please enter email"),
    password: Yup.string().required("please enter password"),
  });

  return (
    <div>
      <h4>Login From</h4>
      <Formik
        initialValues={initialvalues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {(props) => (
          <Form>
            <div>
              <label>Username</label>
              <Field
                type="text"
                name="username"
                placeholder="Enter your name"
              />
              <p style={{ color: "red" }}>{<ErrorMessage name="username" />}</p>
            </div>
            <div>
              <label>Password</label>
              <Field
                type="password"
                name="password"
                placeholder="Enter your name"
              />
              <p style={{ color: "red" }}>{<ErrorMessage name="password" />}</p>
            </div>
            <div>
              <button disabled={props.isSubmitting}>{!props.isSubmitting ? "Login" : 'Loading'}</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Login;
