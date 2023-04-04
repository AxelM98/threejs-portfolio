import React, { useState } from "react";
import "./works.scss";
import styled from "styled-components";
import ECommerce from "./ECommerce/ECommerce";
import Development from "./Development/Development";
import GameDesign from "./GameDesign/GameDesign";

const data = [
  "Development",
  "Game Design",
  "Data Analytics",
  "Web Design",
  "E-Commerce",
];

const ListItem = styled.li`
  font-size: 80px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;
  @media only screen and (max-width: 768px) {
    font-size: 24px;
    color: white;
    -webkit-text-stroke: 0px;
  }
  ::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: #6481b2;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }
  &:hover {
    ::after {
      animation: moveText 0.5s linear both;
      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }
`;

const Works = () => {
  const [work, setWork] = useState("Development");
  return (
    <div className="worksSection">
      <div className="worksContainer">
        <div className="worksLeft">
          <ul className="worksUl">
            {data.map((item) => (
              <ListItem
                className="worksLi"
                text={item}
                key={item}
                onClick={() => setWork(item)}
              >
                {item}
              </ListItem>
            ))}
          </ul>
        </div>
        <div className="worksRight">
          {work === "Development" ? (
            <Development />
          ) : work === "Game Design" ? (
            <GameDesign />
          ) : (
            <ECommerce />
          )}
        </div>
      </div>
    </div>
  );
};

export default Works;
