import { Action } from "..";

export enum SoundActions {
    setVolume = "Sound/Set-Volume",
    volumeUp = "Sound/Volume-Up",
    volumeDown = "Sound/Volume-Down",
    togglePlay = "Sound/Toggle-Play",
    toggleSound = "Sound/Toggle-Sound"
}

export const setVolume = (payload: number) : Action => ({
    type: SoundActions.setVolume,
    payload
})

export const volumeUp = () : Action => ({
    type: SoundActions.volumeUp
})

export const volumeDown = () : Action => ({
    type: SoundActions.volumeDown
})

export const togglePlay = () : Action => ({
    type: SoundActions.togglePlay
})

export const toggleSound = (payload?: true) : Action => ({
    type: SoundActions.toggleSound,
    payload
})