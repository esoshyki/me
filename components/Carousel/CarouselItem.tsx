import classes from './Carousel.module.sass'

interface Props {
    icon?: string,
    title: string,
    html: string,
    left: string
}

const CarouselItem = ({
    icon, title, html, left
} : Props) => {

    return (
        <div className={classes.item}>
            <div className={classes.item__icon} style={{
                backgroundImage: icon
            }}/>

            

        </div>
    )
};

export default CarouselItem;