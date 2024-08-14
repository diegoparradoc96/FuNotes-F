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
} from "@chakra-ui/react";
/* components */
import { Cover_ } from "@/components";
/* queries */
import { bookCoverQueries, bookQueries } from "../services/api-funotes";
/* types */
import { IBookCover, IBook, IPostBook, ISystemMode } from "../common/types";
import styled from "styled-components";

export const Settings_: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [systemMode, setSystemMode] = useState<ISystemMode>("light");

  const toggleLightMode = () => {
    setSystemMode("light");
  };
  const toggleDarkMode = () => {
    setSystemMode("dark");
  };
  const renderSystemModeImage = () => {
    if (systemMode == "light") {
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
      return <p>Imagen de modo dark</p>;
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
