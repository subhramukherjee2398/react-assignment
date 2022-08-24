import { Form, Formik, Field, ErrorMessage } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { LoginInitiate } from "../redux/action";

function Login() {

  const dispatch = useDispatch()

  const initialvalues = {
    email: "",
    password: "",
  };

  const onSubmit = (values, props) => {
    setTimeout(() => {
      dispatch(LoginInitiate(values))
      props.resetForm();
      props.setSubmitting(false);
    }, 2000);
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
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
              <label>Email</label>
              <Field
                type="text"
                name="email"
                placeholder="Enter your name"
              />
              <p style={{ color: "red" }}>{<ErrorMessage name="email" />}</p>
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
