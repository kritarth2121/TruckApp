import {NavigationContainer, DefaultTheme, DarkTheme} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import AppStack from "../shared-components/AppStack";
import Login from "../Auth/Login";
import SignIn from "../Auth/SignIn";
import HomeInfo from "../HomeInfo";
import {View, Text} from "react-native";
import CreateJourney from "../App/Admin/CreateJourney";

export default function Navigation() {
    return (
        <NavigationContainer>
            <RootNavigator />
        </NavigationContainer>
    );
}

const Stack = createNativeStackNavigator();

function RootNavigator() {
    return (
        <Stack.Navigator initialRouteName="/">
            <Stack.Screen name="/" component={CreateJourney} options={{headerShown: false}} />
            <Stack.Screen name="sign-up" component={SignIn} options={{headerShown: false}} />
            <Stack.Screen name="login" component={Login} options={{headerShown: false}} />
            <Stack.Screen name="app" component={AppStack} options={{headerShown: false}} />
        </Stack.Navigator>
    );
}
