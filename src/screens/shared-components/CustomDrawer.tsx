import React from "react";
import {View, Text, ImageBackground, Image, TouchableOpacity} from "react-native";
import {DrawerContentScrollView, DrawerItem, DrawerItemList} from "@react-navigation/drawer";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const CustomDrawer = (props: any) => {
    return (
        <View style={{flex: 1}} className="bg-primary-500">
            <DrawerContentScrollView {...props}>
                <View className="w-full pl-3 pt-20 flex flex-col justify-start">
                    <Image
                        className="rounded-full h-20 w-20"
                        source={{
                            uri: "https://reactnative.dev/img/tiny_logo.png",
                        }}
                    />
                    <Text
                        style={{
                            color: "#fff",
                            fontSize: 18,
                            marginBottom: 5,
                        }}
                    >
                        John Doe
                    </Text>
                    <View style={{flexDirection: "row"}}>
                        <Text className="text-gray-400">Driver</Text>
                    </View>
                </View>

                <View>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>

            <View style={{padding: 20}}>
                <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
                    <View className="flex flex-row space-x-3 items-center">
                        <FontAwesome name="info-circle" color="#fff" size={25} />
                        <Text className="text-white">Help</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
                    <View className="flex flex-row space-x-3 items-center">
                        <FontAwesome name="support" color="#fff" size={25} />
                        <Text className="text-white">Support</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{padding: 20}}>
                <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
                    <View className="flex flex-row space-x-3 items-center">
                        <Ionicons name="exit-outline" color="#fff" size={25} />
                        <Text className="text-white">Log Out</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default CustomDrawer;
