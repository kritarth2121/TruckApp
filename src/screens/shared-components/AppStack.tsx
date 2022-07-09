import React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";
import Ionicons from "react-native-vector-icons/Ionicons";
import CustomDrawer from "./CustomDrawer";
import Home from "../App/Home";
import {View} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const Drawer = createDrawerNavigator();

const AppStack = () => {
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

export default AppStack;
