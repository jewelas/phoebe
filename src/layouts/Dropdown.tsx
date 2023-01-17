import React from "react";
import styled from "styled-components";
import { Box } from "@material-ui/core";


interface Pros {
  isDropDownOn: boolean;
}

const Dropdown: React.FC<Pros> = ({ isDropDownOn}) => {
  return (
    <StyledContainer isDropDownOn={isDropDownOn}>
      <DropdownContent>HFAF</DropdownContent>
      <DropdownContent>Viperblack<sup>TM</sup></DropdownContent>
      <DropdownContent>Reflective</DropdownContent>
      <DropdownContent>VampireBlack</DropdownContent>
      <DropdownContent>Sportlens</DropdownContent>
      <DropdownContent>CovidMask</DropdownContent>
      <DropdownContent>Collection</DropdownContent>
    </StyledContainer>
  );
};

const DropdownContent = styled(Box)`
    padding-left: 16px;
    display: flex;
    align-items: center;
    width: 102px;
    border: 1px solid #c4c4c4;
    border-top: none;
    font-size: 14px;
    height: 39px;
`;

const StyledContainer = styled(Box)<{ isDropDownOn: any }>`
  position: absolute;
  left: calc(100% - 120px) !important;
  top: 81px !important;
  width: 120px;
  border-top: 1px solid #c4c4c4;
  inset: 0px;
  z-index: 30;
  overflow: hidden;
  opacity: ${({ isDropDownOn }) => (isDropDownOn ? 1 : 0)};
  max-height: ${({ isDropDownOn }) => (isDropDownOn ? "280px" : "0px")};
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(4px);
  transition: 0.3s ease-in-out 0s;
`;

export default Dropdown;
