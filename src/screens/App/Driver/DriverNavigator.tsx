import {createNativeStackNavigator} from "@react-navigation/native-stack";
import CardStatus from "./CardStatus";
import Home from "./Home";

const Stack = createNativeStackNavigator();

export const DriverNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="all">
            <Stack.Screen name="all" options={{headerShown: false}}>
                {(props) => <Home type="driver" />}
            </Stack.Screen>
            <Stack.Screen name="card-status" component={CardStatus} options={{headerShown: false}} />
        </Stack.Navigator>
    );
};
