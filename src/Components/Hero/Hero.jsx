import React from "react";
import "./hero.scss";
import Navbar from "./../Navbar/Navbar";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";

const Hero = () => {
  return (
    <div className="heroSection">
      <Navbar />
      <div className="heroContainer">
        <div className="heroLeft">
          <h1 className="heroH1">Crafting Unique Web Experiences</h1>
          <div className="heroWhatWeDo">
            <HorizontalRuleIcon className="heroLine" />
            <h2 className="heroSubtitle">What we Do</h2>
          </div>
          <p className="heroDesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            quod.
          </p>
          <button className="heroButton">Learn More</button>
        </div>
        <div className="heroRight">
          <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1, 100, 200]} scale={2.4}>
              <MeshDistortMaterial
                color="#2b2d42"
                attach="material"
                distort={0.5}
                speed={2}
              />
            </Sphere>
          </Canvas>
          {/* <img src="./img/moon.png" className="hero3dImg" alt="" /> */}
          {/* <img src="./img/astronaut.png" className="hero3dImg" alt="" /> */}
          <img src="./img/astronauttwo.png" className="hero3dImg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
