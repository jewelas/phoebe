import React, { useState, useRef} from "react";
import PropTypes from "prop-types";
import { Box } from "@material-ui/core";
import styled from "styled-components";

import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Overlay from "./Overlay";
import Dropdown from "./Dropdown";



interface Props {
  children?: any;
}

const Layout: React.FC<Props> = ({ children }: any) => {
  const [isMenuOn, setIsMenuOn] = useState(false);
  const [isDropDownOn, setIsDropDownOn] = useState(false);
  const bodyRef = useRef<any>();



  return (
    <StyledContainer>
      <Topbar isMenuOn={isMenuOn} setIsMenuOn={setIsMenuOn} isDropDownOn={isDropDownOn} setIsDropDownOn={setIsDropDownOn}/>
      <Sidebar />
      <Overlay isMenuOn={isMenuOn} setIsMenuOn={setIsMenuOn}/>
      <Dropdown isDropDownOn={isDropDownOn}/>
      <Body component="main" {...{ ref: bodyRef }} onClick={() => {setIsDropDownOn(false)}}>
        {children}
      </Body>
      <Footer />
    </StyledContainer>
  );
};



const StyledContainer = styled(Box)`
  flex-direction: column;
  min-height: 100%;
  background-color: rgb(255, 255, 255);
  position: relative;
`;

const Body = styled(Box)`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: auto;
`;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
