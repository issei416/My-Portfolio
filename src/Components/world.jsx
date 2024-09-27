import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Earth from "../../public/Earth.jsx";
import "../Styles/World.css";

const worldAnimation = () => {
  return (
    <>
      <Canvas camera={{ position: [2, 0, 5], fov: 70 }} >
        <ambientLight />
        <OrbitControls enableZoom={false} />
        <Suspense fallback={null}>
          <Earth scale={[1.5, 1.5, 1.5]} /> {/* Adjust scale as needed */}
        </Suspense>
        <Environment preset="night" />
      </Canvas>
    </>
  );
};

export default worldAnimation;
