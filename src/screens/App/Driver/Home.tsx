import React, {useEffect, useMemo, useState} from "react";
import {View, Text, Pressable, FlatList} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import cx from "classnames";
import tw from "twrnc";
import {Picker} from "@react-native-picker/picker";
import Card from "../components/Card";
import {localStorageService} from "../../../services/LocalStorageService";
import {DrawerActions, useNavigation} from "@react-navigation/native";
import Header from "../../shared-components/Header";
import {connect} from "react-redux";
import {journeyFetchAction, journeyFetchDriverAction} from "../../../redux/actions/journey.actions";
import {journeyList, journeyDriverList} from "../../../redux/selectors/journey.selector";
import {AppState} from "../../../redux/reducers";
import {UserRole} from "../../../models/enums/UserRole";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import CardStatus from "./CardStatus";
import {Journey} from "../../../models/entities/Journey";

interface Props {
    type: string;
    fetchAll: any;
    fetchDriver: any;
    list?: Journey[];
    driverJourneyList?: Journey[];
}
const Stack = createNativeStackNavigator();

const Home: React.FC<Props> = function (props) {
    const [selectedStatus, setSelectedStatus] = useState("");

    const {type, driverJourneyList, list, fetchAll, fetchDriver} = props;
    const getValue = (itemValue: string) => {
        if (type === UserRole.ADMIN) {
            fetchAll(itemValue);
        } else {
            fetchDriver(itemValue);
        }
    };
    useEffect(() => {
        getValue("");
    }, []);

    return (
        <View className="bg-white h-full w-full  px-2">
            <Header />
            <View className="mt-10">
                <Text className="text-4xl " style={{fontFamily: "Gilroy_Bold"}}>
                    The best{" "}
                    <Text className="text-primary-500 " style={{fontFamily: "Gilroy_Bold"}}>
                        shipping
                    </Text>{" "}
                    and{" "}
                    <Text className="text-primary-500 " style={{fontFamily: "Gilroy_Bold"}}>
                        delivery
                    </Text>{" "}
                    in your country
                </Text>
            </View>
            <View className="w-full flex flex-row justify-between">
                <Picker
                    style={{width: 200, height: 44}}
                    placeholder="Select status"
                    selectedValue={selectedStatus}
                    onValueChange={(itemValue, itemIndex) => {
                        setSelectedStatus(itemValue);
                        getValue(itemValue);
                    }}
                >
                    <Picker.Item label="All" value="" />
                    <Picker.Item label="New" value="new" />
                    <Picker.Item label="Pending" value="pending" />
                    <Picker.Item label="Completed" value="completed" />
                </Picker>
                <Pressable
                    className={cx("h-9 rounded-xl bg-primary-500 text-white w-20 items-center justify-center ")}
                    onPress={() => {
                        setSelectedStatus("");
                        getValue("");
                    }}
                >
                    <Text className="text-white  text-sm">View All</Text>
                </Pressable>
            </View>
            <FlatList
                data={type === UserRole.ADMIN ? list : driverJourneyList}
                numColumns={2}
                renderItem={(item) => <Card item={item.item} />}
            />
        </View>
    );
};

Home.defaultProps = {};

const mapStateToProps = (state: AppState) => ({
    list: journeyList(state),
    driverJourneyList: journeyDriverList(state),
});

const mapDispatchToProps = {
    fetchAll: journeyFetchAction,
    fetchDriver: journeyFetchDriverAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Home));
