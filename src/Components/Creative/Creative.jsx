import React from "react";
import "./creative.scss";
import DevicesOutlinedIcon from "@mui/icons-material/DevicesOutlined";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import Dodecahedron from "../Dodecahedron";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Creative = () => {
  return (
    <div className="creativeContainer">
      <div className="creativeWrapper">
        <div className="creativeLeft">
          <h1 className="creativeH1">Creative Problem Solving</h1>
          <p className="creativeP">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            voluptas illum maiores.
          </p>
          <p className="creativeP sp2">Lorem ipsum dolor sit amet?</p>
          <div className="creativeBtnContainer">
            <button className="creativeBtn creativeBtnGold">
              <CloudOutlinedIcon className="creativeIconGold" />
              Lorem, ipsum dolor.
            </button>
            <button className="creativeBtn creativeBtnPurple">
              <BusinessCenterOutlinedIcon className="creativeIconPurple" />
              Lorem, ipsum dolor.
            </button>
            <button className="creativeBtn creativeBtnBlue">
              <DevicesOutlinedIcon className="creativeIconBlue" />
              Lorem, ipsum dolor.
            </button>
            <button className="creativeBtn creativeBtnRed">
              <AccountTreeOutlinedIcon className="creativeIconRed" />
              Lorem, ipsum dolor.
            </button>
            <button className="creativeBtn creativeBtnOrange">
              <AccountBalanceOutlinedIcon className="creativeIconOrange" />
              Lorem, ipsum dolor.
            </button>
          </div>
        </div>
        <div className="creativeRight">
          <Canvas>
            <Stage environment="city" intensity={0.6}>
              <OrbitControls enableZoom={false} autoRotate />
              <Dodecahedron />
            </Stage>
          </Canvas>
        </div>
      </div>
    </div>
  );
};

export default Creative;
