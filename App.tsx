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
import React from "react";

export default function App() {
    const isLoadingComplete = useCachedResources();
    const colorScheme = useColorScheme();
    const customTextInputProps = {
        style: {
            fontFamily: "Gilroy_Medium",
        },
    };
    const customTextProps = {
        style: {
            fontFamily: "Gilroy_Medium",
        },
    };

    useEffect(() => {
        (async () =>
            await Font.loadAsync({
                Gilroy: require("./src/assets/fonts/Gilroy-Regular.ttf"),
                Gilroy_Black: require("./src/assets/fonts/Gilroy-Black.ttf"),
                Gilroy_Bold: require("./src/assets/fonts/Gilroy-Bold.ttf"),
                Gilroy_Extrabold: require("./src/assets/fonts/Gilroy-ExtraBold.ttf"),
                Gilroy_Medium: require("./src/assets/fonts/Gilroy-Medium.ttf"),
                Gilroy_SemiBold: require("./src/assets/fonts/Gilroy-SemiBold.ttf"),
                Gilroy_Thin: require("./src/assets/fonts/Gilroy-Thin.ttf"),
                Gilroy_UltraLight: require("./src/assets/fonts/Gilroy-UltraLight.ttf"),
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
