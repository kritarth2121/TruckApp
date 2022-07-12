import {DrawerActions, useNavigation} from "@react-navigation/native";
import React from "react";
import {View, Text} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {connect} from "react-redux";
import {User} from "../../models/entities/User";
import {AppState} from "../../redux/reducers";
import {userSelector} from "../../redux/selectors/auth.selectors";

interface Props {
    user?: User;
}

const Header: React.FC<Props> = function (props) {
    const navigation = useNavigation();
    const {user} = props;

    return (
        <View className="flex flex-row justify-between mt-10">
            <Icon name="menu" size={30} color="#000" onPress={() => navigation.dispatch(DrawerActions.openDrawer)} />
            <View className="flex flex-col w-9/12">
                <Text className="w-full">{user?.name}</Text>
                <Text className="w-full text-gray-400">A2 Location</Text>
            </View>
            <FontAwesome name="bell" size={25} color="#1A85E7" />
        </View>
    );
};

Header.defaultProps = {};

const mapStateToProps = (state: AppState) => ({
    user: userSelector(state),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Header));
