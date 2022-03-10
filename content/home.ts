import { ICarouselItem } from "../components/Carousel/CarouselItem";
import { Screens } from "../store/view/view.types";
import { Locales } from "./locales";

export const homeContent = {
    [Locales.ru]: {
        manao: "Манао",
    },
    [Locales.en]: {
        manao: "Manao",
        react: "React with server-side rendering",
        reactBody: "Server side rendering allows using pluses of speed of React and possibility of making seo support of the site. For this we use a framework - Next JS"
    }
};

const ruCarousel: ICarouselItem[] = [
    {   
        screen: Screens.Home,
        icon: "/React.png",
        title: "Реакт с рендерингом на стороне сервера",
        html: "Рендеринг на сервере, позволяет использовать плюсы быстроты работы библиотки Реакт и возможность осуществлять сео поддержку сайта. Для этого используется библотека - Next JS",
        id: 0,
        left: 0,
        top: 0
    },
    {
        screen: Screens.NodeJS,
        icon: "/nodeJS.png",
        title: "Возможность написания собственного сервера на Node JS",
        html: "Мы можем написать собственный продвинутый сервер, с защитой, поддержкой cookies, авторизацией и базой данных. Для этого например можно использовать современный мощный фреймфорк  - Nest",
        id: 1,
        left: 100,
        top: -100,
    },
    {
        screen: Screens.Quality,
        icon: "/quality.png",
        title: "Гарантия качества и техническая поддержка",
        html: "Наши специалисты гарантируюет круглосуточную поддержку и техническое споровождение продукта",
        id: 2,
        left: 200,
        top: 0
    },
    {
        icon: "/",
        title: "",
        html: "",
        id: 3,
        left: 100,
        top: 100
    },
];

const enCarousel: ICarouselItem[] = [
    {
        screen: Screens.Home,
        icon: "/React.png",
        title: "React with server-side rendering",
        html: "Server side rendering allows using pluses of speed of React and possibility of making seo support of the site. For this we use a framework - Next JS",
        id: 0,
        left: 0,
        top: 0
    },
    {
        screen: Screens.NodeJS,
        icon: "/nodeJS.png",
        title: "Possibility of making self server using Node JS",
        html: "We can make a modern server with security, cookies supply, authorization and database. For that we can use for example a powerful and modern framework - Nest",
        id: 1,
        left: 100,
        top: -100,
    },
    {
        screen: Screens.Quality,
        icon: "/quality.png",
        title: "Quality warranty and technical support ",
        html: "Our specialists guarantee round the clock technical support of the product",
        id: 2,
        left: 200,
        top: 0
    },
    {
        icon: "/",
        title: "",
        html: "",
        id: 3,
        left: 100,
        top: 100
    },
];

export const carouselData = {
    ruCarousel,
    enCarousel
}

