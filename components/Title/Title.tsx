import { Fragment } from "react";
import TitleLetter from "./TitleLetter";
import classes from './Title.module.sass';

interface TitleProps {
    text: string;
}

const Title = ({text} : TitleProps) => {

    return (
        <div className={classes.container}>
            {text.split("").map((letter, idx) => (
                <Fragment key={idx}>
                    <TitleLetter letter={letter} order={idx} />
                </Fragment>
            )) }
        </div>
    )
};

export default Title

