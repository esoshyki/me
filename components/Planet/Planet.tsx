import classes from "./Planet.module.sass";
import { Suspense, useRef, Fragment } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as three from "three";
import { AdditiveBlending, BackSide, TextureLoader, } from "three";

const glsl = require("glslify");

const shaders = {
    vertexShader: 
        glsl`
            varying vec2 vertexUV;
            varying vec3 vertexNormal;
            void main() {
                vertexUV =  uv;
                vertexNormal = normalize(normalMatrix * normal);
                gl_Position = projectionMatrix * modelViewMatrix * vec4(
                    position, 1.0
                );
            }
        `,
    fragmentShader: 
        glsl`
            uniform sampler2D globalTexture;
            varying vec2 vertexUV;
            varying vec3 vertexNormal;
            void main() {

                float intensity = 1.05 - dot(vertexNormal, vec3(0.0, 0.0, 1.0));
                vec3 atmosphere = vec3(0.3, 0.6, 1.0) * pow(intensity, 1.5);

                gl_FragColor = vec4(atmosphere + texture2D(globalTexture, vertexUV).xyz, 1.0);
            }
        `,
    atmosphereVertex: glsl`
        varying vec3 vertexNormal;
        void main() {
            vertexNormal = normalize(normal);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(
                position, 0.9
            );
    }
    `,
    atmosphereFragment: glsl`
        varying vec3 vertexNormal;
        void main() {
            float intensity = pow(0.5 - dot(vertexNormal, vec3(0, 0, 1.0)), 2.0);
            gl_FragColor = vec4(0.3, 0.6, 1.0, 1) * intensity;
        }
    `
}


const Earth = () => {
    const earth = useRef<three.Mesh>();

    useFrame(() => {
        earth.current!.rotation.y += 0.001;
    });

    return (
        <mesh ref={earth} position={[0, 0, 0]}>
            <sphereBufferGeometry args={[1, 50, 50]} />
            <shaderMaterial 
                vertexShader={shaders.vertexShader}
                fragmentShader={shaders.fragmentShader}
                uniforms={{globalTexture: {
                    value: new TextureLoader().load("/earth.jpeg")
                }}}
            />
        </mesh>
    );
};

const Atmosphere = () => {

    const atm = useRef<three.Mesh>();

    useFrame(() => {
        atm.current?.scale.set(1.1, 1.1, 1.1)
    });

    return (
        <mesh ref={atm} position={[0, 0, 0]}>
            <sphereBufferGeometry args={[1, 50, 50]} />
            <shaderMaterial 
                vertexShader={shaders.atmosphereVertex}
                fragmentShader={shaders.atmosphereFragment}
                blending={AdditiveBlending}
                side={BackSide}
            />
        </mesh>
    );
};

const Scene = () => {

    return (
        <Fragment>
            <ambientLight intensity={1}/>
            <pointLight intensity={1.5} position={[3, 0, 2]} />
            <Atmosphere />
            <Earth />
        </Fragment>
    );
};


const Planet = () => {

    return (
        <div className={classes.root}>
            <Canvas
                camera={{
                    near: 0.6,
                    far: 1000,
                    zoom: 1,
                    isPerspectiveCamera: true
                }}
                onCreated={({ gl }) => {
                    gl.setClearColor("rgb(255, 0, 0)", 0);
                }}
            >
                <Suspense fallback={null}>
                    <Scene />
                </Suspense>
            </Canvas>
        </div>
    );
};

export default Planet;
