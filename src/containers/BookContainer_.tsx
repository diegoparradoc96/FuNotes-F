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
/* react query */
import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider } from "react-query";

/* components */
import { Book_ } from "../components/Book_";
/* containers */
import { NotebookCreator_ } from ".";
/* services */
import { bookQueries } from "../services/api-funotes";
/* types */
import { IBook } from "../common/types";

export const NotebookContainer_ = () => {
  const { data, error, isLoading } = useQuery<IBook[], Error>("books", bookQueries.getAll);

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

        <AccordionPanel padding={0}>
          {data?.map((book) => (
            <Book_ book={book} key={book.id_book} />
          ))}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
