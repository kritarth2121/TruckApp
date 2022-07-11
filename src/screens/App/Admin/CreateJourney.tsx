import React, {useEffect, useState} from "react";
import * as yup from "yup";
import {Formik, Form, Field} from "formik";
import {View, Text, Pressable} from "react-native";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import cx from "classnames";
import Input from "../../../screens/shared-components/Input";
import DateTimePicker from "@react-native-community/datetimepicker";
import {values} from "lodash";
import Button from "../../shared-components/Button";
import Icon from "react-native-vector-icons/AntDesign";
import moment from "moment";
import SelectBox from "react-native-multi-selectbox";
import {ScrollView} from "react-native-gesture-handler";
import {AppState} from "../../../redux/reducers";
import {connect} from "react-redux";
import {authGetDriverAction, authGetUserAction} from "../../../redux/actions/auth.actions";
import {User} from "../../../models/entities/User";
import {driversSelector, usersSelector} from "../../../redux/selectors/auth.selectors";
import {localStorageService} from "../../../services/LocalStorageService";
import Fontisto from "react-native-vector-icons/Fontisto";
import {journeyCreateAction} from "../../../redux/actions/journey.actions";

interface Props {
    drivers?: User[];
    users?: User[];
    getDriver: () => void;
    getUser: () => void;
    journeyCreate: any;
}

const CreateJourney: React.FC<Props> = function (props) {
    const {drivers, users, getDriver, getUser, journeyCreate} = props;
    const journeyValidationSchema = yup.object().shape({
        start_location: yup.string().min(10).required("Start Location is required"),
        end_location: yup.string().min(10).required("Start Location is required"),
        date: yup.date().typeError("Please enter valid Date").required("Date is required"),
        driver_id: yup.mixed().required("please choose Driver"),
        user_id: yup.mixed().required("please choose Driver"),
    });
    const [open, setOpen] = useState(false);
    useEffect(() => {
        getDriver();
        getUser();
    }, []);

    console.log(drivers, users);
    return (
        <View className="bg-white h-full w-full space-y-3   p-3">
            <Text className="text-black font-bold mt-20 mb-10 text-5xl">Create Journey</Text>
            <Formik
                initialValues={{
                    start_location: "",
                    end_location: "",
                    date: new Date(),
                    driver_id: null,
                    user_id: null,
                }}
                validationSchema={journeyValidationSchema}
                onSubmit={(values) => {
                    journeyCreate({
                        ...values,
                        driver_id: (values?.driver_id as any)?.id,
                        user_id: (values?.user_id as any)?.id,
                    });
                }}
            >
                {({handleSubmit, values, errors, isValid, dirty, setFieldValue}) => (
                    <KeyboardAwareScrollView scrollEnabled={false}>
                        <View className="flex flex-col overflow-y-scroll">
                            <Field
                                component={Input}
                                name="start_location"
                                placeholder="Start Location"
                                iconName="home"
                                keyboardType="email-address"
                            />
                            <Field
                                iconName="home"
                                component={Input}
                                name="end_location"
                                placeholder="End Location"
                                keyboardType="email-address"
                            />
                            <View>
                                <Pressable
                                    onPress={() => setOpen(true)}
                                    className=" flex w-full h-12 mb-2 rounded-xl flex-row justify-center bg-gray-200 items-center space-x-3 px-5 py-1 "
                                >
                                    <Fontisto name="date" size={24} />

                                    <Text className="text-black w-full">
                                        {moment(values.date).format("DD MMMM YYYY")}
                                    </Text>
                                </Pressable>
                            </View>
                            {open && (
                                <DateTimePicker
                                    value={values.date!}
                                    mode="date"
                                    is24Hour={true}
                                    display="default"
                                    onChange={(event, value) => {
                                        setOpen(false);
                                        setFieldValue("date", value);
                                    }}
                                />
                            )}
                            {console.log(errors)}
                            <SelectBox
                                id={30}
                                labelStyle={{color: "black", fontSize: 24}}
                                label="Select Driver"
                                options={drivers?.map((driver) => ({item: driver.name, id: driver._id}))}
                                value={values.driver_id || ""}
                                onChange={(value: any) => {
                                    setFieldValue("driver_id", value);
                                }}
                                hideInputFilter={false}
                            />

                            <SelectBox
                                id={31}
                                labelStyle={{color: "black", fontSize: 24}}
                                label="Select User"
                                options={users?.map((driver) => ({item: driver.name, id: driver._id}))}
                                value={values.user_id || ""}
                                onChange={(value: any) => {
                                    setFieldValue("user_id", value);
                                }}
                                hideInputFilter={false}
                            />
                            <View className="mt-10" />
                            <Button
                                onPress={handleSubmit}
                                title="Create"
                                extraClass={cx({
                                    "opacity-50": !isValid || !dirty,
                                })}
                            />
                        </View>
                    </KeyboardAwareScrollView>
                )}
            </Formik>
        </View>
    );
};

CreateJourney.defaultProps = {};

const mapStateToProps = (state: AppState) => ({
    drivers: driversSelector(state),
    users: usersSelector(state),
});

const mapDispatchToProps = {
    getDriver: authGetDriverAction,
    getUser: authGetUserAction,
    journeyCreate: journeyCreateAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(CreateJourney));
