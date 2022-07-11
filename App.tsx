import {StatusBar} from "expo-status-bar";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {Provider as ReduxProvider} from "react-redux";
import {TailwindProvider} from "tailwindcss-react-native";
import useCachedResources from "./src/hooks/useCachedResources";
import useColorScheme from "./src/hooks/useColorScheme";
import Navigation from "./src/screens/navigation";
import {store} from "./src/redux/saga/sagas";
import "react-native-gesture-handler";
import {View, Text, ImageBackground, Image, TouchableOpacity} from "react-native";
import * as Font from "expo-font";
import {useEffect} from "react";
import {
    setCustomView,
    setCustomTextInput,
    setCustomText,
    setCustomImage,
    setCustomTouchableOpacity,
} from "react-native-global-props";

export default function App() {
    const isLoadingComplete = useCachedResources();
    const colorScheme = useColorScheme();
    const customTextInputProps = {
        style: {
            fontFamily: "Gilroy",
        },
    };
    const customTextProps = {
        style: {
            fontFamily: "Gilroy",
        },
    };

    useEffect(() => {
        (async () =>
            await Font.loadAsync({
                Gilroy: require("./src/assets/fonts/Gilroy-Black.ttf"),
            }))();
    }, []);
    if (!isLoadingComplete) {
        return null;
    } else {
        setCustomTextInput(customTextInputProps);
        setCustomText(customTextProps);
        return (
            <SafeAreaProvider>
                <ReduxProvider store={store}>
                    <TailwindProvider>
                        <Navigation />
                        <StatusBar />
                    </TailwindProvider>
                </ReduxProvider>
            </SafeAreaProvider>
        );
    }
}
