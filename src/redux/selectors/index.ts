import { AppState } from "../reducers";

export const authSelector = (state: AppState) => state.auth;

export const journeySelector = (state: AppState) => state.journey;
