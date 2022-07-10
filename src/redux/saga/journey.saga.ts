import { journeyService } from './../../services/api-services/JourneyService';
import {all, call, put, takeLatest} from "redux-saga/effects";
import {JourneyActionType} from "redux/actions/actions.constants";
import {
    journeyCreateCompletedAction,
    journeyCreateErrorAction,
    journeyFetchCompletedAction,
    journeyFetchErrorAction,
    journeyFetchDriverCompletedAction,
    journeyFetchDriverErrorAction,
} from "redux/actions/journey.actions";
import {authService} from "services/api-services/AuthService";
import {toastService} from "services/ToastService";
import {errorFinder} from "utils/helpers";
import {StoreAction} from "../../models/commons/StoreAction";

function* createJourney(data: StoreAction<JourneyActionType>): any {
    try {
        const response = yield call(journeyService.create, data.payload);
        yield put(journeyCreateCompletedAction(response.journey));
        toastService.showSuccess("Journey Created Successfully");
    } catch (e: any) {
        yield put(journeyCreateErrorAction(errorFinder(e)));
        toastService.showError(errorFinder(e));
    }
}

function* fetchJourney(data: StoreAction<JourneyActionType>): any {
    try {
        const response = yield call(journeyService.fetchAll, data.payload);
        yield put(journeyFetchCompletedAction(response.journeys));
    } catch (e: any) {
        yield put(journeyFetchErrorAction(errorFinder(e)));
        toastService.showError(errorFinder(e));
    }
}

function* fetchDriverJourney(data: StoreAction<JourneyActionType>): any {
    try {
        const response = yield call(journeyService.fetchDriverAll, data.payload);
        yield put(journeyFetchDriverCompletedAction(response.journeys));
    } catch (e: any) {
        yield put(journeyFetchDriverErrorAction(errorFinder(e)));
        toastService.showError(errorFinder(e));
    }
}

function* journeySaga() {
    yield all([
        takeLatest(JourneyActionType.CREATE, createJourney),
        takeLatest(JourneyActionType.FETCH_ALL, fetchJourney),
        takeLatest(JourneyActionType.FETCH_DRIVER, fetchDriverJourney),
    ]);
}

export default journeySaga;
