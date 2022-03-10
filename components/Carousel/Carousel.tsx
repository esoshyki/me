import { relative } from 'node:path/win32';
import { Fragment, useRef } from 'react';
import { useSelector } from 'react-redux';
import { select } from '../../store/select';
import classes from './Carousel.module.sass'
import CarouselItem, { ICarouselItem } from './CarouselItem';

const Carousel = ({ items } : {
    items: ICarouselItem[]
}) => {

    const showCarousel = useSelector(select.view.showCarousel);
    const screen = useSelector(select.view.screen);

    const rootRef = useRef<HTMLDivElement>(null);

    const onAnimationEnd = () => {
        if (rootRef.current) {
            rootRef.current.style.opacity = "1";
        }
    };

    const selected = items.find(item => item.screen === screen);

    const relative: ICarouselItem[]  = !selected ? items : 
        [selected, ...items.slice(selected.id + 1), ...items.slice(0, selected.id)];

    relative[0].left = 0;
    relative[0].top = 0;
    relative[1].left = 100;
    relative[1].top = -100;
    relative[2].left = 200;
    relative[2].top = 0;
    relative[3].left = 100;
    relative[3].top = 100;

    return (
        <div className={classes.carouselWrapper}>
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
                            top={item.top}
                            id={item.id}
                        />    
                    </Fragment>
                )) }
            </div>}
        </div>
    )
};

export default Carousel;