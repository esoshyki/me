import { Action } from "..";
import { SoundActions } from "./sound.actions";
import { SoundState } from "./sound.types";

const initState: SoundState = {
    volume: 0.2
}

export const soundReducer = (state = initState, action: Action) : SoundState => {

    const { type, payload } = action;

    switch (type) {

        case SoundActions.setVolume:
            return {
                ...state,
                volume: payload
            }

        case SoundActions.volumeDown:
            return {
                ...state,
                volume: state.volume - payload < 0 ? 0 : state.volume - payload
            }

        case SoundActions.volumeUp:
            return {
                ...state,
                volume: state.volume + payload > 1 ? 1 : state.volume + payload
            } 
        
        case SoundActions.togglePlay:
            return {
                ...state,
                playing: state.playing ? undefined : true
            }

        case SoundActions.toggleSound:
            return {
                ...state,
                on: payload
            }

        default:
            return state
    }
}