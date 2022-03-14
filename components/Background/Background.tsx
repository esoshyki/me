import classes from './Background.module.sass'
import { Suspense, useEffect, useRef } from 'react'
import { Canvas, useFrame } from "@react-three/fiber";
import { BufferGeometry, PointsMaterial, TextureLoader, Float32BufferAttribute, BoxGeometry } from 'three';
import { Stars } from '@react-three/drei';

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

    // const Stars = () => {

    //     const vertices: any[] = [];

    //     const geometry = new BufferGeometry();

    //     for (let i = 0; i < 6000; i ++) {
    //         const star = [
    //             Math.random() * 600 - 300,
    //             Math.random() * 600 - 300,
    //             Math.random() * 600 - 300,
    //         ]
    //         vertices.push(...star)
    //     }

    //     geometry.setAttribute("position", new Float32BufferAttribute(vertices, 3))

    //     const sprite = new TextureLoader().load("/star.png")
    //     const starMaterial = new PointsMaterial({
    //         size: 4,
    //         map: sprite,
    //         transparent: true
    //     })
    //     return (
    //         <points 
    //             geometry={geometry}
    //             material={starMaterial}
    //             >
    //         </points>
    //     )
    // };


    return (
        <div 
            ref={scene}
            className={classes.root}>
            <Canvas >
                <Suspense fallback={null}>
                    <perspectiveCamera 
                        position={[Math.PI / 2, Math.PI / 2, 1]}
                        args={[60, 1000 / 800, 1, 1000]}/>
                    <Stars radius={300} depth={60} count={10000} />
                </Suspense>
            </Canvas>
            
        </div>
    )
};

export default Background;