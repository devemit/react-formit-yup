import React from "react";
import { Formik, Form } from "formik";
import TextField from "./TextField";
import * as Yup from "yup";

const Signup = () => {
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    lastName: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be atleast 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required "),
  });
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formik) => (
        <div className="absolute">
          <h1 className="text-4xl font-semibold text-center uppercase mb-10 text-gray-700">
            Sign Up
          </h1>

          <Form className="p-8 rounded-xl shadow-2xl">
            <TextField label="First Name" name="firstName" type="text" />
            <TextField label="Last Name" name="lastName" type="text" />
            <TextField label="Email" name="email" type="email" />
            <TextField label="Password" name="password" type="password" />
            <TextField
              label="Confirm Password"
              name="confirmPassword"
              type="password"
            />
            <button
              type="submit"
              className="ml-2 mt-10 rounded-xl bg-indigo-500 hover:bg-indigo-700 text-white font-bold px-6 py-1.5 "
            >
              Submit
            </button>
            <button
              type="reset"
              className="ml-2 mt-10 rounded-xl bg-red-500 hover:bg-red-700 text-white font-bold px-6 py-1.5 "
            >
              Reset
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default Signup;
