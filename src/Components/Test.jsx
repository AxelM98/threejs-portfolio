import {
  OrbitControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cube from "./Cube";
import React from "react";
import "./test.scss";

const Test = () => {
  return (
    <div className="testContainer">
      <Canvas>
        <OrbitControls enableZoom={false} autoRotate />
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 2, 1]} />
        <Cube/>
      </Canvas>
    </div>
  );
};

export default Test;
