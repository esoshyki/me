import { combineReducers } from "redux";
import { soundReducer } from "./sound/sound.reducer";
import { viewReducer } from "./view/view.reducer";

export const rootReducer = combineReducers({
    view: viewReducer,
    sound: soundReducer
});