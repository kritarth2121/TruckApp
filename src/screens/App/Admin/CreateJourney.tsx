import React from "react";
import {View, Text} from "react-native";

interface Props {}

const CreateJourney: React.FC<Props> = function (props) {
    return (
        <View className="">
            <Text></Text>
        </View>
    );
};

CreateJourney.defaultProps = {};

export default React.memo(CreateJourney);
