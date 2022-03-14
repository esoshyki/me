import { useSelector } from 'react-redux';
import { select } from '../../store/select';
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

    const showContact = useSelector(select.view.showContact);

    const getClassName = () => {
        const collected = [classes.item]
        if (left === 0 && top === 0) {
            collected.push(classes.active)
        }
        if (showContact) {
            collected.push(classes.transformed)
        }
        return collected.join(" ")
    }

    return (
        <div 
            className={getClassName()} 
            style={{
            left: `${left}%`,
            top: `${top}%`
        }}>
            <div className={classes.item__icon__wrapper}>
                <div className={classes.item__icon} style={{
                    backgroundImage: `url(${icon})`
                }}/>
            </div>

            <div className={classes.item__content}>
                <h3>{title}</h3>
                <p>{html}</p>
            </div>            

        </div>
    )
};

export default CarouselItem;