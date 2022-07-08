import {NavigationContainer, DefaultTheme, DarkTheme} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Login from "../Auth/Login";
import SignIn from "../Auth/SignIn";
import HomeInfo from "../HomeInfo";

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
            <Stack.Screen name="/" component={HomeInfo} options={{headerShown: false}} />
            <Stack.Screen name="sign-in" component={SignIn} options={{headerShown: false}} />
            <Stack.Screen name="login" component={Login} options={{headerShown: false}} />
        </Stack.Navigator>
    );
}
