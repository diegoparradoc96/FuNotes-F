"use client";

import React, { useState, useEffect } from "react";

/* icons */
import { MdAdd } from "react-icons/md";
/* crakra */
import {
  Button,
  Text,
  Input,
  Image,
  Box,
  Grid,
  useDisclosure,
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
import { CoverFixed_ } from "@/components";

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
  selectedCover,
}) => {
  return (
    <Grid
      templateColumns="repeat(5, 1fr)"
      rowGap={10}
      columnGap={8}
      maxH={270}
      sx={{
        overflowY: "auto",
        "&::-webkit-scrollbar": { width: "8px" },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "gray",
          borderRadius: "8px",
        },
      }}
    >
      {Object.values(covers_fixed).map((cover, index) => (
        <CoverFixed_
          cover_fixed={cover}
          key={index}
          toggleCoverFixed={toggleCoverFixed}
          selectedCover={selectedCover}
        />
        // <Box w={70} h={85} overflow="hidden" borderRadius={10} key={index}>
        //   <Image h={"100%"} src={cover} />
        // </Box>
      ))}
      {covers.map((cover, index) => (
        <Box w={70} h={85} overflow="hidden" borderRadius={10} key={index}>
          <Image h={"100%"} src={cover} />
        </Box>
      ))}
    </Grid>
  );
};

export const NotebookCreator_: React.FC<NotebookCreatorProps> = ({}) => {
  const { ipcRenderer } = (window as any).electron;

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [covers, setCovers] = useState<string[]>([]);
  const [selectedCover, setSelectedCover] = useState<string>("");

  useEffect(() => {
    loadCovers();
  }, []);

  const loadCovers = () => {
    ipcRenderer.send(
      "get-directory-data",
      "D:\\Personal-projects\\funotes\\public"
    );

    ipcRenderer.on(
      "file-data",
      (event: any, { file, data }: { file: any; data: any }) => {
        const url = URL.createObjectURL(new Blob([data]));
        setCovers((oldCovers) => [...oldCovers, url]);
      }
    );
  };

  const toggleCoverFixed = (cover: string) => {
    setSelectedCover(cover);
  };

  return (
    <>
      <IconButton_ onOpen={onOpen} />

      <Modal isOpen={isOpen} onClose={onClose} isCentered size="2xl">
        <ModalOverlay />

        <ModalContent className="select-none">
          <ModalHeader textColor="black" textAlign="center">
            <Text textColor="#424242">Create New Notebook</Text>
          </ModalHeader>

          <ModalBody>
            <Container p={0} display="flex">
              <Text
                w="20%"
                alignContent="center"
                fontWeight="bold"
                textColor="#424242"
              >
                Name
              </Text>

              <Input
                w="80%"
                variant="unstyled"
                background="#eee"
                px={5}
                py={2}
                placeholder="Enter notebook name"
              />
            </Container>

            <Container mt={10} p={0} display="flex">
              <Text w="20%" fontWeight="bold" textColor="#424242">
                Cover
              </Text>

              <Container p={0} w="80%">
                <CoverContainer_
                  covers_fixed={covers_fixed}
                  covers={covers}
                  toggleCoverFixed={toggleCoverFixed}
                  selectedCover={selectedCover}
                />
              </Container>
            </Container>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={onClose}
              textColor="#eee"
            >
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
