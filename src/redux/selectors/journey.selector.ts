import {createSelector} from "reselect";
import {journeySelector} from "./index";

export const journeyLoading = createSelector([journeySelector], (journeneyState) => journeneyState.loading);

export const journeyList = createSelector([journeySelector], (journeneyState) => journeneyState.list);

export const journeyDriverList = createSelector([journeySelector], (journeneyState) => journeneyState.listForDriver);
