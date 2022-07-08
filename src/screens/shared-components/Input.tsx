import React, {useState} from "react";
import {Text, TextInput, StyleSheet, View} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import cx from "classnames";

const CustomInput = (props: any) => {
    const {
        field: {name, onBlur, onChange, value},
        form: {errors, touched, setFieldTouched},
        iconName,
        ...inputProps
    } = props;

    const hasError = errors[name] && touched[name];
    const [isActive, setActive] = useState(false);

    return (
        <View className=" rounded-lg w-full  flex flex-col my-2 justify-start">
            <View
                className={cx(
                    "flex w-full   rounded-xl flex-row justify-center items-center space-x-3 px-5 py-1",
                    isActive ? "bg-blue-200" : "bg-gray-200"
                )}
            >
                <Icon name={iconName} size={24} color={isActive ? "#1A85E7" : "#000000"} />
                <TextInput
                    className={cx(
                        " h-10 border-0   outline-0 focus:border-0 text-xl w-full",
                        isActive ? "text-primary-500" : "text-black"
                    )}
                    value={value}
                    style={{outline: "none"}}
                    onChangeText={(text) => onChange(name)(text)}
                    onBlur={() => {
                        setFieldTouched(name);
                        onBlur(name);
                        setActive(false);
                    }}
                    onFocus={() => setActive(true)}
                    {...inputProps}
                />
            </View>
            {hasError && <Text className="text-red-500 text-sm">{errors[name]}</Text>}
        </View>
    );
};

export default CustomInput;
