import {ToastAndroid, Platform} from "react-native";

// function notifyMessage(msg: string) {
//     if (Platform.OS === "android") {
//         ToastAndroid.show(msg, ToastAndroid.SHORT);
//     } else {
//         AlertIOS.alert(msg);
//     }
// }
class ToastService {
    private static _instance: ToastService;

    static getInstance(): ToastService {
        if (!this._instance) {
            this._instance = new ToastService();
        }
        return this._instance;
    }

    showError(content: string) {
        // ToastAndroid.show(content, ToastAndroid.SHORT);
    }

    showInfo(content: string) {
        // ToastAndroid.show(content, ToastAndroid.SHORT);
    }

    showSuccess(content: string) {
        // ToastAndroid.show(content, ToastAndroid.SHORT);
    }

    showWarning(content: string) {
        // ToastAndroid.show(content, ToastAndroid.SHORT);
    }
}

export const toastService = ToastService.getInstance();
