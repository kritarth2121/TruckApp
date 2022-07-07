import React from "react";
import {Pressable, View, Text} from "react-native";

interface Props {}

const Login: React.FC<Props> = function (props) {
    return (
        <Pressable className="bg-blue-500 h-full w-full">
            <View>Open up App.js to start working on your app!</View>
        </Pressable>
    );
};

Login.defaultProps = {};

export default React.memo(Login);
