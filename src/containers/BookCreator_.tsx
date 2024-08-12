"use client";

import React, { useState, useEffect, useRef } from "react";
/* react query */
import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider } from "react-query";
/* icons */
import { MdAdd } from "react-icons/md";
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
} from "@chakra-ui/react";
/* components */
import { Cover_ } from "@/components";
/* queries */
import { bookCoverQueries, bookQueries } from "../services/api-funotes";
/* types */
import { IBookCover, IBook, IPostBook } from "../common/types";

interface IconButtonProps_ {
  onOpen: () => void;
}
interface ConverContainerProps {
  bookCovers: IBookCover[] | undefined;
  toggleBookCover: (cover: IBookCover) => void;
  selectedBookCover?: IBookCover;
}

const IconButton_: React.FC<IconButtonProps_> = ({ onOpen }) => {
  const [show, setShow] = useState(false);

  return (
    <Tooltip
      isOpen={show}
      label="New Notebook"
      placement="top"
      hasArrow
      bg="#424242"
      paddingX={5}
      paddingY={2}
      rounded={5}
    >
      <IconButton
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        onClick={onOpen}
        aria-label="Search database"
        icon={<MdAdd color="#0C67DF" size={22} />}
        variant=""
      />
    </Tooltip>
  );
};

const CoverContainer_: React.FC<ConverContainerProps> = ({
  bookCovers,
  toggleBookCover,
  selectedBookCover,
}) => {
  const renderCovers = () => {
    if (!bookCovers) {
      return <p className="text-black">No hay cubiertas que mostrar</p>;
    } else {
      return Object.values(bookCovers).map((bookCover, index) => (
        <GridItem key={index} minW={59} minH={77}>
          <Cover_
            bookCover={bookCover}
            toggleCover={toggleBookCover}
            selectedCover={selectedBookCover}
          />
        </GridItem>
      ));
    }
  };

  return (
    <Grid
      templateColumns="repeat(5, 1fr)"
      pb={5}
      rowGap={7}
      columnGap={5}
      maxH={270}
      sx={{
        overflowY: "auto",
        paddingRight: "30px",
        "&::-webkit-scrollbar": {
          width: "8px",
          height: "8px",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "gray",
          borderRadius: "8px",
        },
      }}
    >
      {renderCovers()}
    </Grid>
  );
};

export const NotebookCreator_: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const queryClient = useQueryClient();

  const { data, error, isLoading } = useQuery<IBookCover[], Error>(
    "bookCovers",
    bookCoverQueries.getBookCovers
  );
  const postBook = useMutation(bookQueries.post, {
    onSuccess: () => {
      // Invalida y refetch los queries que se relacionan con esta mutación
      queryClient.invalidateQueries("book");
    },
  });

  const [selectedBookCover, setSelectedBookCover] = useState<IBookCover>();
  const [value, setValue] = useState<string>("");

  useEffect(() => {}, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value);
  const toggleBookCover = (bookCover: IBookCover) => {
    setSelectedBookCover(bookCover);
  };
  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const selectedFile = event.target.files[0];
    }
  };
  const handleClick = () => {
    fileInputRef.current?.click();
  };
  const toggleCreateBook = async (): Promise<void> => {
    if (!selectedBookCover || !value || value.trim().length < 1) {
      alert("da un nombre a tu libro y selecciona una cubiera para el");
    } else {
      const succesCreateBook = await createBook(value, selectedBookCover);
      succesCreateBook ? onClose() : null;
    }
  };
  const createBook = async (name_book: string, bookCover: IBookCover): Promise<boolean> => {
    const newData = {
      name_book,
      id_cover: bookCover.id_cover,
    };

    try {
      await postBook.mutateAsync(newData);
      return true;
    } catch (error) {
      console.log("error: ", error);
      return false;
    }
  };

  return (
    <>
      <IconButton_ onOpen={onOpen} />

      <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl">
        <ModalOverlay />

        <ModalContent className="select-none">
          <ModalHeader textColor="black" textAlign="center" mt={2}>
            <Text textColor="#424242" fontSize={16}>
              Create New Notebook
            </Text>
          </ModalHeader>

          <ModalBody p={1}>
            <Container px={10} display="flex">
              <Text w="20%" alignContent="center" fontWeight="bold" fontSize={14} textColor="#424242">
                Name
              </Text>

              <Input
                value={value}
                onChange={handleChange}
                w="80%"
                variant="unstyled"
                background="#eee"
                fontSize={14}
                px={5}
                py={2}
                placeholder="Enter notebook name"
              />
            </Container>

            <Container mt={10} pl={10} pr={0} display="flex">
              <Text w="20%" fontWeight="bold" textColor="#424242" fontSize={14}>
                Cover
                <Input
                  type="file"
                  ref={fileInputRef}
                  display="none" // Esto oculta el input, pero sigue siendo accesible
                  onChange={handleFileSelect}
                  accept=".jpg,.jpeg,.png,.gif" // Puedes agregar extensiones permitidas
                />
                <IconButton
                  as="label" // Usar el componente IconButton como una etiqueta de HTML
                  onClick={handleClick}
                  htmlFor="file-input" // Esto conecta el botón con el input de archivo
                  aria-label="Add cover"
                  icon={<MdAdd color="#0C67DF" size={25} />}
                  variant=""
                  cursor="pointer"
                />
              </Text>

              <Container p={0} mt={4} w="80%">
                <CoverContainer_
                  bookCovers={data}
                  toggleBookCover={toggleBookCover}
                  selectedBookCover={selectedBookCover}
                />
              </Container>
            </Container>
          </ModalBody>

          <Divider colorScheme="blackAlpha" />

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => toggleCreateBook()}
              textColor="#eee"
              isDisabled={!value || !selectedBookCover ? true : false}
            >
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
