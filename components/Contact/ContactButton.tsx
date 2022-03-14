import classes from './ContactButton.module.sass';
import { Canvas, useFrame } from "@react-three/fiber";
import * as three from "three";
import { Side } from 'three';
import { useDispatch, useSelector } from 'react-redux';
import { select } from '../../store/select';
import { toggleShowContact } from '../../store/view/view.actions';
import { useEffect, useRef, useState } from 'react';
import clickMP3 from '../../assets/click.mp3';

const ContactButton = () => {

    const showContact = useSelector(select.view.showContact);
    const soundOn = useSelector(select.sound.soundOn);
    const dispatch = useDispatch();
    const [clicked, setClicked] = useState(false);

    const audioRef = useRef<HTMLAudioElement>(null);

    const onClick = () => {
        console.log("click");
        dispatch(toggleShowContact(showContact ? undefined : true));

        if (audioRef.current && soundOn) {
            audioRef.current.play();
        }
    };

    useEffect(() => {
        setClicked(true);

        setTimeout(() => {
            setClicked(false)
        }, 200)
    }, [showContact]);

    const getButtonClass = () => {
        const collected = [classes.button];
        if (clicked) {
            collected.push(classes.clicked)
        };
        if (showContact) {
            collected.push(classes.rotated)
        }
        return collected.join(" ")
    };

    const getHeaderClass = () => {
        const collected = [classes.header];
        if (showContact) {
            collected.push(classes.hidden_header)
        }
        return collected.join(" ")
    };

    const getRootStyle = () => {
        const collected = [classes.root];
        if (showContact) {
            collected.push(classes.hidden_root)
        };
        return collected.join(" ")
    };

    return (
        <div className={getRootStyle()} onClick={showContact ? () => {} : onClick}>
            <div className={getHeaderClass()} >
                Contact us
            </div>

            <div className={classes.canvas_wrapper}>
                <div className={classes.button_outer}>
                    <div className={getButtonClass()} onClick={!showContact ? () => {} : onClick}/>
                </div>
            </div>

            <audio ref={audioRef} src={clickMP3} />
        </div>
    )
};

export default ContactButton;