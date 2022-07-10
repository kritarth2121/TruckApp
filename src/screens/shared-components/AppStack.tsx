import React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";
import Ionicons from "react-native-vector-icons/Ionicons";
import CustomDrawer from "./CustomDrawer";
import Home from "../App/Home";
import {View} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import CreateJourney from "../App/Admin/CreateJourney";
import {connect} from "react-redux";
import {userSelector} from "../../redux/selectors/auth.selectors";
import {AppState} from "../../redux/reducers";
import {User, UserRole} from "../../models/entities/User";

const Drawer = createDrawerNavigator();

interface Props {
    user: User;
}

const AppStack = (props: Props) => {
    const {user} = props;
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawer {...props} />}
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
            {user.role === UserRole.ADMIN && (
                <Drawer.Screen
                    name="CreateJourney"
                    component={CreateJourney}
                    options={{
                        drawerIcon: ({color}) => <FontAwesome name="home" size={22} color={color} />,
                    }}
                />
            )}
            <Drawer.Screen
                name="Home"
                component={Home}
                options={{
                    drawerIcon: ({color}) => <FontAwesome name="home" size={22} color={color} />,
                }}
            />
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
    );
};

const mapStateToProps = (state: AppState) => ({
    user: userSelector(state),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(AppStack));
