import {Journey} from "models/entities/Journey";
import produce from "immer";
import {Reducer} from "redux";
import {JourneyActionType} from "redux/actions/actions.constants";

export interface JourneyState {
    loading?: boolean;
    list?: Journey[];
    listForDriver?: Journey[];
}

const initialState: JourneyState = {};

export const journeyReducer: Reducer<JourneyState> = (state = initialState, action: any) =>
    produce(state, (draft: JourneyState) => {
        switch (action.type) {
            case JourneyActionType.FETCH_ALL: {
                draft.loading = true;
                break;
            }
            case JourneyActionType.FETCH_ALL_COMPLETED: {
                draft.loading = false;
                draft.list=action.payload
                break;
            }
            case JourneyActionType.FETCH_DRIVER_COMPLETED : {
                draft.loading = false;
                draft.listForDriver=action.payload
                break;
            }
            default:
                break;
        }
    });
