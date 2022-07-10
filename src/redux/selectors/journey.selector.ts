import {createSelector} from "reselect";
import {journeySelector} from "./index";

export const meLoading = createSelector([journeySelector], (authState) => authState.loading);

export const meIdSelector = createSelector([journeySelector], (authState) => authState.userID);

export const userSelector = createSelector([journeySelector], (authState) => authState.user);
