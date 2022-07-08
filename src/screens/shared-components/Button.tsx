import React from "react";
import {Text, View, StyleSheet, Pressable} from "react-native";
import cx from "classnames";

interface Props {
    title: string;
    onPress?: any;
    theme?: "primary" | "secondary" | "dark";
    className?: string;
}

const themeClasses = {
    dark: "text-white bg-black hover:bg-gray-700 ",
    primary: "text-white bg-primary-600 border-primary-800 hover:bg-primary-800 active:bg-primary-800",
    secondary:
        "text-gray-500 border-gray-500 bg-white hover:text-white hover:bg-gray-500 hover:border-gray-500 active:bg-gray-500",
};

const Button: React.FC<Props> = function (props) {
    const {onPress, title = "Save", theme, className} = props;
    return (
        <Pressable style={styles.button} onPress={onPress} className={cx(themeClasses[theme!], "w-full", className)}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
};

Button.defaultProps = {
    theme: "primary",
};

export default React.memo(Button);

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: "black",
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: "bold",
        letterSpacing: 0.25,
        color: "white",
    },
});
