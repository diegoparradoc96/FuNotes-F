"use client";

import React, { useState } from "react";
/* icons */
import {
  MdOutlineSettings,
  MdBrightness6,
  MdOutlinePerson,
} from "react-icons/md";
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

/* colors */
import { darkColorSettings, lightColorSettings } from "../utils";
/* components */
import { LightModeDesing_, DarkModeDesing_ } from "../components";

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
            backgroundColor={
              colorMode == "light"
                ? lightColorSettings.bg
                : darkColorSettings.bg
            }
            borderRadius={10}
          >
            <Tabs orientation="vertical" variant="unstyled">
              <Box display="flex" height={500}>
                {/*🟥 tab list */}
                <TabList
                  minW={150}
                  borderRight="1px"
                  borderColor={
                    colorMode == "light"
                      ? lightColorSettings.border
                      : darkColorSettings.border
                  }
                >
                  <Box pt={4} mb={4} fontWeight="bold">
                    <Text
                      as="span"
                      pl={5}
                      fontSize={13}
                      textColor={
                        colorMode == "light"
                          ? lightColorSettings.text
                          : darkColorSettings.text
                      }
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

                {/*🟥 tab panel */}
                <TabPanels minW={425}>
                  <TabPanel>
                    <p>En desarrollo...</p>
                  </TabPanel>
                  <TabPanel>
                    <Box
                      display={"flex"}
                      justifyContent={"center"}
                      mb={4}
                      h={180}
                    >
                      {colorMode == "light" ? (
                        <LightModeDesing_ />
                      ) : (
                        <DarkModeDesing_ />
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
