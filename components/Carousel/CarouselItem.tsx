import classes from './Carousel.module.sass'

export interface ICarouselItem {
    icon?: string,
    title: string,
    html: string,
    left: string
}

const CarouselItem = ({
    icon, title, html, left
} : ICarouselItem) => {

    return (
        <div className={classes.item} style={{
            left
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