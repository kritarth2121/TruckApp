import React from "react";
import {View, Text} from "react-native";
import Header from "../../shared-components/Header";


interface Props {}

const CardStatus: React.FC<Props> = function (props) {
    return (
        <View className="">
            <Header/>
            <Text></Text>
        </View>
    );
};

CardStatus.defaultProps = {};

export default React.memo(CardStatus);
