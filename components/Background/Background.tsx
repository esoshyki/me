import classes from './Background.module.sass'
import { Suspense, useEffect, useRef } from 'react'
import { BufferGeometry, Float32BufferAttribute, PointsMaterial} from "three";
import { Canvas } from "@react-three/fiber";

const Background = () => {

    const scene = useRef<HTMLDivElement>(null);
    
    const onMouseMove = (e: MouseEvent) => {
        if (!scene.current) return;

        const screenWidth = window.screen.width;
        const screenHeight = window.screen.height;

        const translateX = 4 * e.screenX / screenWidth;
        const translateY = 4 * e.screenY / screenHeight;

        scene.current.style.transform = `translate(${-translateX}%, ${-translateY}%)`
    }

    useEffect(() => {
        window.addEventListener("mousemove", onMouseMove);

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
        }
    }, [])
  
    const Stars = () => {
        const starsVertices = [];
    
        for (let i = 0; i < 10000; i++) {
            const x = 1000 * (Math.random() - 0.5);
            const y = 1000 * (Math.random() - 0.5);
            const z = -4000 * (Math.random());
            starsVertices.push(x, y, z);
        }
    
        const starGeometry = new BufferGeometry();
        starGeometry.setAttribute("position", new Float32BufferAttribute(starsVertices, 3))
    
        return (
            <points 
                geometry={starGeometry}
                material={new PointsMaterial({
                    color: 0xffffff
                })}
                >
            </points>
        )
    }
    


    return (
        <div 
            onMouseMove={() => {console.log("MOUSE MOVE")}}
            ref={scene}
            className={classes.root}>
            <Canvas 
                camera={{
                zoom: 2
            }}>
                <Suspense fallback={null}>
                    <Stars />
                </Suspense>
            </Canvas>
            
        </div>
    )
};

export default Background;