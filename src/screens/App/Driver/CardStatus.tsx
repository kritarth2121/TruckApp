import {useNavigation, useRoute} from "@react-navigation/native";
import React from "react";
import {View, Text, Image, Dimensions} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Header from "../../shared-components/Header";
import Button from "../../shared-components/Button";
import {JourneyStatus} from "../../../models/enums/JourneyStatus";
import cx from "classnames";
import {connect} from "react-redux";
import {journeyUpdateStatusAction} from "../../../redux/actions/journey.actions";
import {AppState} from "../../../redux/reducers";
import {journeyDriverCollection} from "../../../redux/selectors/journey.selector";
import {Journey} from "../../../models/entities/Journey";

interface Props {
    journeyCollection: {[id: string]: Journey};
    updateStatus: any;
}

const CardStatus: React.FC<Props> = function (props) {
    const navigation = useNavigation();
    const route = useRoute();
    const {items} = route.params as any;
    const height = Dimensions.get("window").height || 100;
    console.log(route, height);
    const {journeyCollection, updateStatus} = props;
    const journey = journeyCollection[items._id];
    const finalStaus = journey?.status === JourneyStatus.NEW ? JourneyStatus.PENDING : JourneyStatus.COMPLETED;

    return (
        <View className="h-full w-full">
            <Header />
            <Image
                source={require("../../../../src/assets/images/Map.png")}
                className="w-full "
                style={{height: height - 100}}
            />
            <View className=" bg-white rounded-t-xl absolute w-full h-48 bottom-0 pt-5 px-4 ">
                {journey?.status !== JourneyStatus.COMPLETED ? (
                    <Button
                        onPress={() => updateStatus({id: journey?._id, status: finalStaus})}
                        title={journey?.status === JourneyStatus.NEW ? "Start Journey" : "End Journey"}
                    />
                ) : (
                    <Button title="Completed" extraClass={cx("opacity-50")} />
                )}
                <View className="flex flex-col mt-3">
                    <View className="flex flex-row space-x-3">
                        <Ionicons name="location" color="#1A85E7" size={25} />
                        <View>
                            <Text className="text-black text-xl" style={{fontFamily: "Gilroy_Bold"}}>
                                Pick Up
                            </Text>
                            <Text className="text-gray-600" style={{fontFamily: "Gilroy_Medium"}}>
                                {journey?.start_location}
                            </Text>
                        </View>
                    </View>
                    <View className="flex flex-row space-x-3">
                        <FontAwesome name="circle" color="#1A85E7" size={25} />
                        <View>
                            <Text className="text-black text-xl" style={{fontFamily: "Gilroy_Bold"}}>
                                Drop off
                            </Text>
                            <Text className="text-gray-600" style={{fontFamily: "Gilroy_Medium"}}>
                                {journey?.end_location}{" "}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

CardStatus.defaultProps = {};

const mapStateToProps = (state: AppState) => ({
    journeyCollection: journeyDriverCollection(state),
});

const mapDispatchToProps = {
    updateStatus: journeyUpdateStatusAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(CardStatus));
