import { Fragment, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import src from "../../assets/2.mp3";
import { select } from "../../store/select";
import classes from './Audio.module.sass';
import { toggleSound } from "../../store/sound/sound.actions";
import soundOnSound from '../../assets/sound.wav';

const Audio = () => {

    const audioRef = useRef<HTMLAudioElement>(null);
    const soundRef = useRef<HTMLAudioElement>(null); 
    const dispatch = useDispatch();

    const soundOn = useSelector(select.sound.soundOn)

    const onClick = () => {
        if (!audioRef.current || !soundOn) return;
        audioRef.current.paused ? 
        audioRef.current.play() : 
        audioRef.current.pause() 
    }

    const getClassName = () => {
        return soundOn ? 
            [classes.sound, classes.soundOn].join(" ") : 
            [classes.sound, classes.soundOff].join(" ");
    }

    const onSoundClick = () => {
        dispatch(toggleSound(soundOn ? undefined : true))
    }

    useEffect(() => {
        if (soundOn) {
            if (soundRef.current) {
                soundRef.current.play()
            }
        } else {
            if (soundRef.current) {
                soundRef.current.pause()
                soundRef.current.currentTime = 0;
            }
            if (audioRef.current) {
                audioRef.current.pause()
            }
        }
    }, [soundOn])

    return (
        <Fragment>
            <div className={classes.Ukraine} onClick={onClick}></div>
            <audio loop={true} preload="auto" ref={audioRef}>
                <source src={src}  type="audio/mp3" />
            </audio>

            <audio ref={soundRef}>
                <source src={soundOnSound}  type="audio/wav" />
            </audio>
            <div className={getClassName()} onClick={onSoundClick} />
         </Fragment>

    )
};

export default Audio;