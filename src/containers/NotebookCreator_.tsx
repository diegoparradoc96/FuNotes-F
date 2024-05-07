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

interface IconButtonProps_ {
  onOpen: () => void;
}
interface NotebookCreatorProps {}

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

const CoverContainer_: React.FC = () => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  useEffect(() => {
    const { ipcRenderer } = window.electron;

    console.log("mivar", ipcRenderer);

    ipcRenderer.send(
      "get-file-data",
      "D:\\Personal-projects\\funotes\\public\\cover.png"
    );
    ipcRenderer.on("file-data", (event: any, data: any) => {
      const url = URL.createObjectURL(new Blob([data]));
      setImageSrc(url);
    });
  }, []);

  return (
    <Container display="flex">
      <Box boxSize="xs">{imageSrc != null && <Image src={imageSrc} />}</Box>
    </Container>
  );
};

export const NotebookCreator_: React.FC<NotebookCreatorProps> = ({}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <IconButton_ onOpen={onOpen} />

      <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl">
        <ModalOverlay />

        <ModalContent className="select-none">
          <ModalHeader textColor="black" textAlign="center">
            <Text textColor="#424242">Create New Notebook</Text>
          </ModalHeader>

          <ModalBody>
            <Container p={0} display="flex">
              <Text
                w="25%"
                alignContent="center"
                fontWeight="bold"
                textColor="#424242"
              >
                Name
              </Text>
              <Input w="75%" />
            </Container>

            <Container mt={10} p={0} display="flex">
              <Text
                w="25%"
                alignContent="center"
                fontWeight="bold"
                textColor="#424242"
              >
                Cover
              </Text>
              <Container>
                <CoverContainer_ />
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
