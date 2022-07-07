export enum AuthActionType {
    LOGIN = "auth/login",
    LOGIN_COMPLETED = "auth/login/completed",
    LOGIN_ERROR = "auth/login/error",
    LOGOUT = "auth/logout",

    FETCH_ME = "auth/fetch/me",
    FETCH_ME_COMPLETED = "auth/fetch/me/completed",
    FETCH_ME_ERROR = "auth/fetch/me/error",

    UPDATE_ME = "auth/update/me",
    UPDATE_ME_COMPLETED = "auth/update/me/completed",
    UPDATE_ME_ERROR = "auth/update/me/error",

    CHANGE_PASSWORD = "auth/change/password",
    CHANGE_PASSWORD_COMPLETED = "auth/change/password/completed",
    CHANGE_PASSWORD_ERROR = "auth/change/password/error",

    FORGOT_PASSWORD = "auth/forgot/password",
    FORGOT_PASSWORD_COMPLETED = "auth/forgot/password/completed",
    FORGOT_PASSWORD_ERROR = "auth/forgot/password/error",

    RESET_PASSWORD = "auth/reset/password",
    RESET_PASSWORD_COMPLETED = "auth/reset/password/completed",
    RESET_PASSWORD_ERROR = "auth/reset/password/error",
}
