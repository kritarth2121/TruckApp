import { combineReducers } from "redux";
import { authReducer } from "./auth.reducer";

const appReducer = combineReducers({
    auth: authReducer,
});

export const rootReducer = (state: any, action: any) => appReducer(state, action);

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
