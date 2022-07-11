import React, {useEffect, useState} from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";
import Ionicons from "react-native-vector-icons/Ionicons";
import CustomDrawer from "./CustomDrawer";
import Home from "../App/Home";
import {ActivityIndicator, View} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import CreateJourney from "../App/Admin/CreateJourney";
import {connect} from "react-redux";
import {meLoading, userSelector} from "../../redux/selectors/auth.selectors";
import {AppState} from "../../redux/reducers";
import {User, UserRole} from "../../models/entities/User";
import {journeyFetchAction, journeyFetchDriverAction} from "../../redux/actions/journey.actions";
import {journeyList, journeyDriverList} from "../../redux/selectors/journey.selector";
import {Journey} from "../../models/entities/Journey";
import {localStorageService} from "../../services/LocalStorageService";
import {useNavigation} from "@react-navigation/native";
import {authFetchMeAction} from "../../redux/actions/auth.actions";
import {setAutoFreeze} from "immer";

const Drawer = createDrawerNavigator();

interface Props {
    user: User;
    driverJourneyList?: Journey[];
    list?: Journey[];
    fetchAll: any;
    fetchDriver: any;
    fetchMe: any;
    loading?: boolean;
}

const AppStack = (props: Props) => {
    const {user, list, fetchDriver, fetchAll, loading, driverJourneyList, fetchMe} = props;

    useEffect(() => {
        if (user) {
            fetchDriver();
            fetchAll();
        }
    }, [user]);

    const [loggedin, setLoggedIn] = useState(true);

    useEffect(() => {
        getToken();
    }, []);

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

    return (
        <>
            {!user && loading ? (
                <View className="flex items-center h-full justify-center">
                    <ActivityIndicator size="large" color="#1A85E7" />
                </View>
            ) : (
                <Drawer.Navigator
                    drawerContent={(props) => <CustomDrawer setAuthToken={setLoggedIn} {...props} />}
                    screenOptions={{
                        headerShown: false,
                        drawerActiveTintColor: "#fff",
                        drawerInactiveTintColor: "#fff",
                        drawerLabelStyle: {
                            marginLeft: -25,
                            fontSize: 15,
                        },
                    }}
                >
                    {user?.role === UserRole.ADMIN ? (
                        <>
                            <Drawer.Screen
                                name="CreateJourney"
                                component={CreateJourney}
                                options={{
                                    drawerIcon: ({color}) => <Ionicons name="create" size={22} color={color} />,
                                }}
                            />
                            <Drawer.Screen
                                name="All-Journeys"
                                options={{
                                    drawerIcon: ({color}) => <FontAwesome name="group" size={22} color={color} />,
                                }}
                            >
                                {(props) => <Home type={UserRole.ADMIN} />}
                            </Drawer.Screen>
                        </>
                    ) : (
                        <Drawer.Screen
                            name="Journeys"
                            options={{
                                drawerIcon: ({color}) => <FontAwesome name="home" size={22} color={color} />,
                            }}
                        >
                            {(props) => <Home type="driver" />}
                        </Drawer.Screen>
                    )}
                    <Drawer.Screen
                        name="History"
                        component={Home}
                        options={{
                            drawerIcon: ({color}) => <FontAwesome name="history" size={22} color={color} />,
                        }}
                    />
                    <Drawer.Screen
                        name="Notifications"
                        component={Home}
                        options={{
                            drawerIcon: ({color}) => <MaterialIcons name="verified" size={22} color={color} />,
                        }}
                    />
                </Drawer.Navigator>
            )}
        </>
    );
};

const mapStateToProps = (state: AppState) => ({
    user: userSelector(state),
    list: journeyList(state),
    loading: meLoading(state),
    driverJourneyList: journeyDriverList(state),
});

const mapDispatchToProps = {
    fetchAll: journeyFetchAction,
    fetchDriver: journeyFetchDriverAction,
    fetchMe: authFetchMeAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(AppStack));
