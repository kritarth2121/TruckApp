import moment from "moment";
import React from "react";
import {View, Image, Text} from "react-native";

interface Props {}

const Card: React.FC<Props> = function (props) {
    return (
        <View className="w-1/2 p-3 h-full">
            <Image
                source={{
                    uri: "https://reactnative.dev/img/tiny_logo.png",
                }}
                className="w-full h-24"
            />
            <View className="flex flex-row justify-between">
                <Text className="text-gray-500  text-xs">10 km</Text>
                <Text className="text-gray-500  text-xs">2 hr 45min</Text>
            </View>
            <View className="flex flex-row ">
                <Text className="  text-base font-bold">Kanpur to Prayagraj</Text>
            </View>
            <View className="flex flex-row justify-between">
                <Text className="text-gray-500  text-xs">{moment().format("DD MMMM YYYY")}</Text>
            </View>
        </View>
    );
};

Card.defaultProps = {};

export default React.memo(Card);
