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
  useColorMode,
} from "@chakra-ui/react";
/* react query */
import { useQuery, useMutation, useQueryClient } from "react-query";

/* components */
import { Book_ } from "../components/Book_";
/* containers */
import { NotebookCreator_ } from ".";
/* queries */
import { bookQueries } from "../services/api-funotes";
/* types */
import { IBook } from "../common/types";
/* colors */
import { mainColors } from "../utils";

export const BookContainer_: React.FC = () => {
  const queryClient = useQueryClient();
  const { colorMode } = useColorMode();

  const { data, error, isLoading } = useQuery<IBook[], Error>("book", bookQueries.getAll);

  const deleteBook = useMutation(bookQueries.delete, {
    // Invalida y refetch la lista de libros después de la eliminación
    onSuccess: () => {
      queryClient.invalidateQueries("book");
    },
    onError: (error: any) => {
      console.error("Error al eliminar el libro:", error);
    },
  });
  const toggleDeleteBook = async (book: IBook) => {
    try {
      await deleteBook.mutateAsync(book);
    } catch (error) {
      alert("Error al eliminar el libro");
    }
  };

  return (
    <Accordion defaultIndex={[0]} allowToggle reduceMotion style={{ borderTop: "transparent" }}>
      <AccordionItem border={"none"}> 
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
            <Book_ book={book} key={book.id_book} toggleDeleteBook={toggleDeleteBook} />
          ))}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
