import {createSelector} from "reselect";
import {authSelector} from ".";

export const meError = createSelector([authSelector], (authState) => authState.error);

export const meLoading = createSelector([authSelector], (authState) => authState.loading);

export const meIdSelector = createSelector([authSelector], (authState) => authState.userID);

export const userSelector = createSelector([authSelector], (authState) => authState.user);

export const driversSelector = createSelector([authSelector], (authState) => authState.drivers);

export const usersSelector = createSelector([authSelector], (authState) => authState.users);
