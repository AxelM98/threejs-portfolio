import React from "react";
import { PerspectiveCamera, RenderTexture, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Cube = () => {
  const textRef = useRef();
  useFrame(
    (state) =>
      (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 1.5)
  );
  return (
    <mesh>
      <boxGeometry />
      <meshStandardMaterial>
        <RenderTexture attach="map">
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <color attach="background" args={["#2b2d42"]} />
          <Text ref={textRef} fontSize={2} color="#6481b2">
            XVI
          </Text>
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  );
};

export default Cube;
