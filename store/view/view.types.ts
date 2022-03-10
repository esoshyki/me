import { Locales } from "../../content/locales";

export enum Screens {
    Home = "Home"
};

export enum ViewActions {
    ToggleLoading = "View/Toggle-Loading",
    SetScreen = "View/Set-Screen",
    ChangeScreenRequest = "View/Change-Screen-Request",
    ToggleChangeLayout = "View/Toggle-Change-Layout",
    SetLocale = "View/Set-Locale"
}

export type ViewState = {
    screen: Screens,
    loading?: true,
    changeLayout?: true,
    locale: Locales,
};
