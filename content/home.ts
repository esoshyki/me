import { ICarouselItem } from "../components/Carousel/CarouselItem";
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
        icon: "/React.png",
        title: "Реакт с рендерингом на стороне сервера",
        html: "Рендеринг на сервере, позволяет использовать плюсы быстроты работы библиотки Реакт и возможность осуществлять сео поддержку сайта. Для этого используется библотека - Next JS",
        left: "0px"
    }
];

const enCarousel: ICarouselItem[] = [
    {
        icon: "/React.png",
        title: "React with server-side rendering",
        html: "Server side rendering allows using pluses of speed of React and possibility of making seo support of the site. For this we use a framework - Next JS",
        left: "0px"
    }   
];

export const carouselData = {
    ruCarousel,
    enCarousel
}

