import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, SpotLight } from "@react-three/drei";
import Model from "./Model";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  return (
    <group>
      <Model
        scale={isMobile ? 1 : 2.75}
        position={isMobile ? [-1, -1.5, 3] : [3.5, -2.6, 0]}
        rotation={isMobile ? [0, -0.2, 0] : [0, -0.6, 0.01]}
      />
      <mesh 
      position={isMobile ? [-0.3 , -2.5 ,1] : [3.5, -3.0, 0]} 
      rotation={[-0.2, 0, -0.05]} 
      >
        <cylinderGeometry args={isMobile ? [1, 1, 0.2, 32] : [1, 1, 0.5, 32]} />
        <meshStandardMaterial color="#454545" />
      </mesh>
    </group>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-2, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <ambientLight intensity={1.5} />
        <pointLight position={[1, 1, 1]} />
        <directionalLight intensity={2.5} position={[0, 0.1, 0.1]} />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
