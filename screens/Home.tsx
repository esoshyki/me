import { Fragment } from 'react';
import Carousel from '../components/Carousel';
import Title from '../components/Title';
import classes from './Screens.module.sass'

const Home = () => {

    return (
        <div className={[classes.screen, classes.home].join(" ")}>
            <Fragment>
                <Carousel />
            </Fragment>
            <Title text='Manao' />
        </div>
    )
};

export default Home;