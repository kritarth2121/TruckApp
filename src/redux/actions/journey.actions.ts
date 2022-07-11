import {JourneyActionType} from "./actions.constants";
import {StoreAction} from "../../models/commons/StoreAction";
import {Journey} from "../../models/entities/Journey";

export const journeyCreateAction = (payload: any): StoreAction<JourneyActionType> => ({
    type: JourneyActionType.CREATE,
    payload,
});

export const journeyCreateCompletedAction = (journey: Journey): StoreAction<JourneyActionType> => ({
    type: JourneyActionType.CREATE_COMPLETED,
    payload: journey,
});

export const journeyCreateErrorAction = (message: string): StoreAction<JourneyActionType> => ({
    type: JourneyActionType.CREATE_ERROR,
    payload: message,
});


export const journeyFetchAction = (payload: any): StoreAction<JourneyActionType> => ({
    type: JourneyActionType.FETCH_ALL,
    payload,
});

export const journeyFetchCompletedAction = (journeys: Journey[]): StoreAction<JourneyActionType> => ({
    type: JourneyActionType.FETCH_ALL_COMPLETED,
    payload: journeys,
});

export const journeyFetchErrorAction = (message: string): StoreAction<JourneyActionType> => ({
    type: JourneyActionType.FETCH_ALL_ERROR,
    payload: message,
});

export const journeyFetchDriverAction = (payload: any): StoreAction<JourneyActionType> => ({
    type: JourneyActionType.FETCH_DRIVER,
    payload,
});

export const journeyFetchDriverCompletedAction = (journeys: Journey[]): StoreAction<JourneyActionType> => ({
    type: JourneyActionType.FETCH_DRIVER_COMPLETED,
    payload: journeys,
});

export const journeyFetchDriverErrorAction = (message: string): StoreAction<JourneyActionType> => ({
    type: JourneyActionType.FETCH_DRIVER_ERROR,
    payload: message,
});
