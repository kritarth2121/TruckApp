import {Journey} from "../../models/entities/Journey";
import produce from "immer";
import {Reducer} from "redux";
import {JourneyActionType} from "../../redux/actions/actions.constants";
import {EntityState} from "../base/EntityState";

export interface JourneyState extends EntityState<Journey> {
    list?: Journey[];
}

const initialState: JourneyState = {entities: {}};

export const journeyReducer: Reducer<JourneyState> = (state = initialState, action: any) =>
    produce(state, (draft: JourneyState) => {
        switch (action.type) {
            case JourneyActionType.FETCH_ALL: {
                draft.loadingList = true;
                break;
            }
            case JourneyActionType.FETCH_ALL_COMPLETED: {
                draft.loadingList = false;
                draft.list = action.payload;
                break;
            }
            case JourneyActionType.FETCH_DRIVER_COMPLETED: {
                draft.loadingList = false;
                const journeys = action.payload;
                draft.entities = {};
                journeys.forEach((g: Journey) => {
                    draft.entities[g._id] = g;
                });
                break;
            }
            case JourneyActionType.FETCH_DRIVER_ERROR: {
                draft.loadingList = false;
                draft.error = action.payload;
            }
            case JourneyActionType.UPDATE_STAUS: {
                draft.loadingOne = true;
                break;
            }
            case JourneyActionType.UPDATE_STAUS_COMPLETED: {
                const journey = action.payload as Journey;
                draft.entities[journey._id] = journey,
                
                draft.loadingOne = false;
                break;
            }

            case JourneyActionType.UPDATE_STAUS_ERROR: {
                draft.error = action.payload;
                draft.loadingOne = false;
                break;
            }
            default:
                break;
        }
    });
