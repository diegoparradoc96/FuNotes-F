"use client";

import React, { useState } from "react";
import styled from "styled-components";

/* chakra ui */
import { Image, Box } from "@chakra-ui/react";

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
      w={"100%"}
      h={"100%"}
      overflow="hidden"
      borderRadius={10}
      cursor="pointer"
      onClick={() => {
        toggleCoverFixed(cover_fixed);
      }}
      display="flex"
      justifyContent="center"
      alignItems="center"
      position="relative"
    >
      <div
        className="absolute mt-1"
        style={cover_fixed == selectedCover ? { zIndex: 1 } : {}}
      >
        <CheckIconWrapper>
          <CheckMark />
        </CheckIconWrapper>
      </div>

      <Image h={"100%"} src={cover_fixed} style={{ zIndex: 0 }} />
    </Box>
  );
};

const CheckIconWrapper = styled.div`
  display: inline-block;
  width: 23px;
  height: 23px;
  border-radius: 50%;
  position: relative;
  background-color: rgba(0, 0, 0, 0.3); /* Negro con opacidad del 50% */
`;

const CheckMark = styled.div`
  position: absolute;
  top: 3px;
  left: 8px;
  width: 6px;
  height: 13px;
  border: solid #fff;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
`;

export { CoverFixed_ };
