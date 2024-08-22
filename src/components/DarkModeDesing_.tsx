import React from "react";
import styled from "styled-components";

export const DarkModeDesing_ = () => {
  return (
    <DarkContainer>
    <DarkLaptop>
      <DarkContentBlock></DarkContentBlock>
      <DarkLineDivider />
      <DarkScreen>
        <DarkContentLinesSlim>
          <DarkLineSlim />
          <DarkLineSlim_3 />
          <DarkLineSlim />
          <DarkLineSlim />
        </DarkContentLinesSlim>
        <DarkContentLinesWide>
          <DarkLineWide_1 />
          <DarkLineWide />
          <DarkLineWide />
        </DarkContentLinesWide>
        <DarkContentLines>
          <DarkLine />
          <DarkLine />
          <DarkLine />
          <DarkLine />
          <DarkLine />
          <DarkLastLine />
        </DarkContentLines>
      </DarkScreen>
    </DarkLaptop>
    <DarkStartX $left="59px" $top="27px" $width="3px" $height="1px" />
    <DarkStartY $left="60px" $top="24.5px" $width="1px" $height="4px" />
    <DarkStartX $left="30px" $top="40px" $width="2px" $height="1px" />
    <DarkStartY $left="31px" $top="37.5px" $width="1px" $height="2px" />
    <DarkStartX $left="55px" $top="55px" $width="2px" $height="1px" />
    <DarkStartY $left="55.5px" $top="53.5px" $width="1px" $height="2px" />
    <DarkTreeStem></DarkTreeStem>
    <DarkTreeBranch></DarkTreeBranch>
    <DarkTree></DarkTree>
    <DarkTreeStem_2 />
    <DarkTreeBranch_2 />
    <DarkTree_2 />
    <DarkTreeStem_3 />
    <DarkTreeBranch_3 />
    <DarkTree_3 />
    <DarkTreeStem_4 />
    <DarkTreeBranch_4 />
    <DarkTree_4 />
    <DarkMoon />
    <Darkcloud />
    <Darkcloud_2 />
    <Darkcloud_3 />
  </DarkContainer>
  );
};

const DarkContainer = styled.div`
  position: relative;
  width: 330px;
  height: 150px;
  border-bottom: 1px solid #4a4a4a;
  z-index: 0;
`;
const DarkStartX = styled.div<{ $left: string; $top: string; $width: string; $height: string }>`
  position: relative;
  left: ${(props) => props.$left};
  top: ${(props) => props.$top};
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  background-color: #fff;
  z-index: 0;
`;
const DarkStartY = styled.div<{ $left: string; $top: string; $width: string; $height: string }>`
  position: relative;
  left: ${(props) => props.$left};
  top: ${(props) => props.$top};
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  background-color: grey;
  z-index: -1;
`;
const DarkLaptop = styled.div`
  position: absolute;
  left: 85px;
  bottom: 0px;
  width: 160px;
  height: 110px;
  border: 5px solid #3b3c3c;
  border-radius: 5px;
`;
const DarkScreen = styled.div`
  display: flex;
  flex-direction: row;
`;
const DarkContentBlock = styled.div`
  margin-left: 115px;
  margin-top: 7px;
  width: 25px;
  height: 11px;
  background-color: #1c8e99;
  margin-bottom: 7px;
  border-radius: 2px;
`;
const DarkLineDivider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #3b3c3c;
`;
const DarkContentLinesSlim = styled.div`
  margin-top: 2px;
  width: 20%;
  padding: 10px;
`;
const DarkLineSlim = styled.div`
  height: 2px;
  background-color: #4a4a4a;
  margin-bottom: 5px;
`;
const DarkLineSlim_3 = styled.div`
  height: 2px;
  background-color: #1c8e99;
  margin-bottom: 5px;
`;
const DarkContentLinesWide = styled.div`
  margin-top: 6px;
  width: 30%;
  padding: 4px;
`;
const DarkLineWide_1 = styled.div`
  height: 12.5px;
  background-color: #636768;
  margin-bottom: 5px;
`;
const DarkLineWide = styled.div`
  height: 12.5px;
  background-color: #393939;
  margin-bottom: 5px;
`;
const DarkContentLines = styled.div`
  width: 50%;
  padding: 10px;
`;
const DarkLine = styled.div`
  height: 4px;
  background-color: #4a4a4a;
  margin-bottom: 5px;
`;
const DarkLastLine = styled.div`
  height: 3px;
  background-color: #4a4a4a;
  margin-bottom: 5px;
  width: 60%;
`;
const DarkTreeStem = styled.div`
  position: absolute;
  left: 30px;
  bottom: 0px;
  width: 2px;
  height: 42px;
  background-image: linear-gradient(to bottom, #737373, #737373);
  clip-path: polygon(0% 100%, 100% 100%, 80% 0%, 80% 0%);
  z-index: 0;
`;
const DarkTreeBranch = styled.div`
  position: absolute;
  left: 31px;
  bottom: 17px;
  width: 4px;
  height: 1px;
  background-image: linear-gradient(to right, #737373, #a5a5a5);
  transform: rotate(-40deg);
  transform-origin: left center;
  border-radius: 0 1px 0 0;
`;
const DarkTree = styled.div`
  position: absolute;
  left: 16.5px;
  bottom: 28px;
  width: 29px;
  height: 29px;
  background-color: #114f55;
  border-radius: 50% 50% 50% 50%;
  box-shadow: inset 9px -3px 1px -7px #0e3f44, inset 3px -5px 1px -1px #0e3f44,
    inset -2px -8px 1px -5px #0e3f44;
  z-index: -1;
`;
const DarkTreeStem_2 = styled.div`
  position: absolute;
  left: 16px;
  bottom: 0px;
  width: 1px;
  height: 25px;
  background-image: linear-gradient(to bottom, #595959, #595959);
  clip-path: polygon(0% 100%, 100% 100%, 80% 0%, 80% 0%);
`;
const DarkTreeBranch_2 = styled.div`
  position: absolute;
  left: 18px;
  bottom: 10px;
  width: 1px;
  height: 1px;
  background-image: linear-gradient(to right, #595959, #595959);
  transform: rotate(-40deg);
  transform-origin: left center;
  border-radius: 0 1px 0 0;
`;
const DarkTree_2 = styled.div`
  position: absolute;
  left: 6px;
  bottom: 20px;
  width: 22px;
  height: 22px;
  background-color: #595959;
  border-radius: 50% 50% 50% 50%;
  z-index: -2;
`;
const DarkTreeStem_3 = styled.div`
  position: absolute;
  left: 48px;
  bottom: 0px;
  width: 1px;
  height: 18px;
  background-image: linear-gradient(to bottom, #595959, #595959);
  clip-path: polygon(0% 100%, 100% 100%, 80% 0%, 80% 0%);
`;
const DarkTreeBranch_3 = styled.div`
  position: absolute;
  left: 50px;
  bottom: 8px;
  width: 1px;
  height: 1px;
  background-image: linear-gradient(to right, #595959, #595959);
  transform: rotate(-40deg);
  transform-origin: left center;
  border-radius: 0 1px 0 0;
`;
const DarkTree_3 = styled.div`
  position: absolute;
  left: 40.5px;
  bottom: 15px;
  width: 17px;
  height: 17px;
  background-color: #595959;
  border-radius: 50% 50% 50% 50%;
  z-index: -2;
`;
const DarkTreeStem_4 = styled.div`
  position: absolute;
  left: 67px;
  bottom: 0px;
  width: 1px;
  height: 15px;
  background-image: linear-gradient(to bottom, #595959, #595959);
  clip-path: polygon(0% 100%, 100% 100%, 80% 0%, 80% 0%);
`;
const DarkTreeBranch_4 = styled.div`
  position: absolute;
  left: 68px;
  bottom: 8px;
  width: 1px;
  height: 1px;
  background-image: linear-gradient(to right, #595959, #595959);
  transform: rotate(-40deg);
  transform-origin: left center;
  border-radius: 0 1px 0 0;
`;
const DarkTree_4 = styled.div`
  position: absolute;
  left: 61px;
  bottom: 10px;
  width: 13px;
  height: 13px;
  background-color: #595959;
  border-radius: 50% 50% 50% 50%;
  z-index: -2;
`;
const DarkMoon = styled.div`
  position: absolute;
  top: 14px;
  right: 35px;
  width: 35px;
  height: 35px;
  background-color: #28292a;
  border-radius: 50%;
  box-shadow: inset -4px 0px 0 0 #b6b6b6, inset -12px -3px 0 0 #d2d2d2;
  transform: rotate(-240deg);
`;
const Darkcloud = styled.div`
  position: absolute;
  top: 40px;
  right: 24px;
  width: 45px;
  height: 6px;
  background-color: #424242;
  border-radius: 7px;
  z-index: -2;
`;
const Darkcloud_2 = styled.div`
  position: absolute;
  top: 44px;
  right: 10px;
  width: 50px;
  height: 6px;
  background-color: #424242;
  border-radius: 7px;
  z-index: -2;
`;
const Darkcloud_3 = styled.div`
  position: absolute;
  top: 49px;
  right: 29px;
  width: 43px;
  height: 6px;
  background-color: #424242;
  border-radius: 7px;
  z-index: -2;
`;