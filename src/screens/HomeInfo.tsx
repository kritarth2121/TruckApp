import Button from "./shared-components/Button";
import React from "react";
import {Pressable, View, Text, Image} from "react-native";
import {useNavigation} from "@react-navigation/native";

interface Props {}

const HomeInfo: React.FC<Props> = function (props) {
    const navigation = useNavigation();
    return (
        <Pressable className="bg-blue-500  flex flex-col items-center justify-center h-full w-full">
            <View className="p-4 flex flex-col items-center justify-center h-full w-full">
                <Image source={require("../../src/assets/images/Group 127.png")} className="h-96 w-96 mx-auto" />
                <Text className="text-white text-3xl font-bold ">
                    The best app for shipping and delievey in your country
                </Text>
                <Button theme="dark" title="NEXT" onPress={() => navigation.navigate("sign-up" as any)} />
            </View>
        </Pressable>
    );
};

HomeInfo.defaultProps = {};

export default React.memo(HomeInfo);
