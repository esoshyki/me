import { put, takeEvery } from 'redux-saga/effects'
import { Action } from '..'
import { setScreen } from './view.actions';
import { Screens, ViewActions } from './view.types'

function* changeScreenWorker (action: Action) {
    const screen: Screens = action.payload;

    yield put(setScreen(screen));
}

export default function* ViewSagas () {
    yield takeEvery(ViewActions.ChangeScreenRequest, changeScreenWorker)
}