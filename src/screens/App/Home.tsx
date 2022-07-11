import React, {useState} from "react";
import {View, Text, Pressable, FlatList} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import cx from "classnames";
import tw from "twrnc";
import {Picker} from "@react-native-picker/picker";
import Card from "./components/Card";
import {localStorageService} from "../../services/LocalStorageService";
import {DrawerActions, useNavigation} from "@react-navigation/native";
import {Journey} from "src/models/entities/Journey";

interface Props {
    data?: Journey[];
}

const Home: React.FC<Props> = function (props) {
    const [selectedLanguage, setSelectedLanguage] = useState();
    const authToken = localStorageService.getAuthToken();
    console.log(authToken);
    const {data} = props;
    const navigation = useNavigation();
    return (
        <View className="bg-white h-full w-full pt-10 px-3">
            <View className="flex flex-row justify-between">
                <Icon
                    name="menu"
                    size={30}
                    color="#000"
                    onPress={() => navigation.dispatch(DrawerActions.openDrawer)}
                />
                <Text></Text>
                <FontAwesome name="bell" size={25} color="#1A85E7" />
            </View>
            <View className="mt-10">
                <Text className="text-4xl">
                    The best <Text className="text-primary-500">shipping</Text> and{" "}
                    <Text className="text-primary-500">delivery</Text> in your country
                </Text>
            </View>
            <View className="w-full flex flex-row justify-between">
                <Picker
                    style={{width: 200, height: 44}}
                    placeholder="Select status"
                    selectedValue={selectedLanguage}
                    onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}
                >
                    <Picker.Item label="New" value="new" />
                    <Picker.Item label="Pending" value="pending" />
                    <Picker.Item label="Completed" value="completed" />
                </Picker>
                <Pressable className={cx("h-9 rounded-xl bg-primary-500 text-white w-20 items-center justify-center ")}>
                    <Text className="text-white font-bold text-sm">View All</Text>
                </Pressable>
            </View>
            <FlatList data={data} numColumns={2} renderItem={(item) => <Card />} />
        </View>
    );
};

Home.defaultProps = {};

export default React.memo(Home);
