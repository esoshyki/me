import { Fragment, useEffect, useRef } from "react";
import src from "../../assets/2.mp3";
import classes from './Audio.module.sass';

const Audio = () => {

    const audioRef = useRef<HTMLAudioElement>(null);

    const onClick = () => {
        if (!audioRef.current) return;
        audioRef.current.paused ? 
        audioRef.current.play() : 
        audioRef.current.pause() 
    }

    return (
        <Fragment>
            <div className={classes.Ukraine} onClick={onClick}></div>
            <audio autoPlay={true} loop={true} preload="auto" ref={audioRef}>
                <source src={src}  type="audio/mp3" />
            </audio>
         </Fragment>

    )
};

export default Audio;