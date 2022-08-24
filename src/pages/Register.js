import React, { useEffect } from "react";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from 'react-redux'
import { registerInitiate } from '../redux/action'
import { useNavigate } from 'react-router-dom'


function Register() {

  const dispatch = useDispatch();
 /*  const userData = useSelector((state) => state.user); */
  /* let currentUser = userData?.currentUser;

  const navigate = useNavigate(); */


  /*useEffect(() => {
    console.log(userData)
    if (userData) {
      navigate('/');
    }
  }, [userData,navigate])*/

  const initialvalues = {
    username: "",
    email: "",
    password: "",
  };

  const onSubmit = (values, props) => {
    setTimeout(() => {
      dispatch(registerInitiate(values))
      props.resetForm();
      props.setSubmitting(false);
    }, 2000);
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
    email: Yup.string().email('Please enter valid email-id').required('Required')
  });

  return (
    <div>
      <h4>Registration From</h4>
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
              <label>Email</label>
              <Field
                type="text"
                name="email"
                placeholder="Enter your email"
              />
              <p style={{ color: "red" }}>{<ErrorMessage name="email" />}</p>
            </div>
            <div>
              <label>Password</label>
              <Field
                type="password"
                name="password"
                placeholder="Enter your password"
              />
              <p style={{ color: "red" }}>{<ErrorMessage name="password" />}</p>
            </div>
            <div>
              <button disabled={props.isSubmitting}>
                {!props.isSubmitting ? "Login" : "Loading"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Register;
