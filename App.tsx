import {StatusBar} from "expo-status-bar";
import React from "react";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {Provider as ReduxProvider} from "react-redux";
import {TailwindProvider} from "tailwindcss-react-native";
import useCachedResources from "./src/hooks/useCachedResources";
import useColorScheme from "./src/hooks/useColorScheme";
import Navigation from "./src/screens/navigation";
import {store} from "./src/redux/saga/saga";
import "react-native-gesture-handler";

export default function App() {
    const isLoadingComplete = useCachedResources();
    const colorScheme = useColorScheme();

    if (!isLoadingComplete) {
        return null;
    } else {
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
