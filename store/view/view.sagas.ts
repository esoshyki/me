import { takeEvery } from 'redux-saga/effects'
import { ViewActions } from './view.types'

function* changeScreenWorker () {

}

export default function* ViewSagas () {
    takeEvery(ViewActions.ChangeScreenRequest, changeScreenWorker)
}