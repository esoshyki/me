import { Action } from ".."
import { Locales } from "../../content/locales";
import { Screens, ViewActions, ViewState } from "./view.types"

const initState: ViewState = {
    screen: Screens.Home,
    locale: Locales.en
}

export const viewReducer = (state = initState, action: Action) : ViewState => {
    const { type, payload } = action;

    switch (type) {
        case ViewActions.ToggleLoading:
            return {
                ...state,
                loading: state.loading ? undefined : true
            }

        case ViewActions.SetScreen:
            return {
                ...state,
                screen: payload
            }

        case ViewActions.SetLocale:
            return {
                ...state,
                locale: payload
            }

        case ViewActions.ToggleShowCarousel:
            return {
                ...state,
                showCarousel: state.showCarousel ? undefined : true
            }

        case ViewActions.ToggleShwoContact:
            return {
                ...state,
                showContact: payload
            }

        case ViewActions.ToggleShowContactWrapper:
            return {
                ...state,
                showContactWrapper: payload
            }

        default: 
            return state
    }
}