"use client";

import React, { useState } from "react";
import { Text, Box, Image } from "@chakra-ui/react";
import { MdMoreHoriz } from "react-icons/md";

export const Notebook_ = () => {
  const [showIcon, setShowIcon] = useState(false);

  return (
    <Box
      textColor="black"
      height={10}
      w="100%"
      display="flex"
      alignItems="center"
      _hover={{ bg: "#F6F6F6" }}
      cursor="pointer"
      rounded={5}
      onMouseEnter={() => setShowIcon(true)}
      onMouseLeave={() => setShowIcon(false)}
    >
      <Box w="95%" ml="20px" display="flex" alignItems="center">
        <Image src="https://bit.ly/dan-abramov" boxSize="30px" />
        <Text ml={7} noOfLines={1}>
          Cuaderno de prueba
        </Text>
      </Box>

      <Box w="15px" mr="15px">
        {showIcon && <MdMoreHoriz size={20} color="#aaa" />}
      </Box>
    </Box>
  );
};
