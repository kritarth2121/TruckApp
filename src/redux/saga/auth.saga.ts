import {all, call, put, takeLatest} from "redux-saga/effects";
import {
    authChangePasswordCompletedAction,
    authChangePasswordErrorAction,
    authFetchMeCompletedAction,
    authFetchMeErrorAction,
    authLoginCompletedAction,
    authLoginErrorAction,
    authSignInCompletedAction,
    authSignInErrorAction,
    authUpdateMeCompletedAction,
    authUpdateMeErrorAction,
} from "../actions/auth.actions";
import {localStorageService} from "../../services/LocalStorageService";
import {toastService} from "../../services/ToastService";
import {authService} from "../../services/api-services/AuthService";
import {errorFinder} from "../../utils/helpers";
import {AuthActionType} from "../actions/actions.constants";
import {StoreAction} from "../../models/commons/StoreAction";

function* loginSaga(data: StoreAction<AuthActionType>): any {
    try {
        const response = yield call(authService.login, data.payload);
        yield put(authLoginCompletedAction(response.user));
        localStorageService.setAuthToken(response?.token?.token);
        toastService.showSuccess("Login Successful");
    } catch (e: any) {
        yield put(authLoginErrorAction(errorFinder(e)));
        toastService.showError(errorFinder(e));
    }
}

function* signinSaga(data: StoreAction<AuthActionType>): any {
    try {
        const response = yield call(authService.create, data.payload);
        yield put(authSignInCompletedAction(response.user));
        localStorageService.setAuthToken(response?.token);
        toastService.showSuccess("Account Created Successfully");
    } catch (e: any) {
        yield put(authSignInErrorAction(errorFinder(e)));
        toastService.showError(errorFinder(e));
    }
}

function* fetchLoggedInUserSaga(): any {
    try {
        const response = yield call(authService.fetchMe);
        yield put(authFetchMeCompletedAction(response.user));
    } catch (e: any) {
        localStorageService.removeAuthToken();
        yield put(authFetchMeErrorAction(errorFinder(e)));
        toastService.showError(errorFinder(e));
    }
}

function* updateUserSaga(data: StoreAction<AuthActionType>): any {
    try {
        const response = yield call(authService.updateMe, data.payload);
        yield put(authUpdateMeCompletedAction(response.user));
        toastService.showSuccess("Profile Updated Successfully");
    } catch (e: any) {
        yield put(authUpdateMeErrorAction(errorFinder(e)));
        toastService.showError(errorFinder(e));
    }
}

function* updateUserPasswordSaga(data: StoreAction<AuthActionType>): any {
    try {
        const response = yield call(authService.changePassword, data.payload);
        yield put(authChangePasswordCompletedAction(response.user));
        toastService.showSuccess("Password Updated Successfully");
    } catch (e: any) {
        yield put(authChangePasswordErrorAction(errorFinder(e)));
        toastService.showError(errorFinder(e));
    }
}

function* logoutSaga(): any {
    localStorageService.removeAuthToken();
    toastService.showInfo("Logged Out");
    yield 10;
}

function* authSaga() {
    yield all([
        takeLatest(AuthActionType.CHANGE_PASSWORD, updateUserPasswordSaga),
        takeLatest(AuthActionType.UPDATE_ME, updateUserSaga),
        takeLatest(AuthActionType.LOGIN, loginSaga),
        takeLatest(AuthActionType.FETCH_ME, fetchLoggedInUserSaga),
        takeLatest(AuthActionType.LOGOUT, logoutSaga),
        takeLatest(AuthActionType.SIGNIN, signinSaga),
    ]);
}

export default authSaga;
