import {createSelector} from "reselect";
import {journeySelector} from "./index";

export const journeyLoading = createSelector([journeySelector], (journeneyState) => journeneyState.loadingList);

export const journeyList = createSelector([journeySelector], (journeneyState) => journeneyState.list);

export const journeyDriverList = createSelector([journeySelector], (journeneyState) => Object.values(journeneyState.entities));

export const journeyDriverCollection = createSelector([journeySelector], (journeneyState) => journeneyState.entities);
