"use client";

import React from "react";

/* chakra */
import {
  Box,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Flex,
} from "@chakra-ui/react";
/* icons */
import { MdAdd } from "react-icons/md";
/* components */
import { Notebook_ } from "../components/Notebook_";
/* container */
import { NotebookCreator_ } from "../containers";

export const NotebookContainer_ = () => {
  return (
    <Accordion defaultIndex={[0]} allowToggle reduceMotion>
      <AccordionItem>
        <Flex alignItems="center">
          <AccordionButton>
            <AccordionIcon color="#aaa" fontSize={24} />

            <Box as="span" flex="1" textAlign="left">
              <Text color="#0C67DF" fontSize={13} fontWeight="bold">
                NOTEBOOKS
              </Text>
            </Box>
          </AccordionButton>

          <NotebookCreator_ />
        </Flex>

        <AccordionPanel padding={0} >
          <Notebook_ />
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
