import {User} from "../../models/entities/User";
import produce from "immer";
import {Reducer} from "redux";
import {AuthActionType} from "../actions/actions.constants";

export interface AuthState {
    userID?: number;
    user?: any;
    loading?: boolean;
    error?: string;
    drivers?: User[];
    users?: User[];
}

const initialState: AuthState = {};

export const authReducer: Reducer<AuthState> = (state = initialState, action: any) =>
    produce(state, (draft: AuthState) => {
        switch (action.type) {
            case AuthActionType.LOGIN:
            case AuthActionType.FETCH_ME: {
                draft.loading = true;
                break;
            }
            case AuthActionType.SIGNIN_COMPLETED:
            case AuthActionType.LOGIN_COMPLETED:
            case AuthActionType.FETCH_ME_COMPLETED: {
                draft.userID = action.payload.id;
                draft.loading = false;
                draft.error = undefined;
                draft.user = action.payload;
                console.log(draft.user, action.payload, "user mf");
                break;
            }
            case AuthActionType.LOGIN_ERROR:
            case AuthActionType.FETCH_ME_ERROR: {
                draft.loading = false;
                draft.error = action.payload;
                break;
            }
            case AuthActionType.LOGOUT: {
                draft.userID = undefined;
                break;
            }
            case AuthActionType.GET_DRIVER_COMPLETED: {
                draft.drivers = action.payload;
                break;
            }
            case AuthActionType.GET_USER_COMPLETED: {
                draft.users = action.payload;
                break;
            }
            default:
                break;
        }
    });
