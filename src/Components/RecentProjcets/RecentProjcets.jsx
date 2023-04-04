import React from "react";
import "./recentProjcets.scss";
import styled from "styled-components";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
`;

const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 85%;
  height: 85%;
  gap: 30px;
`;

const Text = styled.p`
  text-align: center;
`;

const Button = styled.button`
  width: fit-content;
  background-color: transparent;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 10px;
  border-radius: 1.5rem;
  color: white;
  border: 1px solid #007bff;
  transition: all 0.5s ease;
  cursor: pointer;
  &:hover {
    background-color: #007bff;
  }
`;

const GalleryItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  overflow: hidden;
  height: 200px;
  min-width: 270px;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  z-index: 2;
`;

const RecentProjcets = () => {
  return (
    <div className="rpSection">
      <div className="rpContainer">
        <div className="rpLeft">
          <div className="rpGallery">
            <GalleryItemContainer className="rpGalleryItem">
              <Image src="/img/recentsix.jpg" alt="" />
              <Info>
                <InfoContent>
                  <Text>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Cupiditate, consectetur!
                  </Text>
                  <Button>
                    Visit Website
                    <ArrowForwardIosIcon style={{ fontSize: 15 }} />
                  </Button>
                </InfoContent>
              </Info>
            </GalleryItemContainer>
            <GalleryItemContainer className="rpGalleryItem">
              <Image src="/img/recentseven.jpg" alt="" />
              <Info>
                <InfoContent>
                  <Text>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Cupiditate, consectetur!
                  </Text>
                  <Button>
                    Visit Website
                    <ArrowForwardIosIcon style={{ fontSize: 15 }} />
                  </Button>
                </InfoContent>
              </Info>
            </GalleryItemContainer>
            <GalleryItemContainer className="rpGalleryItem">
              <Image src="/img/recenttwo.jpg" alt="" />
              <Info>
                <InfoContent>
                  <Text>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Cupiditate, consectetur!
                  </Text>
                  <Button>
                    Visit Website
                    <ArrowForwardIosIcon style={{ fontSize: 15 }} />
                  </Button>
                </InfoContent>
              </Info>
            </GalleryItemContainer>
            <GalleryItemContainer className="rpGalleryItem">
              <Image src="/img/recentthree.jpg" alt="" />
              <Info>
                <InfoContent>
                  <Text>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Cupiditate, consectetur!
                  </Text>
                  <Button>
                    Visit Website
                    <ArrowForwardIosIcon style={{ fontSize: 15 }} />
                  </Button>
                </InfoContent>
              </Info>
            </GalleryItemContainer>
            <GalleryItemContainer className="rpGalleryItem">
              <Image src="/img/recentfour.jpg" alt="" />
              <Info>
                <InfoContent>
                  <Text>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Cupiditate, consectetur!
                  </Text>
                  <Button>
                    Visit Website
                    <ArrowForwardIosIcon style={{ fontSize: 15 }} />
                  </Button>
                </InfoContent>
              </Info>
            </GalleryItemContainer>
            <GalleryItemContainer className="rpGalleryItem">
              <Image src="/img/recentfive.jpg" alt="" />
              <Info>
                <InfoContent>
                  <Text>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Cupiditate, consectetur!
                  </Text>
                  <Button>
                    Visit Website
                    <ArrowForwardIosIcon style={{ fontSize: 15 }} />
                  </Button>
                </InfoContent>
              </Info>
            </GalleryItemContainer>
          </div>
        </div>
        <div className="rpRight">
          <h1 className="rpH1">Custom Web Development</h1>
          <div className="rpWhatWeDo">
            <HorizontalRuleIcon className="rpLine" />
            <h2 className="rpSubtitle">What we Do</h2>
          </div>
          <p className="rpDesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            quod.
          </p>
          <button className="rpButton">See our Works</button>
        </div>
      </div>
    </div>
  );
};

export default RecentProjcets;
