import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import Carousel from '../components/Carousel';
import Title from '../components/Title';
import { content } from '../content';
import { select } from '../store/select';
import classes from './Screens.module.sass'

const Home = () => {

    const locale = useSelector(select.view.locale)

    return (
        <div className={[classes.screen, classes.home].join(" ")}>
            <Fragment>
                <Carousel />
            </Fragment>
            <Title text={content.home[locale].manao} />
        </div>
    )
};

export default Home;