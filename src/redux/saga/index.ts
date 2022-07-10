import {all, fork} from "redux-saga/effects";
import authSaga from "./auth.saga";
import journeySaga from "./journey.saga";

export function* rootSaga() {
    yield all([fork(authSaga), fork(journeySaga)]);
}
