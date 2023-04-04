import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Game_design from "../../Game_design";
import "./gameDesign.scss";

const GameDesign = () => {
  return (
    <>
      <Canvas>
        <Stage>
          <OrbitControls enableZoom={true} autoRotate />
          <Game_design />
        </Stage>
      </Canvas>
      <div className="gameDesignDesc">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem
        laborum ut quis eius quam incidunt libero ipsa reprehenderit delectus.
        Nostrum?
      </div>
    </>
  );
};

export default GameDesign;
