import Toast from "react-native-toast-message";

class ToastService {
    private static _instance: ToastService;

    static getInstance(): ToastService {
        if (!this._instance) {
            this._instance = new ToastService();
        }
        return this._instance;
    }

    showError(content: string) {
        Toast.show({
            type: "error",
            text1: "Hello",
            text2: "This is some something 👋",
        });
    }

    showInfo(content: string) {
        Toast.show({
            type: "info",
            text1: content,
        });
    }

    showSuccess(content: string) {
        Toast.show({
            type: "success",
            text1: content,
        });
    }

    showWarning(content: string) {
        Toast.show({
            type: "success",
            text1: content,
        });
    }

    // dismiss(toastRef: any) {
    //   toast.dismiss(toastRef);
    // }
}

export const toastService = ToastService.getInstance();
