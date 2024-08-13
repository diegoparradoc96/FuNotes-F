"use client";

import React, { useState, useEffect, useRef } from "react";
/* react query */
import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider } from "react-query";
/* icons */
import { MdOutlineSettings, MdBrightness6, MdOutlinePerson } from "react-icons/md";
/* chakra */
import {
  Button,
  GridItem,
  Text,
  Input,
  Tabs,
  Grid,
  useDisclosure,
  Divider,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Tooltip,
  IconButton,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Container,
  Center,
} from "@chakra-ui/react";
/* components */
import { Cover_ } from "@/components";
/* queries */
import { bookCoverQueries, bookQueries } from "../services/api-funotes";
/* types */
import { IBookCover, IBook, IPostBook } from "../common/types";

export const Settings_: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
                <TabList
                  minW={150}
                  borderRight="1px"
                  borderColor="gray.200"
                  mr={4} // Margin right
                >
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

                <TabPanels>
                  <TabPanel>
                    <p>En desarrollo...</p>
                  </TabPanel>
                  <TabPanel>
                    <p>Light - Dark</p>
                  </TabPanel>
                </TabPanels>
              </Box>
            </Tabs>
          </ModalBody>

          {/* <ModalFooter></ModalFooter> */}
        </ModalContent>
      </Modal>
    </>
  );
};
