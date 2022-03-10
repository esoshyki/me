import { Fragment, useEffect, useRef } from "react";
import src from "../../assets/2.mp3";

const Audio = () => {

    const auidoRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {[
      setTimeout(() => auidoRef.current?.play(), 1000)  
    ]})


    return (
        <Fragment>
            <audio autoPlay={true} loop={true} preload="auto" ref={auidoRef}>
                <source src={src}  type="audio/mp3" />
            </audio>
         </Fragment>

    )
};

export default Audio;