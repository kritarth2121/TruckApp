import React from "react";
import {View} from "react-native";
import Header from "../../shared-components/Header";

interface Props {}

const Notifications: React.FC<Props> = function (props) {
    return (
        <View className="h-full w-full">
            <Header />
        </View>
    );
};

Notifications.defaultProps = {};

export default React.memo(Notifications);
