import { takeEvery } from 'redux-saga/effects'
import { Action } from '..'
import { Screens, ViewActions } from './view.types'

function* changeScreenWorker (action: Action) {
    const screen: Screens = action.payload;

    if (screen === Screens.Home) {
        console.log("SAGA!!!");
    }
}

export default function* ViewSagas () {
    takeEvery(ViewActions.ChangeScreenRequest, changeScreenWorker)
}