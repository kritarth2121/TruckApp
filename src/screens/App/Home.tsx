import React, {useState} from "react";
import {View, Text, Pressable, FlatList} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import SelectDropdown from "react-native-select-dropdown";
import RNPickerSelect from "react-native-picker-select";
import Button from "../shared-components/Button";
import cx from "classnames";
import tw from "twrnc";
import {Picker} from "@react-native-picker/picker";
import Card from "./components/Card";

interface Props {
    navigation: any;
}

const Home: React.FC<Props> = function ({navigation}) {
    const countries = ["Egypt", "Canada", "Australia", "Ireland"];
    const [selectedLanguage, setSelectedLanguage] = useState();

    return (
        <View className="bg-white h-full w-full pt-10 px-3">
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
            <FlatList data={[1, 2, 3, 4, 6, 2, 3, 4, 6, 2, 3, 4, 6]} numColumns={2} renderItem={() => <Card />} />
        </View>
    );
};

Home.defaultProps = {};

export default React.memo(Home);
