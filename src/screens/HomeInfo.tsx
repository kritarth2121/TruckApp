import Button from "./shared-components/Button";
import React, {useEffect} from "react";
import {Pressable, View, Text, Image} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {localStorageService} from "../services/LocalStorageService";
import {connect} from "react-redux";
import {AppState} from "../redux/reducers";
import {authFetchMeAction} from "../redux/actions/auth.actions";
import {userSelector} from "../redux/selectors/auth.selectors";
import {User} from "../models/entities/User";

interface Props {
    user: User;
    fetchMe: any;
}

const HomeInfo: React.FC<Props> = function (props) {
    const {user, fetchMe} = props;
    const navigate = useNavigation();

    const getToken = async () => {
        const authToken = await localStorageService.getAuthToken();
        console.log(authToken, "authToken");
        if (!authToken) {
            navigate.navigate("login" as any);
        } else if (!user) {
            fetchMe();
        }
    };

    useEffect(() => {
        if (user) {
            navigate.navigate("app" as any);
        }
    }, [user]);

    return (
        <Pressable className="bg-blue-500  flex flex-col items-center justify-center h-full w-full">
            <View className="p-4 flex flex-col items-center justify-center h-full w-full">
                <Image
                    source={require("../../src/assets/images/icon.png")}
                    className="h-8 w-72 mx-auto"
                />
                <Image source={require("../../src/assets/images/Group127.png")} className="h-96 w-96 mx-auto" />
                <Text className="text-white text-3xl" style={{fontFamily: "Gilroy_Bold"}}>
                    The best app for shipping and delievey in your country
                </Text>
                <Button theme="dark" title="NEXT" onPress={() => getToken()} />
            </View>
        </Pressable>
    );
};

HomeInfo.defaultProps = {};

const mapStateToProps = (state: AppState) => ({
    user: userSelector(state),
});

const mapDispatchToProps = {
    fetchMe: authFetchMeAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(HomeInfo));
