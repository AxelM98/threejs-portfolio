import React from "react";
import { PerspectiveCamera, RenderTexture } from "@react-three/drei";

const Dodecahedron = () => {
  return (
    <mesh>
      <dodecahedronGeometry args={[2]} />
      <meshStandardMaterial>
        <RenderTexture attach="map">
          <PerspectiveCamera makeDefault />
          <color attach="background" args={["#2b2d42"]}/>
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  );
};

export default Dodecahedron;
