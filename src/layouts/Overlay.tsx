import React from "react";
import styled from "styled-components";
import { Box } from "@material-ui/core";

import OverlayTop from "assets/images/overlayTop.png";
import OverlayMain from "assets/images/overlayMain.png";
import OverMenu from "assets/images/overMenu.png";

interface Pros {
  isMenuOn: boolean;
  setIsMenuOn: any;
}

const Overlay: React.FC<Pros> = ({ isMenuOn, setIsMenuOn }) => {
  return (
    <StyledContainer isMenuOn={isMenuOn}>
      <Box width="327px">
        <MenuBtn
          onClick={() => {
            setIsMenuOn(!isMenuOn);
          }}
        >
          <Box>
            <img src={OverMenu} alt="" />
          </Box>
          <Text ml="15px">MENU</Text>
        </MenuBtn>
        <MenuContent><Box textAlign="center" width="100%">lookbooks</Box></MenuContent>
        <MenuContent><Box textAlign="center" width="100%">about</Box></MenuContent>
        <MenuContent><Box textAlign="center" width="100%">instagram</Box></MenuContent>
        <MenuContent><Box textAlign="center" width="100%">collaborate</Box></MenuContent>
        <MenuContent><Box textAlign="center" width="100%">contact</Box></MenuContent>
      </Box>
      <Box
        width="calc(100% - 327px)"
        onClick={() => {
          setIsMenuOn(false);
        }}
      >
        <Box height="80px" width="100%"> 
          <img src={OverlayTop} alt="" style={{height:"100%", width:"100%"}}/>
        </Box>
        <Box height="calc(100% - 80px)" width="100%">
          <img src={OverlayMain} alt="" style={{height:"100%", width:"100%"}}/>
        </Box>
      </Box>
    </StyledContainer>
  );
};

const MenuContent = styled(Box)`
  display: flex;
  align-items:center;
  height: 104px;
  color: #fbfbfb;
  font-size: 18px;
`;

const Text = styled(Box)`
  font-weight: 250px;
  font-size: 14px;
  line-height: 16.8px;
  letter-spacing: 3%;
  text-align: center;
  color: #fbfbfb;
`;

const MenuBtn = styled(Box)`
  padding-left: 24px;
  padding-right: 22px;
  display: flex;
  align-items: center;
  width: 75px;
  height: 80px;
  border-right: 1px solid #c4c4c4;
  border-bottom: 1px solid #c4c4c4;
`;

const StyledContainer = styled(Box)<{ isMenuOn: any }>`
  position: fixed;
  inset: 0px;
  z-index: 30;
  opacity: ${({ isMenuOn }) => (isMenuOn ? 1 : 0)};
  height: ${({ isMenuOn }) => (isMenuOn ? "auto" : "0px")};
  ${({ isMenuOn }) => !isMenuOn && 'pointer-events: none;'}
  ${({ isMenuOn }) => !isMenuOn && 'scroll-events: none;'}
  transition: opacity 0.3s ease-in-out 0s;
  background-color: rgba(0, 0, 0, 1);
  display: flex;
  justify-content: flex-start;
`;

export default Overlay;
