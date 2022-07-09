import React from "react";
import {View, Text} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";

interface Props {
    navigation: any;
}

const Home: React.FC<Props> = function ({navigation}) {
    return (
        <View className="bg-white h-full w-full pt-10 pl-4">
            <View className="flex flex-row justify-between">
                <Icon name="menu" size={30} color="#000" onPress={() => navigation.openDrawer()} />
                <Text></Text>
                <FontAwesome name="bell" size={25} color="#1A85E7" onPress={() => navigation.openDrawer()} />
            </View>
            <View className="mt-10">
                <Text className="text-4xl">
                    The best <Text className="text-primary-500">shipping</Text> and{" "}
                    <Text className="text-primary-500">delivery</Text> in your country
                </Text>
            </View>
        </View>
    );
};

Home.defaultProps = {};

export default React.memo(Home);
