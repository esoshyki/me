import { Fragment, useRef } from 'react';
import { useSelector } from 'react-redux';
import { select } from '../../store/select';
import classes from './Carousel.module.sass'
import CarouselItem, { ICarouselItem } from './CarouselItem';

const Carousel = ({ items } : {
    items: ICarouselItem[]
}) => {

    const showCarousel = useSelector(select.view.showCarousel);

    const rootRef = useRef<HTMLDivElement>(null);

    const onAnimationEnd = () => {
        if (rootRef.current) {
            rootRef.current.style.opacity = "1";
        }
    }

    return (
        <Fragment>
            {showCarousel && <div 
                onAnimationEnd={onAnimationEnd}
                ref={rootRef}
                className={classes.root}>
                {!!items && items.map((item, idx) => (
                    <Fragment key={idx}>
                        <CarouselItem 
                            icon={item.icon}
                            title={item.title}
                            html={item.html}
                            left={item.left}
                        />    
                    </Fragment>
                )) }
            </div>}
        </Fragment>
    )
};

export default Carousel;