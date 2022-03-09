import { useEffect, useRef } from 'react';
import classes from './Title.module.sass'

interface LetterProps {
    letter: string,
    order: number
}

const TitleLetter = ({letter, order} : LetterProps) => {

    const innerRef = useRef<HTMLDivElement>(null);
    const intervalRef = useRef<NodeJS.Timer>();

    const onAnimationEnd = () => {
        intervalRef.current = setInterval(() => {
            if (innerRef.current) {
                innerRef.current.classList.add(classes.topped);
            }
        }, 15000)
    }

    const onTransitionEnd = () => {
        if (innerRef.current) {
            innerRef.current.classList.remove(classes.topped)
        }
    }

    useEffect(() => {
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current)
            }
        }
    }, [])

    return (
        <div 
            onAnimationEnd={onAnimationEnd}
            onTransitionEnd={onTransitionEnd}
            style={{
                animationDelay: `${order * 200}ms`
            }}
            className={classes.letter}>
            <div 
                className={classes.letter_inner}
                ref={innerRef}
            >
                {letter}
            </div>
        </div>
    )
};

export default TitleLetter;