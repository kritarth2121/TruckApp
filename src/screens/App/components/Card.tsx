import moment from "moment";
import React from "react";
import {View, Image, Text} from "react-native";
import {Journey} from "../../../models/entities/Journey";

interface Props {
    item: Journey;
}

const Card: React.FC<Props> = function (props) {
    const {item} = props;
    console.log(item);
    return (
        <View className="w-1/2 p-3 h-full">
            <Image
                source={{
                    uri: "https://picsum.photos/200/300",
                }}
                className="w-full h-24"
            />
            <View className="flex flex-row justify-between">
                <Text className="text-gray-500  text-xs">10 km</Text>
                <Text className="text-gray-500  text-xs">2 hr 45min</Text>
            </View>
            <View className="flex flex-row ">
                <Text className="  text-base ">
                    {item.start_location} to {item.end_location}
                </Text>
            </View>
            <View className="flex flex-row justify-between">
                <Text className="text-gray-500  text-xs">{moment(item.date).format("DD MMMM YYYY")}</Text>
            </View>
        </View>
    );
};

Card.defaultProps = {};

export default React.memo(Card);
