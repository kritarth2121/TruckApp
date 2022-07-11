import {UserRole} from "./../../models/enums/UserRole";
import {User} from "../../models/entities/User";
import {baseApiService} from "./BaseApiService";

class AuthService {
    static getInstance(): AuthService {
        return new AuthService();
    }

    async login(data: {email: string; password: string}): Promise<{user: User; token: string}> {
        return baseApiService.post("/users/login", data, {extras: {useAuth: false}});
    }

    async create(data: any): Promise<{user: User}> {
        return baseApiService.post("/users/signup", data);
    }

    async fetchMe(): Promise<{user: User}> {
        return baseApiService.get("users/me");
    }

    async updateMe(data: Partial<User>): Promise<User> {
        return baseApiService.put("/me", data);
    }

    async changePassword(data: {old_password: string; password: string; password_confirmation: string}): Promise<any> {
        return baseApiService.put("/me/password", data);
    }

    async forgotPassword(data: {email: string}): Promise<any> {
        return baseApiService.post("/password/forgot", data);
    }

    async resetPassword(data: {email: string; password: string; code: any}): Promise<any> {
        return baseApiService.put("/password/reset/code", data);
    }

    async getUser(role: UserRole): Promise<{users: User[]}> {
        return baseApiService.get(`/users/get-user`, {
            params: {
                role,
            },
        });
    }
}

export const authService = AuthService.getInstance();
