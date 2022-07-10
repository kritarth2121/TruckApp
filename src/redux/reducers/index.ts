import { combineReducers } from "redux";
import { authReducer } from "./auth.reducer";
import { journeyReducer } from "./journey.reducer";

const appReducer = combineReducers({
    auth: authReducer,
    journey:journeyReducer
});

export const rootReducer = (state: any, action: any) => appReducer(state, action);

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
