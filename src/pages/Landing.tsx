import React, { useState, useRef } from "react";
import styled from "styled-components";
import { Box } from "@material-ui/core";

import Back from "assets/images/BG.png";
import Girl from "assets/images/sportgirl.png";
import Scroll1 from "assets/images/scroll1.png";
import Scroll2 from "assets/images/scroll2.png";
import Scroll3 from "assets/images/scroll3.png";
import ViperBlack from "assets/images/Viperblack.png";

const Landing: React.FC = () => {
  const [viewNum, setViewNum] = useState(0);
  const [listenWheel, setListenWheel] = useState(true);

  const container = useRef<any>();
  const homeTitle = useRef<any>();
  const hfafTitle = useRef<any>();
  const scrollBtn = useRef<any>();
  const girlImg = useRef<any>();
  const viperImg = useRef<any>();
  const viperTitle = useRef<any>();
  const titleBoxOne = useRef<any>();
  const titleBoxTwo = useRef<any>();
  const viperSideText = useRef<any>();

  const wheeling = (event: any) => {
    if (listenWheel) {
      if (event.deltaY < 0) {
        if (viewNum < 2) {
          setListenWheel(false);
          scrollUp();
          setViewNum(viewNum + 1);
          setTimeout(() => {
            setListenWheel(true);
          }, 500);
        }
      } else if (event.deltaY > 0) {
        if (viewNum > 0) {
          setListenWheel(false);
          scrollDown();
          setViewNum(viewNum - 1);
          setTimeout(() => {
            setListenWheel(true);
          }, 500);
        }
      }
    }
  };

  const scrollDown = () => {
    if(viewNum === 2) {
      container.current.style.backgroundSize = "2592.75px 1080.31px";
      container.current.style.backgroundPosition = "-686px -452px";
      girlImg.current.style.width = "337.21px";
      girlImg.current.style.height = "520px";
      girlImg.current.style.right = "30.42%";
      girlImg.current.style.bottom = "0px";
      girlImg.current.style.opacity = "1";
      hfafTitle.current.style.width =window.innerWidth> 1300 ? "520px":"390px";
      hfafTitle.current.style.height =window.innerWidth > 1300 ? "313px" : "234px";
      hfafTitle.current.style.top = "180px";
      hfafTitle.current.style.left = "122px";
      hfafTitle.current.style.opacity = "1";
      hfafTitle.current.children[0].children[0].style.fontSize =window.innerWidth>=1300? "74px": "55px";
      hfafTitle.current.children[0].children[0].style.height =window.innerWidth >= 1300 ? "89px" : "68px";
      hfafTitle.current.children[0].children[0].style.width =window.innerWidth >= 1300 ? "430px" : "322px";
      hfafTitle.current.children[0].children[0].style.transition = "2s";
      hfafTitle.current.children[0].children[1].style.fontSize =window.innerWidth >= 1300 ? "14px" : "10px";
      hfafTitle.current.children[0].children[1].style.width =window.innerWidth >=1300 ? "420px" : "315px";
      hfafTitle.current.children[0].children[1].style.transition = "2s";
      hfafTitle.current.children[0].children[2].style.transition = "2s";
      hfafTitle.current.children[0].children[2].style.fontSize =window.innerWidth >= 1300 ? "16px" : "12px";
      hfafTitle.current.children[0].children[2].style.width =window.innerWidth >= 1300 ? "188px" : "141px";
      hfafTitle.current.children[0].children[2].style.left =window.innerWidth >= 1300 ? "45px" : "35px";
      viperImg.current.style.opacity = 0.5;
      viperImg.current.style.width = "66.67px";
      viperImg.current.style.height ="100px";
      viperImg.current.style.left =window.innerWidth >= 1300 ? "701px" : "525px";
      viperImg.current.style.top = "154px";
      viperImg.current.style.filter = "blur(15px)";
      viperTitle.current.style.width ="96.67px";
      viperTitle.current.style.height ="40px";
      viperTitle.current.style.opacity = "0";
      viperTitle.current.children[0].style.fontSize ="12.33px";
      viperTitle.current.children[0].style.transition = "2s";
      viperTitle.current.children[1].style.fontSize ="2.33px";
      viperTitle.current.children[1].style.fontFamily = "Space Mono";
      viperTitle.current.children[1].style.transition = "2s";
      viperTitle.current.children[2].style.fontSize ="2.67px";
      viperTitle.current.children[2].style.width ="50px";
      viperTitle.current.children[2].style.transition = "2s";
      titleBoxOne.current.style.opacity = "0";
      titleBoxTwo.current.style.opacity = "0";
      viperSideText.current.style.opacity = "0";
      viperSideText.current.style.right = window.innerWidth >= 1300 ? "-331px" : "-200px";
      viperSideText.current.style.transitionDelay = "0s";
    }
    if(viewNum === 1) {
      container.current.style.backgroundSize = "100% 100%";
      container.current.style.backgroundPosition = "top";
      hfafTitle.current.style.top = "-370px";
      hfafTitle.current.style.opacity = "0";
      homeTitle.current.style.top = "132px";
      homeTitle.current.style.opacity = "1";
      scrollBtn.current.style.bottom = "35px";
      girlImg.current.style.width = "156px";
      girlImg.current.style.height = "260px";
      viperImg.current.style.opacity = 0;
    }
  }

  const scrollUp = () => {
    if (viewNum === 0) {
      console.log(container.current.style);
      container.current.style.backgroundSize = "2592.75px 1080.31px";
      container.current.style.backgroundPosition = "-686px -452px";
      hfafTitle.current.style.top = "180px";
      hfafTitle.current.style.opacity = "1";
      homeTitle.current.style.top = "602px";
      homeTitle.current.style.opacity = "0";
      scrollBtn.current.style.bottom = "-200px";
      girlImg.current.style.width = "337.21px";
      girlImg.current.style.height = "520px";
      viperImg.current.style.opacity = 0.5;
      viperImg.current.style.filter = "blur(15px)";
    }
    if (viewNum === 1) {
      container.current.style.backgroundSize = "3635.89px 1709.38px";
      container.current.style.backgroundPosition = "-703px -452px";
      girlImg.current.style.width = "472.88px";
      girlImg.current.style.heigt = "729.21px";
      girlImg.current.style.right = "-500.46px";
      girlImg.current.style.bottom = "-428.86px";
      girlImg.current.style.opacity = "0";
      hfafTitle.current.style.width = "729.21px";
      hfafTitle.current.style.height = "438.93px";
      hfafTitle.current.style.top = "100%";
      hfafTitle.current.style.left = "0px";
      hfafTitle.current.style.opacity = "0";
      hfafTitle.current.children[0].children[0].style.fontSize = "103.6px";
      hfafTitle.current.children[0].children[0].style.height = "124.6px";
      hfafTitle.current.children[0].children[0].style.width = "602px";
      hfafTitle.current.children[0].children[0].style.transition = "2s";
      hfafTitle.current.children[0].children[1].style.fontSize = "19.6px";
      hfafTitle.current.children[0].children[1].style.width = "588px";
      hfafTitle.current.children[0].children[1].style.transition = "2s";
      hfafTitle.current.children[0].children[2].style.transition = "2s";
      hfafTitle.current.children[0].children[2].style.fontSize = "22.4px";
      hfafTitle.current.children[0].children[2].style.width = "263.2px";
      hfafTitle.current.children[0].children[2].style.left = "63px";
      viperImg.current.style.opacity = 1;
      viperImg.current.style.width =
        window.innerWidth >= 1300 ? "403px" : "301px";
      viperImg.current.style.height =
        window.innerWidth >= 1300 ? "544px" : "408px";
      if (window.innerWidth > 1600) viperImg.current.style.left = "1088px";
      else if (window.innerWidth >= 1300) viperImg.current.style.left = "788px";
      else if (window.innerWidth >= 900) viperImg.current.style.left = "590px";
      else viperImg.current.style.left = "490px";
      viperImg.current.style.top = window.innerWidth >= 1300 ? "66px" : "96px";
      viperImg.current.style.filter = "blur(0px)";
      viperTitle.current.style.width =
        window.innerWidth >= 1300 ? "580px" : "435px";
      viperTitle.current.style.height =
        window.innerWidth >= 1300 ? "239px" : "180px";
      viperTitle.current.style.opacity = "1";
      viperTitle.current.children[0].style.fontSize =
        window.innerWidth >= 1300 ? "74px" : "55px";
      viperTitle.current.children[0].style.transition = "2s";
      viperTitle.current.children[1].style.fontSize =
        window.innerWidth >= 1300 ? "14px" : "10px";
      viperTitle.current.children[1].style.fontFamily = "Space Mono";
      viperTitle.current.children[1].style.transition = "2s";
      viperTitle.current.children[2].style.fontSize =
        window.innerWidth >= 1300 ? "16px" : "12px";
      viperTitle.current.children[2].style.width =
        window.innerWidth >= 1300 ? "190px" : "142px";
      viperTitle.current.children[2].style.transition = "2s";
      titleBoxOne.current.style.opacity = "1";
      titleBoxTwo.current.style.opacity = "1";
      viperSideText.current.style.opacity = "1";
      viperSideText.current.style.right = "0px";
      viperSideText.current.style.transitionDelay = "2s";
    }
  };

  return (
    <StyledContainer
      onWheel={(e) => {
        wheeling(e);
      }}
      {...{ ref: container }}
    >
      <Hometitle
        position="absolute"
        top="132px"
        left="122px"
        padding="42px 45px 25px 45px"
        {...{ ref: homeTitle }}
      >
        <BgText>
          Black only.
          <br />
          high fashion Sportswear.
        </BgText>
      </Hometitle>
      <GirlImg {...{ ref: girlImg }}>
        <img src={Girl} alt="" style={{ width: "100%", height: "100%" }} />
      </GirlImg>
      <ScrollToExplore {...{ ref: scrollBtn }}>
        <Box>
          <img src={Scroll1} alt="" />
        </Box>
        <Box mt="5px">
          <img src={Scroll2} alt="" />
        </Box>
        <Box mt="3px">
          <img src={Scroll3} alt="" />
        </Box>
        <Box mt={2}>Scroll to explore</Box>
      </ScrollToExplore>
      <HFAFTitle {...{ ref: hfafTitle }}>
        <Box position="relative" width="100%" height="100%">
          <Box
            width="430px"
            height="89px"
            margin="auto"
            fontSize="74px"
            paddingTop="50px"
          >
            HFAF
          </Box>
          <Box
            width="420px"
            height="42px"
            margin="auto"
            fontSize="14px"
            lineHeight="21px"
            fontFamily="Space Mono"
          >
            It's time to meet our{" "}
            <span
              style={{
                color: "white",
                backgroundColor: "#101010",
                fontFamily: "Space Mono",
              }}
            >
              {" "}
              new drop.{" "}
            </span>
            <br />
            High-quality design for your unique look.
          </Box>
          <Box
            position="absolute"
            width="188px"
            height="38px"
            left="45px"
            bottom="45px"
            border="1px solid #101010"
            display="flex"
            alignItems="center"
            fontSize="16px"
          >
            <Box margin="auto">Explore the drop</Box>
          </Box>
        </Box>
      </HFAFTitle>
      <ViperImg {...{ ref: viperImg }}>
        <img
          src={ViperBlack}
          alt=""
          style={{ width: "100%", height: "100%" }}
        />
      </ViperImg>
      <ViperTitle {...{ ref: viperTitle }}>
        <Box width="100%" fontSize="12.33px">
          VIPERBLACK<sup>TM</sup>
        </Box>
        <Box width="72.5%" fontSize="2.33px">
          We made it. A shirt that is far blacker than any
          <br />
          other shirt out there,{" "}
          <span
            style={{
              color: "white",
              backgroundColor: "#101010",
              fontFamily: "Space Mono",
            }}
          >
            absorbing 99,6%
          </span>
          <br />
          of incoming light.
        </Box>
        <Box
          position="absolute"
          left="0px"
          bottom="0px"
          border="1px solid #101010"
          width="50px"
          display="flex"
          alignItems="center"
          fontSize="2.67px"
        >
          <Box margin="auto">Explore the drop</Box>
        </Box>
      </ViperTitle>
      <TitleBoxOne {...{ ref: titleBoxOne }}> </TitleBoxOne>
      <TitleBoxTwo {...{ ref: titleBoxTwo }}> </TitleBoxTwo>
      <ViperSideText {...{ ref: viperSideText }}>
        Now
        <br /> you too,
        <br /> can be
        <br /> a part of
        <br /> the very
        <br /> <span style={{ color: "#101010" }}>dark side.</span>
      </ViperSideText>
    </StyledContainer>
  );
};

const ViperSideText = styled(Box)`
  position: absolute;
  width: 331px;
  height: 528px;
  right: -331px;
  top: 10px;
  opacity: 0;

  font-style: normal;
  font-weight: 250;
  font-size: 68px;
  line-height: 88px;

  text-transform: lowercase;
  transition: 2s;
  //transition-delay: 2s;
  color: #fbfbfb;
  @media only screen and (max-width: 1300px) {
    width: 200px;
    height: 396px;
    right: -200px;
    top: 30px;
    font-size: 51px;
    line-height: 66px;
  }
`;

const TitleBoxTwo = styled(Box)`
  position: absolute;
  opacity: 0;
  transition: 2s;
  width: 342.47px;
  height: 151px;
  left: 50%;
  transform: translateX(-50%);
  top: -30px;
  background: #ffffff;
`;

const TitleBoxOne = styled(Box)`
  position: absolute;
  width: 307.66px;
  height: 116.19px;
  left: 50%;
  transform: translateX(-50%);
  top: -12.59px;
  opacity: 0;
  transition: 2s;
  background: #d1d1d1;
  filter: blur(21.7579px);
  z-index: 1;
`;

const ViperTitle = styled(Box)`
  color: #101010;
  transition: 2s;
  position: absolute;
  opacity: 0;
  width: 96.67px;
  height: 40px;
  left: 254px;
  top: 230px;
  @media only screen and (max-width: 1300px) {
    left: 190px;
    top: 172px;
  }
`;

const Hometitle = styled(Box)`
  transition: 2s;
  @media only screen and (max-width: 1300px) {
  }
`;

const ViperImg = styled(Box)`
  position: absolute;
  width: 66.67px;
  height: 100px;
  left: 701px;
  top: 154px;
  opacity: 0;
  transition: 2s;
  z-index: 10;
  @media only screen and (max-width: 1300px) {
    left: 525px;
  }
`;

const GirlImg = styled(Box)`
  position: absolute;
  bottom: 0px;
  right: 30.42%;
  width: 156px;
  height: 260px;
  transform: translateX(50%);
  transition: 2s;
`;

const HFAFTitle = styled(Box)`
  transition: 2s;
  position: absolute;
  top: -370px;
  left: 122px;
  width: 520px;
  height: 313px;
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(14px);
  color: 1px solid #101010;
  opacity: 0;
  @media only screen and (max-width: 1300px) {
    width: 390px;
    height: 234px;
    >div:first-of-type {
      >div:first-of-type {
        width: 322px;
        height: 68px;
        font-size: 55px;
        padding-top: 38px;
        transition: 2s;
      }
      >div:nth-of-type(2){
        width: 315px;
        font-size: 10px;
        line-height: 15px
        transition: 2s;
      }
      >div:last-of-type {
        width:141px;
        left: 35px;
        bottom: 35px;
        font-size: 12px;
        height: 27px;
        transition: 2s;
      }
    }
  }
`;

const ScrollToExplore = styled(Box)`
  transition: 2s;
  position: absolute;
  bottom: 35px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  > div {
    display: flex;
  }
  > div:last-of-type {
    font-weight: 250;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    color: #101010;
  }
`;

const BgText = styled(Box)`
  font-style: normal;
  font-weight: 250;
  font-size: 74px;
  line-height: 89px;
  text-transform: lowercase;
  max-width: 430px;
  @media only screen and (max-width: 1300px) {
    font-size: 37px;
    line-height: 45px;
    max-width: 215px;
  }
`;

const StyledContainer = styled(Box)`
  position: relative;
  background: url(${Back});
  background-size: 100% 100%;
  min-height: 100vh;
  > div:first-of-type {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(14px);
    width: fit-content;
  }
  overflow: hidden;
  transition: 2s;
`;

export default Landing;
