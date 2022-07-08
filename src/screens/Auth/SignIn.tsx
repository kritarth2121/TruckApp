import React from "react";
import * as yup from "yup";
import Input from "../shared-components/Input";
import {Formik, Form, Field} from "formik";
import Button from "../shared-components/Button";
import cx from "classnames";

const signUpValidationSchema = yup.object().shape({
    user_name: yup.string().min(10).required("User Name is required"),
    mobile_number: yup
        .string()
        .matches(/(01)(\d){8}\b/, "Enter a valid phone number")
        .required("Phone number is required"),
    email: yup.string().email("Please enter valid email").required("Email is required"),
    password: yup
        .string()
        .matches(/\w*[a-z]\w*/, "Password must have a small letter")
        .matches(/\w*[A-Z]\w*/, "Password must have a capital letter")
        .matches(/\d/, "Password must have a number")
        .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, "Password must have a special character")
        .min(8, ({min}) => `Password must be at least ${min} characters`)
        .required("Password is required"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "Passwords do not match")
        .required("Confirm password is required"),
});

interface Props {}

const SignIn: React.FC<Props> = function (props) {
    return (
        <Formik
            initialValues={{
                user_name: "",
                email: "",
                mobile_number: "",
                password: "",
                confirmPassword: "",
            }}
            validationSchema={signUpValidationSchema}
            onSubmit={(values) => console.log(values)}
        >
            {({handleSubmit, isValid}) => (
                <>
                    <Field component={Input} name="user_name" placeholder="Full Name" />
                    <Field component={Input} name="email" placeholder="Email Address" keyboardType="email-address" />
                    <Field component={Input} name="mobile_number" placeholder="Phone Number" keyboardType="numeric" />
                    <Field component={Input} name="password" placeholder="Password" secureTextEntry />
                    <Field component={Input} name="confirmPassword" placeholder="Confirm Password" secureTextEntry />

                    <Button
                        onPress={handleSubmit}
                        title="SIGN UP"
                        className={cx({
                            "opacity-60": !isValid,
                        })}
                    />
                </>
            )}
        </Formik>
    );
};

SignIn.defaultProps = {};

export default React.memo(SignIn);
