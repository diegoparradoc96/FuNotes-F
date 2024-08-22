import React from "react";
import styled from "styled-components";

export const LightModeDesing_ = () => {
  return (
    <>
      <LightContainer>
        <LightLaptop>
          <LightContentBlock></LightContentBlock>
          <LightLineDivider />
          <LightScreen>
            <LightContentLinesSlim>
              <LightLineSlim />
              <LightLineSlim_3 />
              <LightLineSlim />
              <LightLineSlim />
            </LightContentLinesSlim>
            <LightContentLinesWide>
              <LightLineWide_1 />
              <LightLineWide />
              <LightLineWide />
            </LightContentLinesWide>
            <LightContentLines>
              <LightLine />
              <LightLine />
              <LightLine />
              <LightLine />
              <LightLine />
              <LightLastLine />
            </LightContentLines>
          </LightScreen>
        </LightLaptop>
        <LightTreeStem></LightTreeStem>
        <LightTreeBranch></LightTreeBranch>
        <LightTree></LightTree>
        <LightTreeStem_2 />
        <LightTreeBranch_2 />
        <LightTree_2 />
        <LightTreeStem_3 />
        <LightTreeBranch_3 />
        <LightTree_3 />
        <LightTreeStem_4 />
        <LightTreeBranch_4 />
        <LightTree_4 />
        <LightSun />
        <Lightcloud />
        <Lightcloud_2 />
        <Lightcloud_3 />
      </LightContainer>
    </>
  );
};

/*🟥 light */
const LightContainer = styled.div`
  position: relative;
  width: 330px;
  height: 150px;
  border-bottom: 1px solid #ddd;
  z-index: 0;
`;
const LightLaptop = styled.div`
  position: absolute;
  left: 85px;
  bottom: 0px;
  width: 160px;
  height: 110px;
  border: 5px solid #dfdfe1;
  border-radius: 5px;
`;
const LightScreen = styled.div`
  display: flex;
  flex-direction: row;
`;
const LightContentBlock = styled.div`
  margin-left: 115px;
  margin-top: 7px;
  width: 25px;
  height: 11px;
  background-color: #1c8e99;
  margin-bottom: 7px;
  border-radius: 2px;
`;
const LightLineDivider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #edecec;
`;
const LightContentLinesSlim = styled.div`
  margin-top: 2px;
  width: 20%;
  padding: 10px;
`;
const LightLineSlim = styled.div`
  height: 2px;
  background-color: #edecec;
  margin-bottom: 5px;
`;
const LightLineSlim_3 = styled.div`
  height: 2px;
  background-color: #1c8e99;
  margin-bottom: 5px;
`;
const LightContentLinesWide = styled.div`
  margin-top: 6px;
  width: 30%;
  padding: 4px;
`;
const LightLineWide_1 = styled.div`
  height: 12.5px;
  background-color: #d2e8eb;
  margin-bottom: 5px;
`;
const LightLineWide = styled.div`
  height: 12.5px;
  background-color: #edecec;
  margin-bottom: 5px;
`;
const LightContentLines = styled.div`
  width: 50%;
  padding: 10px;
`;
const LightLine = styled.div`
  height: 4px;
  background-color: #edecec;
  margin-bottom: 5px;
`;
const LightLastLine = styled.div`
  height: 3px;
  background-color: #edecec;
  margin-bottom: 5px;
  width: 60%;
`;
const LightTreeStem = styled.div`
  position: absolute;
  left: 30px;
  bottom: 0px;
  width: 2px;
  height: 40px;
  background-image: linear-gradient(to bottom, #a5a5a5, #a5a5a5);
  clip-path: polygon(0% 100%, 100% 100%, 80% 0%, 80% 0%);
`;
const LightTreeBranch = styled.div`
  position: absolute;
  left: 30px;
  bottom: 17px;
  width: 5px;
  height: 1px;
  background-image: linear-gradient(to right, #eee, #a5a5a5);
  transform: rotate(-40deg);
  transform-origin: left center;
  border-radius: 0 1px 0 0;
`;
const LightTree = styled.div`
  position: absolute;
  left: 16.5px;
  bottom: 28px;
  width: 29px;
  height: 29px;
  background-color: #4cb6ac;
  border-radius: 50% 50% 50% 50%;
  box-shadow: inset 9px -3px 1px -7px #3d928a, inset 3px -5px 1px -1px #3d928a,
    inset -2px -8px 1px -5px #3d928a;
  z-index: -1;
`;
const LightTreeStem_2 = styled.div`
  position: absolute;
  left: 16px;
  bottom: 0px;
  width: 1px;
  height: 25px;
  background-image: linear-gradient(to bottom, #e6e6e6, #e6e6e6);
  clip-path: polygon(0% 100%, 100% 100%, 80% 0%, 80% 0%);
`;
const LightTreeBranch_2 = styled.div`
  position: absolute;
  left: 17px;
  bottom: 10px;
  width: 1px;
  height: 1px;
  background-image: linear-gradient(to right, #e6e6e6, #e6e6e6);
  transform: rotate(-40deg);
  transform-origin: left center;
  border-radius: 0 1px 0 0;
`;
const LightTree_2 = styled.div`
  position: absolute;
  left: 6px;
  bottom: 20px;
  width: 22px;
  height: 22px;
  background-color: #e6e6e6;
  border-radius: 50% 50% 50% 50%;
  z-index: -2;
`;
const LightTreeStem_3 = styled.div`
  position: absolute;
  left: 48px;
  bottom: 0px;
  width: 1px;
  height: 20px;
  background-image: linear-gradient(to bottom, #e6e6e6, #e6e6e6);
  clip-path: polygon(0% 100%, 100% 100%, 80% 0%, 80% 0%);
`;
const LightTreeBranch_3 = styled.div`
  position: absolute;
  left: 49px;
  bottom: 8px;
  width: 1px;
  height: 1px;
  background-image: linear-gradient(to right, #e6e6e6, #e6e6e6);
  transform: rotate(-40deg);
  transform-origin: left center;
  border-radius: 0 1px 0 0;
`;
const LightTree_3 = styled.div`
  position: absolute;
  left: 40.5px;
  bottom: 15px;
  width: 17px;
  height: 17px;
  background-color: #e6e6e6;
  border-radius: 50% 50% 50% 50%;
  z-index: -2;
`;
const LightTreeStem_4 = styled.div`
  position: absolute;
  left: 67px;
  bottom: 0px;
  width: 1px;
  height: 20px;
  background-image: linear-gradient(to bottom, #e6e6e6, #e6e6e6);
  clip-path: polygon(0% 100%, 100% 100%, 80% 0%, 80% 0%);
`;
const LightTreeBranch_4 = styled.div`
  position: absolute;
  left: 68px;
  bottom: 8px;
  width: 1px;
  height: 1px;
  background-image: linear-gradient(to right, #e6e6e6, #e6e6e6);
  transform: rotate(-40deg);
  transform-origin: left center;
  border-radius: 0 1px 0 0;
`;
const LightTree_4 = styled.div`
  position: absolute;
  left: 61px;
  bottom: 10px;
  width: 13px;
  height: 13px;
  background-color: #e6e6e6;
  border-radius: 50% 50% 50% 50%;
  z-index: -2;
`;
const LightSun = styled.div`
  position: absolute;
  top: 14px;
  right: 22px;
  width: 35px;
  height: 35px;
  background-color: #fccc63;
  border-radius: 50%;
`;
const Lightcloud = styled.div`
  position: absolute;
  top: 40px;
  right: 18px;
  width: 50px;
  height: 6px;
  background-color: #f2f2f2;
  border-radius: 7px;
  z-index: -2;
`;
const Lightcloud_2 = styled.div`
  position: absolute;
  top: 44px;
  right: 6px;
  width: 50px;
  height: 6px;
  background-color: #f2f2f2;
  border-radius: 7px;
  z-index: -2;
`;
const Lightcloud_3 = styled.div`
  position: absolute;
  top: 49px;
  right: 24px;
  width: 50px;
  height: 6px;
  background-color: #f2f2f2;
  border-radius: 7px;
  z-index: -2;
`;
