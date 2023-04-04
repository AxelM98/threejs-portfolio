import React from "react";
import "./who.scss";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import Cube from "./../Cube";

const Who = () => {
  return (
    <div className="whoSection">
      <div className="whoContainer">
        <div className="whoLeft">
          <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
            <OrbitControls enableZoom={false} autoRotate />
            <ambientLight intensity={0.5} />
            <directionalLight position={[3, 2, 1]} />
            <Cube />
          </Canvas>
        </div>
        <div className="whoRight">
          <h1 className="whoH1">Bringing Ideas to Life</h1>
          <div className="whoWhatWeDo">
            <HorizontalRuleIcon className="whoLine" />
            <h2 className="whoSubtitle">Who we Are</h2>
          </div>
          <p className="whoDesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            quod.
          </p>
          <button className="whoButton">About</button>
        </div>
      </div>
    </div>
  );
};

export default Who;
