"use client";

import React, { useState } from "react";
import {
  Text,
  Box,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Divider,
  useColorMode,
} from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { MdMoreHoriz } from "react-icons/md";

/* types */
import { IBook } from "../common/types";
/* colors */
import { darkColors } from "../utils";

const fontSize = 11;
const background = "#333439";
const hoverBackground = "#595B5A";
const textColor = "white";
const paddingX = 5;

interface BookProps {
  book: IBook;
  toggleDeleteBook: (book: IBook) => void;
}

export const Book_: React.FC<BookProps> = ({ book, toggleDeleteBook }) => {
  const { colorMode } = useColorMode();

  const [isOpen, setIsOpen] = useState(false);
  const [showIcon, setShowIcon] = useState(false);

  const toggleMenuItem = () => {
    setIsOpen(false);
    setShowIcon(false);
  };

  return (
    <Box
      textColor={colorMode == "light" ? "black" : darkColors.text}
      height={10}
      w="100%"
      display="flex"
      alignItems="center"
      _hover={{
        bg: colorMode == "light" ? "#F6F6F6" : "#3D4756",
      }}
      cursor="pointer"
      rounded={5}
      onMouseEnter={() => setShowIcon(true)}
      onMouseLeave={() => setShowIcon(false)}
    >
      {/* 🟥 portada y nombre del libro 🟥 */}
      <Box w="95%" ml="40px" display="flex" alignItems="center">
        <Image src={book.bookcover?.url_cover} boxSize="22px" height="27px" borderRadius="3px" />
        <Text ml={2} noOfLines={1} fontSize={13}>
          {book.name_book}
        </Text>
      </Box>

      {/* 🟥 menu de opciones 🟥 */}
      <Box w="15px" mr="15px">
        <Menu isOpen={isOpen} onClose={() => setIsOpen(false)}>
          {showIcon && (
            <MenuButton display="flex" alignItems="center" onClick={() => setIsOpen(true)}>
              <MdMoreHoriz size={20} color="#aaa" />
            </MenuButton>
          )}

          <MenuList background={background} onMouseLeave={() => setShowIcon(false)} minW={163} w={160}>
            <MenuItem
              onClick={() => toggleMenuItem()}
              fontSize={fontSize}
              textColor={textColor}
              _hover={{ background: hoverBackground }}
              background={background}
              paddingX={paddingX}
              w={160}
            >
              Edit
            </MenuItem>
            <Divider size="4px" marginTop={2} marginBottom={2} w={160} />
            <MenuItem
              onClick={() => {
                toggleMenuItem();
                toggleDeleteBook(book);
              }}
              fontSize={fontSize}
              textColor={textColor}
              _hover={{ background: hoverBackground }}
              background={background}
              paddingX={paddingX}
              w={160}
            >
              Delete
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Box>
  );
};
