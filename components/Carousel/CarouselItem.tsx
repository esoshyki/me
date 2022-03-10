import { Screens } from '../../store/view/view.types';
import classes from './Carousel.module.sass'

export interface ICarouselItem {
    icon?: string,
    title: string,
    html: string,
    id: number,
    screen?: Screens,
    left: number,
    top: number,
};

const CarouselItem = ({
    icon, title, html, left, top
} : ICarouselItem) => {

    return (
        <div className={classes.item} 
            style={{
            left: `${left}%`,
            top: `${top}%`
        }}>
            <div className={classes.item__icon} style={{
                backgroundImage: `url(${icon})`
            }}/>

            <div className={classes.item__content}>
                <h3>{title}</h3>
                <p>{html}</p>
            </div>            

        </div>
    )
};

export default CarouselItem;