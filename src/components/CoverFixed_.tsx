"use client";

import React, { useState } from "react";

/* chakra ui */
import { Image, Box } from "@chakra-ui/react";
/* icons */
import { MdCheckCircleOutline } from "react-icons/md";

interface CoverFixedProps {
  cover_fixed: string;
  selectedCover: string;
  toggleCoverFixed: (cover: string) => void;
}

const CoverFixed_: React.FC<CoverFixedProps> = ({
  cover_fixed,
  toggleCoverFixed,
  selectedCover,
}) => {
  return (
    <Box
      w={70}
      h={85}
      overflow="hidden"
      borderRadius={10}
      cursor="pointer"
      onClick={() => {
        toggleCoverFixed(cover_fixed);
      }}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      {cover_fixed == selectedCover && (
        <MdCheckCircleOutline size={28} color="white" className="absolute" />
      )}
      <Image h={"100%"} src={cover_fixed} />
    </Box>
  );
};

export { CoverFixed_ };
