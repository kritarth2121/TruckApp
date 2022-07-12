import React, {useEffect} from "react";
import * as yup from "yup";
import Input from "../shared-components/Input";
import {Formik, Form, Field} from "formik";
import Button from "../shared-components/Button";
import cx from "classnames";
import {View, Text} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {authLoginAction} from "../../redux/actions/auth.actions";
import {userSelector} from "../../redux/selectors/auth.selectors";
import {connect} from "react-redux";
import {User} from "../../models/entities/User";
import {AppState} from "../../redux/reducers";

const loginValidationSchema = yup.object().shape({
    email: yup.string().email("Please enter valid email").required("Email Address is Required"),
    password: yup
        .string()
        .min(8, ({min}) => `Password must be at least ${min} characters`)
        .required("Password is required"),
});

interface Props {
    login?: any;
    user?: User;
}

const Login: React.FC<Props> = function (props) {
    const navigation = useNavigation();

    const {login, user} = props;

    return (
        <View className="bg-white h-full w-full space-y-3   p-3">
            <Text className="text-black  font-bold mt-20 mb-10 text-5xl">Log in your Account</Text>

            <Formik
                initialValues={{email: "", password: ""}}
                validationSchema={loginValidationSchema}
                onSubmit={(values) => {
                    login({
                        email: values.email,
                        password: values.password,
                    });
                }}
            >
                {({handleSubmit, isValid, dirty}) => (
                    <>
                        <Field
                            iconName="mail"
                            component={Input}
                            name="email"
                            placeholder="Email Address"
                            keyboardType="email-address"
                        />
                        <Field
                            iconName="lock"
                            component={Input}
                            name="password"
                            placeholder="Password"
                            secureTextEntry
                        />
                        <Button
                            onPress={handleSubmit}
                            title="Next"
                            extraClass={cx({
                                "opacity-50": !isValid || !dirty,
                            })}
                        />
                    </>
                )}
            </Formik>
            <View className="flex flex-row w-full text-center justify-center absolute bottom-3">
                <Text>Dont Have a account ?</Text>
                <Text className="text-primary-500" onPress={() => navigation.navigate("sign-up" as any)}>
                    Sign Up
                </Text>
            </View>
        </View>
    );
};

Login.defaultProps = {};

const mapStateToProps = (state: AppState) => ({
    user: userSelector(state),
});

const mapDispatchToProps = {
    login: authLoginAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Login));
