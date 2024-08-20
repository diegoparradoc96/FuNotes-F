"use client";

import React, { useState } from "react";
/* icons */
import { MdOutlineSettings, MdBrightness6, MdOutlinePerson } from "react-icons/md";
/* chakra */
import {
  Text,
  Tabs,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  IconButton,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Button,
  useColorMode,
} from "@chakra-ui/react";

/* types */
import styled from "styled-components";
/* colors */
import { darkColorSettings, lightColorSettings } from "../utils";

export const Settings_: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const toggleLightMode = () => {
    if (colorMode != "light") toggleColorMode();
  };
  const toggleDarkMode = () => {
    if (colorMode != "dark") toggleColorMode();
  };
  return (
    <>
      <IconButton
        onClick={onOpen}
        width={16}
        variant={"ghost"}
        aria-label="Search database"
        icon={<MdOutlineSettings size={22} color="#595B5A" />}
      />

      <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl">
        <ModalOverlay />

        <ModalContent className="select-none" minH={500}>
          <ModalBody
            px={0}
            py={0}
            className="flex"
            backgroundColor={colorMode == "light" ? lightColorSettings.bg : darkColorSettings.bg}
            borderRadius={10}
          >
            <Tabs orientation="vertical" variant="unstyled">
              <Box display="flex" height={500}>
                <TabList
                  minW={150}
                  borderRight="1px"
                  borderColor={
                    colorMode == "light" ? lightColorSettings.border : darkColorSettings.border
                  }
                >
                  <Box pt={4} mb={4} fontWeight="bold">
                    <Text
                      as="span"
                      pl={5}
                      fontSize={13}
                      textColor={colorMode == "light" ? lightColorSettings.text : darkColorSettings.text}
                    >
                      SETTINGS
                    </Text>
                  </Box>

                  <Tab
                    _selected={{
                      bg:
                        colorMode == "light"
                          ? lightColorSettings.bg_button
                          : darkColorSettings.bg_button,
                      fontWeight: "bold",
                    }}
                    _hover={{
                      bg:
                        colorMode == "light"
                          ? lightColorSettings.bg_button_hover
                          : darkColorSettings.bg_button_hover,
                    }}
                    justifyContent={"left"}
                    fontSize={12}
                  >
                    <MdOutlinePerson size={22} color="#0BD34E" />
                    <Text ml={3}>My Acount</Text>
                  </Tab>
                  <Tab
                    _selected={{
                      bg:
                        colorMode == "light"
                          ? lightColorSettings.bg_button
                          : darkColorSettings.bg_button,
                      fontWeight: "bold",
                    }}
                    _hover={{
                      bg:
                        colorMode == "light"
                          ? lightColorSettings.bg_button_hover
                          : darkColorSettings.bg_button_hover,
                    }}
                    justifyContent={"left"}
                    fontSize={12}
                  >
                    <MdBrightness6 size={22} color="#8979B8" />
                    <Text ml={3}>Themes</Text>
                  </Tab>
                </TabList>

                <TabPanels minW={425}>
                  <TabPanel>
                    <p>En desarrollo...</p>
                  </TabPanel>
                  <TabPanel>
                    <Box display={"flex"} justifyContent={"center"} mb={4} h={180}>
                      {colorMode == "light" ? (
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
                      ) : (
                        <>
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
                            <DarkStartX left="59px" top="27px" width="3px" height="1px" />
                            <DarkStartY left="60px" top="24.5px" width="1px" height="4px" />
                            <DarkStartX left="30px" top="40px" width="2px" height="1px" />
                            <DarkStartY left="31px" top="37.5px" width="1px" height="2px" />
                            <DarkStartX left="55px" top="55px" width="2px" height="1px" />
                            <DarkStartY left="55.5px" top="53.5px" width="1px" height="2px" />
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
                        </>
                      )}
                    </Box>

                    <Box display={"flex"} justifyContent={"center"}>
                      <Button
                        onClick={() => toggleLightMode()}
                        _focus={{ backgroundColor: "#3182ce", color: "#fff" }}
                        width="100px"
                        h={34}
                        fontSize={13}
                        fontWeight={"none"}
                      >
                        Light
                      </Button>
                      <Box w={4}></Box>
                      <Button
                        onClick={() => toggleDarkMode()}
                        _focus={{ backgroundColor: "#3182ce", color: "#fff" }}
                        width="100px"
                        h={34}
                        fontSize={13}
                        fontWeight={"none"}
                      >
                        Night
                      </Button>
                    </Box>
                  </TabPanel>
                </TabPanels>
              </Box>
            </Tabs>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

interface StarProps {
  $top: string;
  $left?: string;
  $right?: string;
}
interface TreeProps {
  $left: string;
  $height?: string;
}

/*🟥 Dark */
const DarkContainer = styled.div`
  position: relative;
  width: 330px;
  height: 150px;
  border-bottom: 1px solid #4a4a4a;
  z-index: 0;
`;
const DarkStartX = styled.div<{ left: string; top: string; width: string; height: string }>`
  position: relative;
  left: ${(props) => props.left};
  top: ${(props) => props.top};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: #fff;
  z-index: 0;
`;
const DarkStartY = styled.div<{ left: string; top: string; width: string; height: string }>`
  position: relative;
  left: ${(props) => props.left};
  top: ${(props) => props.top};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
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
