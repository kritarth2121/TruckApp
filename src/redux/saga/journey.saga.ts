import {journeyService} from "./../../services/api-services/JourneyService";
import {all, call, put, takeLatest} from "redux-saga/effects";
import {JourneyActionType} from "../../redux/actions/actions.constants";
import {
    journeyCreateCompletedAction,
    journeyCreateErrorAction,
    journeyFetchCompletedAction,
    journeyFetchErrorAction,
    journeyFetchDriverCompletedAction,
    journeyFetchDriverErrorAction,
    journeyUpdateStatusCompletedAction,
    journeyUpdateStatusErrorAction,
} from "../../redux/actions/journey.actions";
import {toastService} from "../../services/ToastService";
import {errorFinder} from "../../utils/helpers";
import {StoreAction} from "../../models/commons/StoreAction";
import * as RootNavigation from "../../RootNavigation";

function* createJourney(data: StoreAction<JourneyActionType>): any {
    try {
        const response = yield call(journeyService.create, data.payload);
        yield put(journeyCreateCompletedAction(response.journey));
        toastService.showSuccess("Journey Created Successfully");
        RootNavigation.navigate("All Journeys");
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

function* updateJourneyStatus(data: StoreAction<JourneyActionType>): any {
    const {id, status} = data.payload;
    try {
        const response = yield call(journeyService.updateStatus, id, status);
        yield put(journeyUpdateStatusCompletedAction(response.journey));
        toastService.showSuccess("Journey Status Updated Successfully");
    } catch (e: any) {
        yield put(journeyUpdateStatusErrorAction(errorFinder(e)));
        toastService.showError(errorFinder(e));
    }
}

function* journeySaga() {
    yield all([
        takeLatest(JourneyActionType.CREATE, createJourney),
        takeLatest(JourneyActionType.FETCH_ALL, fetchJourney),
        takeLatest(JourneyActionType.FETCH_DRIVER, fetchDriverJourney),
        takeLatest(JourneyActionType.UPDATE_STAUS, updateJourneyStatus),
    ]);
}

export default journeySaga;
