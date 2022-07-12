import React, {useEffect} from "react";
import * as yup from "yup";
import Input from "../shared-components/Input";
import {Formik, Form, Field} from "formik";
import Button from "../shared-components/Button";
import cx from "classnames";
import {View, Text, Dimensions, ScrollView} from "react-native";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {useNavigation} from "@react-navigation/native";
import {authSignInAction} from "../../redux/actions/auth.actions";
import {connect} from "react-redux";
import {userSelector} from "../../redux/selectors/auth.selectors";
import {User, UserRole} from "../../models/entities/User";
import {AppState} from "../../redux/reducers";

const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const signUpValidationSchema = yup.object().shape({
    name: yup.string().min(10).required("User Name is required"),
    mobile_number: yup
        .string()
        .required("Phone number is required")
        .matches(phoneRegExp, "Phone number is not valid")
        .min(10, "Too short")
        .max(10, "Too long"),
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

interface Props {
    authSignInAction?: any;
    user?: User;
}

const SignIn: React.FC<Props> = function (props) {
    const navigation = useNavigation();
    const {authSignInAction, user} = props;

    return (
        <View className="bg-white h-full w-full space-y-3   p-3">
            <Text className="text-black  mt-20 mb-10 text-5xl"  style={{fontFamily: "Gilroy_Bold"}}>Create your Account</Text>
            <Formik
                initialValues={{
                    name: "",
                    email: "",
                    mobile_number: "",
                    password: "",
                    confirmPassword: "",
                }}
                validationSchema={signUpValidationSchema}
                onSubmit={(values) => {
                    authSignInAction({
                        name: values.name,
                        email: values.email,
                        password: values.password,
                        mobile_number: values.mobile_number,
                        role: UserRole.DRIVER,
                    });
                }}
            >
                {({handleSubmit, isValid, dirty}) => (
                    <KeyboardAwareScrollView scrollEnabled={true}>
                        <View className="flex flex-col overflow-y-scroll">
                            <Field
                                component={Input}
                                name="name"
                                iconName="user"
                                keyboardType="email-address"
                                placeholder="Full Name"
                            />

                            <Field
                                component={Input}
                                name="email"
                                placeholder="Email Address"
                                iconName="mail"
                                keyboardType="email-address"
                            />
                            <Field
                                iconName="phone"
                                component={Input}
                                name="mobile_number"
                                placeholder="Phone Number"
                                keyboardType="numeric"
                            />
                            <Field
                                component={Input}
                                iconName="lock"
                                name="password"
                                placeholder="Password"
                                secureTextEntry
                            />
                            <Field
                                iconName="lock"
                                component={Input}
                                name="confirmPassword"
                                placeholder="Confirm Password"
                                secureTextEntry
                            />

                            <Button
                                onPress={handleSubmit}
                                title="Next"
                                extraClass={cx({
                                    "opacity-50": !isValid || !dirty,
                                })}
                            />
                        </View>
                    </KeyboardAwareScrollView>
                )}
            </Formik>
            <View className="flex flex-row w-full text-center justify-center ">
                <Text>Already Have a account ?</Text>
                <Text className="text-primary-500" onPress={() => navigation.navigate("login" as any)}>
                    Log In
                </Text>
            </View>
        </View>
    );
};

SignIn.defaultProps = {};

const mapStateToProps = (state: AppState) => ({
    user: userSelector(state),
});

const mapDispatchToProps = {
    authSignInAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(SignIn));
