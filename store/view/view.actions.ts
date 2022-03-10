import { Action } from "..";
import { Locales } from "../../content/locales";
import { Screens, ViewActions } from "./view.types";

export const toggleLoading = (payload?: true) : Action => ({
    type: ViewActions.ToggleLoading,
    payload
})

export const toggleChangeLayout = (payload?: true) : Action => ({
    type: ViewActions.ToggleChangeLayout,
    payload
})

export const setScreen = (payload: Screens) : Action => ({
    type: ViewActions.SetScreen,
    payload
})

export const changeScreenRequest = (payload: Screens) : Action => ({
    type: ViewActions.ChangeScreenRequest,
    payload
})

export const setLocale = (payload: Locales) : Action => ({
    type: ViewActions.SetLocale,
    payload
})

export const ToggleShowCarousel = () : Action => ({
    type: ViewActions.ToggleShowCarousel
})