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

interface Props {}

const CreateJourney: React.FC<Props> = function (props) {
    const journeyValidationSchema = yup.object().shape({
        start_location: yup.string().min(10).required("Start Location is required"),
        end_location: yup.string().min(10).required("Start Location is required"),
        date: yup.date().typeError("Please enter valid Date").required("Date is required"),
        driver_id: yup.number().required("please choose Driver"),
        user_id: yup.number().required("please choose Driver"),
    });
    const [open, setOpen] = useState(false);

    const K_OPTIONS = [
        {
            item: "Juventus",
            id: "JUVE",
        },
        {
            item: "Real Madrid",
            id: "RM",
        },
        {
            item: "Barcelona",
            id: "BR",
        },
        {
            item: "PSG",
            id: "PSG",
        },
        {
            item: "FC Bayern Munich",
            id: "FBM",
        },
        {
            item: "Manchester United FC",
            id: "MUN",
        },
        {
            item: "Manchester City FC",
            id: "MCI",
        },
        {
            item: "Everton FC",
            id: "EVE",
        },
        {
            item: "Tottenham Hotspur FC",
            id: "TOT",
        },
        {
            item: "Chelsea FC",
            id: "CHE",
        },
        {
            item: "Liverpool FC",
            id: "LIV",
        },
        {
            item: "Arsenal FC",
            id: "ARS",
        },

        {
            item: "Leicester City FC",
            id: "LEI",
        },
    ];

    return (
        <View className="bg-white h-full w-full space-y-3   p-3">
            <Text className="text-black font-bold mt-20 mb-10 text-5xl">Create Journey</Text>
            <Formik
                initialValues={{
                    start_location: "",
                    end_location: "",
                    date: new Date(),
                    driver_id: "",
                    user_id: "",
                }}
                validationSchema={journeyValidationSchema}
                onSubmit={(values) => {}}
            >
                {({handleSubmit, values, isValid, dirty, setFieldValue}) => (
                    <KeyboardAwareScrollView scrollEnabled={false}>
                        <View className="flex flex-col overflow-y-scroll">
                            <Field
                                component={Input}
                                name="start_location"
                                placeholder="Start Location"
                                iconName="location"
                                keyboardType="email-address"
                            />
                            <Field
                                iconName="end_location"
                                component={Input}
                                name="end_location"
                                placeholder="End Location"
                                keyboardType="numeric"
                            />
                            <View>
                                <Pressable
                                    onPress={() => setOpen(true)}
                                    className=" flex w-full h-12 mb-2 rounded-xl flex-row justify-center bg-gray-200 items-center space-x-3 px-5 py-1 "
                                >
                                    <Icon name="date" size={24} />

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
                            <ScrollView>
                                <SelectBox
                                    id={30}
                                    labelStyle={{color: "black", fontSize: 24}}
                                    label="Select Driver"
                                    options={K_OPTIONS}
                                    value={values.driver_id}
                                    onChange={(value: any) => {
                                        setFieldValue("driver_id", value);
                                    }}
                                    hideInputFilter={false}
                                />
                            </ScrollView>

                            <SelectBox
                                id={31}
                                labelStyle={{color: "black", fontSize: 24}}
                                label="Select User"
                                options={K_OPTIONS}
                                value={values.user_id}
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

export default React.memo(CreateJourney);
