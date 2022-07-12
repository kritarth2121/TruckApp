import React from "react";
import {View} from "react-native";
import Header from "../../shared-components/Header";

interface Props {}

const History: React.FC<Props> = function (props) {
    return (
        <View className="h-full w-full">
            <Header />
        </View>
    );
};

History.defaultProps = {};

export default React.memo(History);
