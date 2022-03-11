import { Fragment, useEffect, useRef, useState, WheelEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { select } from '../../store/select';
import { changeScreenRequest } from '../../store/view/view.actions';
import classes from './Carousel.module.sass'
import CarouselItem, { ICarouselItem } from './CarouselItem';
import swipe from '../../assets/swipe.wav';

const Carousel = ({ items } : {
    items: ICarouselItem[]
}) => {

    const dispatch = useDispatch();
    const showCarousel = useSelector(select.view.showCarousel);
    const showContact = useSelector(select.view.showContact);
    const soundOn = useSelector(select.sound.soundOn);
    const screen = useSelector(select.view.screen);
    const [disable, setDisable] = useState(false);
    const [hide, setHide] = useState(true);

    const rootRef = useRef<HTMLDivElement>(null);
    const audioRef = useRef<HTMLAudioElement>(null);

    const onAnimationEnd = () => {
        setHide(false);
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

    const onWheel = (e: WheelEvent<HTMLDivElement>) => {
        if (disable) return;
        if (e.deltaY < 0) {
            if (relative[3].screen) {
                dispatch(changeScreenRequest(relative[3].screen));
                setDisable(true)
                setHide(true)
            }
        };

        if (e.deltaY > 0) {
            if (relative[1].screen) {
                dispatch(changeScreenRequest(relative[1].screen));
                setDisable(true) 
                setHide(true)    
            } 
        }
    }

    useEffect(() => {
        if (disable) {
            if (audioRef.current && soundOn) {
                if (!audioRef.current.paused) {
                    audioRef.current.currentTime = 0
                }
                audioRef.current.play();
            };
            setTimeout(() => {
                setDisable(false)
            }, 300)
            setTimeout(() => {
                setHide(false)
            }, 300)
        }
    }, [disable])

    const getRootClass = () => {
        const collected = [classes.root];
        collected.push(hide? classes.hidden : classes.shown);
        if (showContact) {
            collected.push(classes.inactive)
        }
        return collected.join(" ")
    }

    return (
        <div className={classes.carouselWrapper} onWheel={onWheel}>
            <audio ref={audioRef}>
                <source src={swipe} type="audio/wav"/>    
            </audio>
            {showCarousel && <div 
                onAnimationEnd={onAnimationEnd}
                ref={rootRef}
                className={getRootClass()}>
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