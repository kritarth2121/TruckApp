import React from "react";
import {Text, View, StyleSheet, Pressable} from "react-native";
import cx from "classnames";

interface Props {
    title: string;
    onPress?: any;
    theme?: "primary" | "secondary" | "dark";
    extraClass?: any;
}

const themeClasses = {
    dark: " bg-black hover:bg-gray-700 ",
    primary: " bg-primary-500  ",
    secondary:
        "text-gray-500 border-gray-500 bg-white hover:text-white hover:bg-gray-500 hover:border-gray-500 active:bg-gray-500",
};

const Button: React.FC<Props> = function (props) {
    const {onPress, title = "Save", theme, extraClass} = props;
    return (
        <Pressable
            onPress={onPress}
            className={cx(
                themeClasses[theme!],
                "h-14 rounded-xl text-white w-full items-center justify-center ",
                extraClass
            )}
        >
            <Text className="text-white font-gilroy text-xl">{title}</Text>
        </Pressable>
    );
};

Button.defaultProps = {
    theme: "primary",
};

export default React.memo(Button);
