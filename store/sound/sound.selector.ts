import { State } from ".."

const volume = (state: State) => state.sound.volume;
const playing = (state: State) => state.sound.playing

export const soundSelectors = {
    volume,
    playing
}