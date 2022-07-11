export enum AuthActionType {

    SIGNIN = "auth/signin",
    SIGNIN_COMPLETED = "auth/signin/completed",
    SIGNIN_ERROR = "auth/signin/error",

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

    GET_DRIVER="auth/get/driver",
    GET_DRIVER_COMPLETED="auth/get/driver/completed",
    GET_DRIVER_ERROR="auth/get/driver/error",

    GET_USER="auth/get/user",
    GET_USER_COMPLETED="auth/get/user/completed",
    GET_USER_ERROR="auth/get/user/error",
}

export enum JourneyActionType {

    CREATE = "journey/create",
    CREATE_COMPLETED ="journey/create/completed",
    CREATE_ERROR = "journey/create/error",

    FETCH_ALL = "journey/all",
    FETCH_ALL_COMPLETED = "journey/all/completed",
    FETCH_ALL_ERROR = "journey/all/error",

    FETCH_DRIVER ="journey/driver",
    FETCH_DRIVER_COMPLETED="journey/driver/completed",
    FETCH_DRIVER_ERROR="journey/driver/error"
}
