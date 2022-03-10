import { all } from "redux-saga/effects";
import ViewSagas from "./view/view.sagas";

export function* rootSagas () {
    yield all([
        ViewSagas()
    ])
} 