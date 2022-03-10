import { Fragment, useEffect, useRef } from "react";
import TitleLetter from "./TitleLetter";
import classes from './Title.module.sass';
import { ToggleShowCarousel } from "../../store/view/view.actions";
import { useDispatch, useSelector } from "react-redux";
import { select } from "../../store/select";

interface TitleProps {
    text: string;
}

const Title = ({text} : TitleProps) => {

    const containerRef = useRef<HTMLDivElement>(null);
    const dispatch = useDispatch();
    const showCarousel = useSelector(select.view.showCarousel);

    useEffect(() => {
        setTimeout(() => {
            containerRef.current?.classList.add(classes.left)
        }, 3000)
    }, [])

    const onTransitionEnd = () => {
        if (!showCarousel) {
            dispatch(ToggleShowCarousel());
        }
    }

    return (
        <div 
            ref={containerRef}
            className={classes.container}
            onTransitionEnd={onTransitionEnd}
            >
            {text.split("").map((letter, idx) => (
                <Fragment key={idx}>
                    <TitleLetter letter={letter} order={idx} />
                </Fragment>
            )) }
        </div>
    )
};

export default Title

