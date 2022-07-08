import React from "react";
import * as yup from "yup";
import Input from "../shared-components/Input";
import {Formik, Form, Field} from "formik";
import Button from "../shared-components/Button";
import cx from "classnames";

const loginValidationSchema = yup.object().shape({
    email: yup.string().email("Please enter valid email").required("Email Address is Required"),
    password: yup
        .string()
        .min(8, ({min}) => `Password must be at least ${min} characters`)
        .required("Password is required"),
});

interface Props {}

const SignIn: React.FC<Props> = function (props) {
    return (
        <Formik
            initialValues={{email: "", password: ""}}
            validationSchema={loginValidationSchema}
            onSubmit={(values) => console.log(values)}
        >
            {({handleSubmit, isValid}) => (
                <>
                    <Field component={Input} name="email" placeholder="Email Address" keyboardType="email-address" />
                    <Field component={Input} name="password" placeholder="Password" secureTextEntry />
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
