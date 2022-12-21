import React from "react";
import { ErrorMessage, useField } from "formik";

const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="p-2.5 flex flex-col">
      <label className="block text-gray-800 ml-1" htmlFor={label.name}>
        {label}
      </label>
      <input
        className={`outline-none py-1 px-2 rounded-xl ${
          meta.touched && meta.error && "is-invalid"
        }`}
        {...field}
        {...props}
      />
      <ErrorMessage component="div" name={field.name} className="error" />
    </div>
  );
};

export default TextField;
