import { State } from ".."

const volume = (state: State) => state.sound.volume;
const playing = (state: State) => state.sound.playing;
const soundOn = (state: State) => state.sound.on;

export const soundSelectors = {
    volume,
    playing,
    soundOn
}