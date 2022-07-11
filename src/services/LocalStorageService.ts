import AsyncStorage from "@react-native-async-storage/async-storage";

export const AUTH_TOKEN = "authToken";

export class LocalStorageService {
    private static _instance: LocalStorageService;

    static getInstance(): LocalStorageService {
        if (!this._instance) {
            this._instance = new LocalStorageService();
        }

        return this._instance;
    }

    async setLocalStorageValue(key: string, value: string): Promise<void> {
        await AsyncStorage?.setItem(key, value);
    }

    async getLocalStorageValue(key: string): Promise<string | null> {
        return await AsyncStorage?.getItem(key);
    }

    removeLocalStorageValue(key: string): void {
        if (typeof AsyncStorage !== "undefined") {
            AsyncStorage?.removeItem(key);
        }
    }

    setSessionStorageValue(key: string, value: string): void {
        if (typeof sessionStorage !== "undefined") {
            sessionStorage?.setItem(key, value);
        }
    }

    getSessionStorageValue(key: string): string | null {
        if (typeof sessionStorage !== "undefined") {
            return sessionStorage?.getItem(key);
        }
        return null;
    }

    removeSessionStorageValue(key: string): void {
        if (typeof sessionStorage !== "undefined") {
            sessionStorage?.removeItem(key);
        }
    }

    setAuthToken(token: string): void {
        this.setLocalStorageValue(AUTH_TOKEN, token);
    }

    async getAuthToken(): Promise<string | null> {
        return await this.getLocalStorageValue(AUTH_TOKEN);
    }

    removeAuthToken(): void {
        this.removeLocalStorageValue(AUTH_TOKEN);
    }
}

export const localStorageService = LocalStorageService.getInstance();
