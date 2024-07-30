"use client";

import React, { useState, useEffect, useRef } from "react";

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
/* cover-fixed */
import { covers_fixed } from "@/utils";
/* components */
import { CoverFixed_, Cover_ } from "@/components";
/* services */
import { bookCoverQueries } from "../services/api-funotes";

interface IconButtonProps_ {
  onOpen: () => void;
}
interface NotebookCreatorProps {}
interface ConverContainerProps {
  covers_fixed: {
    cover1: string;
    cover2: string;
    cover3: string;
    cover4: string;
    cover5: string;
    cover6: string;
    cover7: string;
    cover8: string;
    cover9: string;
  };
  covers: string[];
  toggleCoverFixed: (cover: string) => void;
  toggleCover: (cover: string) => void;
  selectedCover: string;
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
  covers_fixed,
  covers,
  toggleCoverFixed,
  toggleCover,
  selectedCover,
}) => {
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
      {covers.map((cover, index) => (
        <GridItem key={index} minW={59} minH={77} maxH={77}>
          <Cover_ cover={cover} toggleCover={toggleCover} selectedCover={selectedCover} />
        </GridItem>
      ))}

      {Object.values(covers_fixed).map((cover, index) => (
        <GridItem key={index} minW={59} minH={77}>
          <CoverFixed_
            cover_fixed={cover}
            toggleCoverFixed={toggleCoverFixed}
            selectedCover={selectedCover}
          />
        </GridItem>
        // <Box w={70} h={85} overflow="hidden" borderRadius={10} key={index}>
        //   <Image h={"100%"} src={cover} />
        // </Box>
      ))}
    </Grid>
  );
};

export const NotebookCreator_: React.FC<NotebookCreatorProps> = ({}) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [coversFixed, setCoversFixed] = useState<any[]>([]);
  const [covers, setCovers] = useState<string[]>([]);
  const [selectedCover, setSelectedCover] = useState<string>("");

  useEffect(() => {
    setCovers([]);
    loadCoversFixed();
    loadCovers();
  }, []);

  const loadCoversFixed = async () => {
    try {
      const coversFixedScope = await bookCoverQueries.getBookCovers();
      console.log("cubiertas de libros: ", coversFixedScope);
    } catch (error) {
      console.error("error en loadCoversFixed front: ", error);
    }
  };

  const loadCovers = () => {
    console.log("En desarrollo");
  };

  const toggleCoverFixed = (cover: string) => {
    setSelectedCover(cover);
  };

  const toggleCover = (cover: string) => {
    setSelectedCover(cover);
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const selectedFile = event.target.files[0];
      loadCovers();
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
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
                  covers_fixed={covers_fixed}
                  covers={covers}
                  toggleCoverFixed={toggleCoverFixed}
                  toggleCover={toggleCover}
                  selectedCover={selectedCover}
                />
              </Container>
            </Container>
          </ModalBody>

          <Divider colorScheme="blackAlpha" />

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose} textColor="#eee">
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
