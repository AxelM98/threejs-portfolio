import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Chart_bio from "../../Chart_bio";
import "./eCommerce.scss";

const ECommerce = () => {
  return (
    <>
      <Canvas>
        <Stage>
          <OrbitControls enableZoom={true} autoRotate />
          <Chart_bio />
        </Stage>
      </Canvas>
      <div className="eCommerceDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, ex.
        Vel, eos.
      </div>
    </>
  );
};

export default ECommerce;
