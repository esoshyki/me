import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import Carousel from '../components/Carousel';
import Planet from '../components/Planet';
import Title from '../components/Title';
import { content } from '../content';
import { carouselData } from '../content/home';
import { Locales } from '../content/locales';
import { select } from '../store/select';
import classes from './Screens.module.sass'

const Home = () => {

    const locale = useSelector(select.view.locale);

    const items = locale === Locales.ru ? carouselData.ruCarousel : carouselData.enCarousel;

    return (
        <div className={[classes.screen, classes.home].join(" ")}>
            <Fragment>
                <Carousel items={items} />
            </Fragment>
            <Title text={content.home[locale].manao || ""} />
            <Planet />
        </div>
    )
};

export default Home;