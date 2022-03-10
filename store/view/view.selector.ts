import { State } from "..";

const loading = (state: State) => state.view.loading;
const screen = (state: State) => state.view.screen;
const changeLayout = (state: State) => state.view.changeLayout;
const locale = (state: State) => state.view.locale;
const showCarousel = (state: State) => state.view.showCarousel

export const viewSelectors = {
    loading,
    screen,
    changeLayout,
    locale,
    showCarousel
}