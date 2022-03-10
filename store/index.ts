import { createStore, applyMiddleware  } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import createSagaMiddleware from 'redux-saga'
import { rootReducer } from "./reducer"
import { rootSagas } from "./sagas"
import { SoundState } from "./sound/sound.types"
import { ViewState } from "./view/view.types"

export type Action = {
    payload?: any,
    type: string
}

export type State = {
    view: ViewState,
    sound: SoundState
}

const sagaMiddleWare = createSagaMiddleware();

const makeStore = () => {
    const store = createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(sagaMiddleWare))
    );

    sagaMiddleWare.run(rootSagas);

    return store
};

export const store = makeStore();