import {DrawerActions, useNavigation} from "@react-navigation/native";
import React from "react";
import {View} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";

interface Props {}

const Header: React.FC<Props> = function (props) {
    const navigation = useNavigation();

    return (
        <View className="flex flex-row justify-between">
            <Icon name="menu" size={30} color="#000" onPress={() => navigation.dispatch(DrawerActions.openDrawer)} />
            <FontAwesome name="bell" size={25} color="#1A85E7" />
        </View>
    );
};

Header.defaultProps = {};

export default React.memo(Header);
