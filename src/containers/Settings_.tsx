"use client";

import React, { useState, useEffect, useRef } from "react";
/* react query */
import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider } from "react-query";
/* icons */
import { MdOutlineSettings } from "react-icons/md";
/* chakra */
import {
  Button,
  GridItem,
  Text,
  Input,
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
          <ModalBody px={1} py={0} className="flex">
            <Container
              flex="0 0 30%"
              height={"auto"}
              paddingTop={2}
              borderRight="1px solid"
              borderRightColor="#ccc"
            >
              <Text alignContent="center" fontWeight="bold" fontSize={15} textColor="#424242">
                SETTINGS
              </Text>
            </Container>

            <Container flex="0 0 70%" height={16} paddingTop={2}>
              <Text alignContent="center" fontWeight="bold" fontSize={14} textColor="#424242">
                My content
              </Text>
            </Container>
          </ModalBody>

          {/* <ModalFooter></ModalFooter> */}
        </ModalContent>
      </Modal>
    </>
  );
};
