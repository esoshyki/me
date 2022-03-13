import { Fragment } from "react";
import classes from "./Planet.module.sass";
import { Suspense, useRef } from "react";
import { Canvas, useFrame, useLoader } from "react-three-fiber";
import * as three from "three";
import { TextureLoader } from "three";

const Earth = () => {
  const earth = useRef<three.Mesh>();

  useFrame(() => {
    earth.current!.rotation.y += 0.001;
  });

  const [colorMap] = useLoader(TextureLoader, ["/earth.jpeg"]);

  return (
    <mesh ref={earth} position={[-1, -1, 0]}>
      <sphereBufferGeometry args={[1, 50, 50]} />
      <meshStandardMaterial map={colorMap} />
    </mesh>
  );
};

const Scene = () => {
  return (
    <Fragment>
      <pointLight intensity={0.5} position={[3, 3, 5]} />
      <Earth />
      {/* <Atmoshpere /> */}
    </Fragment>
  );
};

const Planet = () => {
  return (
      <div className={classes.root}>
        <Canvas
          camera={{
            near: 0.5,
            far: 500,
            zoom: 2,
          }}
          onCreated={({ gl }) => {
            gl.setClearColor("#fff)", 0);
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
