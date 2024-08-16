"use client";

import React, { useState, useEffect, useRef } from "react";
/* react query */
import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider } from "react-query";
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
/* components */
import { Cover_ } from "@/components";
/* queries */
import { bookCoverQueries, bookQueries } from "../services/api-funotes";
/* types */
import { IBookCover, IBook, IPostBook, ISystemMode } from "../common/types";
import styled from "styled-components";

export const Settings_: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [systemMode, setSystemMode] = useState<ISystemMode>("light");

  const toggleLightMode = () => {
    if (colorMode != "light") toggleColorMode();
  };
  const toggleDarkMode = () => {
    if (colorMode != "dark") toggleColorMode();
  };
  const renderDarkModeImage = () => {
    interface StarProps {
      top: string;
      left?: string;
      right?: string;
    }
    interface TreeProps {
      left: string;
      height?: string;
    }

    const Scene = styled.div`
      width: 300px;
      height: 180px;
      background-color: #2D3748;
      position: relative;
      overflow: hidden;
    `;
    const Sky = styled.div`
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 70%;
    `;
    const Moon = styled.div`
      width: 30px;
      height: 30px;
      background-color: #ecf0f1;
      border-radius: 50%;
      position: absolute;
      top: 20px;
      right: 30px;
    `;
    const Star = styled.div<StarProps>`
      width: 2px;
      height: 2px;
      background-color: #ecf0f1;
      position: absolute;
      top: ${(props) => props.top};
      ${(props) => (props.left ? `left: ${props.left};` : `right: ${props.right};`)}
    `;
    const Ground = styled.div`
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 30%;
    `;
    const Tree = styled.div<TreeProps>`
      width: 20px;
      height: ${(props) => props.height || "40px"};
      background-color: #27ae60;
      border-radius: 50% 50% 0 0;
      position: absolute;
      bottom: 0;
      left: ${(props) => props.left};
    `;
    const Window = styled.div`
      width: 120px;
      height: 80px;
      background-color: #34495e;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 5px;
    `;
    const Bar = styled.div`
      height: 20px;
      background-color: #2c3e50;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
    `;
    const Content = styled.div`
      padding: 10px;
    `;
    const Line = styled.div`
      height: 8px;
      background-color: #7f8c8d;
      margin-bottom: 5px;
      border-radius: 2px;

      &:last-child {
        width: 60%;
      }
    `;

    return (
      <Scene>
        <Sky>
          <Moon></Moon>
          <Star top="40px" left="50px" />
          <Star top="60px" right="80px" />
        </Sky>
        <Ground>
          <Tree left="30px" />
          <Tree left="60px" height="30px" />
        </Ground>
        <Window>
          <Bar></Bar>
          <Content>
            <Line></Line>
            <Line></Line>
            <Line></Line>
          </Content>
        </Window>
      </Scene>
    );
  };
  const renderSystemModeImage = () => {
    if (colorMode == "light") {
      return (
        <>
          <Container>
            <Laptop>
              <Screen>
                <ContentBlock></ContentBlock>
                <ContentLines>
                  <Line></Line>
                  <Line></Line>
                  <Line></Line>
                </ContentLines>
              </Screen>
            </Laptop>
            <Tree></Tree>
            <Sun></Sun>
          </Container>
        </>
      );
    } else {
      return renderDarkModeImage();
    }
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
          <ModalBody px={0} py={0} className="flex">
            <Tabs orientation="vertical" variant="unstyled">
              <Box display="flex" height={500}>
                <TabList minW={150} borderRight="1px" borderColor="gray.200">
                  <Box pt={4} mb={4} fontWeight="bold">
                    <Text as="span" pl={5} fontSize={13} textColor={"#6D6D6D"}>
                      SETTINGS
                    </Text>
                  </Box>

                  <Tab
                    _selected={{ bg: "#eee", fontWeight: "bold" }}
                    _hover={{ bg: "#eee" }}
                    justifyContent={"left"}
                    fontSize={12}
                  >
                    <MdOutlinePerson size={22} color="#0BD34E" />
                    <Text ml={3}>My Acount</Text>
                  </Tab>
                  <Tab
                    _selected={{ bg: "#eee", fontWeight: "bold" }}
                    _hover={{ bg: "#eee" }}
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
                      {renderSystemModeImage()}
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

const Container = styled.div`
  position: relative;
  width: 300px;
  height: 180px;
`;

const Laptop = styled.div`
  position: absolute;
  left: 20px;
  bottom: 20px;
  width: 200px;
  height: 120px;
  background-color: #ffffff;
  border: 2px solid #cccccc;
  border-radius: 10px;
`;

const Screen = styled.div`
  padding: 10px;
`;

const ContentBlock = styled.div`
  width: 30px;
  height: 10px;
  background-color: #4caf50;
  margin-bottom: 10px;
`;

const ContentLines = styled.div`
  width: 100%;
`;

const Line = styled.div`
  height: 5px;
  background-color: #e0e0e0;
  margin-bottom: 5px;
`;

const Tree = styled.div`
  position: absolute;
  left: 10px;
  bottom: 10px;
  width: 30px;
  height: 50px;
  background-color: #4caf50;
  border-radius: 50% 50% 0 0;
`;

const Sun = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  background-color: #ffc107;
  border-radius: 50%;
`;
