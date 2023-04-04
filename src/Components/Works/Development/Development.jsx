import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import React_logo from "../../React_logo";
import "./development.scss";

const Development = () => {
  return (
    <>
      <Canvas>
        <Stage environment="city" intensity={0.6}>
          <OrbitControls enableZoom={false} autoRotate />
          <React_logo />
        </Stage>
      </Canvas>
      <div className="developmentDesc">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est,
        architecto.
      </div>
    </>
  );
};

export default Development;
