"use client";

import React, { useState } from "react";
/* styled */
import styled from "styled-components";
/* chakra ui */
import { useColorMode } from "@chakra-ui/react";

/* containers */
import { BookContainer_, Toolbar_ } from "../../containers";
/* colors */
import { mainColors } from "../../utils";

const Main: React.FC = () => {
  const { colorMode } = useColorMode();

  const [firstBoxWidth, setFirstBoxWidth] = useState(300);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startWidth, setStartWidth] = useState(0);

  /* procedure */
  const handleBorderDragEnd = () => {
    setIsDragging(false);
  };
  const handleBorderDrag = (e: any) => {
    if (!isDragging) return;
    const movementX = e.clientX - startX;
    const newWidth = startWidth + movementX * 1; // Ajutar sensibilidad
    setFirstBoxWidth(newWidth);
  };
  const handleBorderDragStart = (e: any) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setStartWidth(e.target.offsetWidth);
  };

  return (
    <main
      className="flex flex-col h-screen select-none w-full"
      onMouseMove={handleBorderDrag}
      onMouseUp={handleBorderDragEnd}
      style={{
        backgroundColor:
          colorMode == "light" ? mainColors.bg_light : mainColors.bg_dark,
      }}
    >
      <Toolbar_ />

      <Firstbox_
        className="h-full"
        style={{
          width: `${firstBoxWidth}px`,
          minWidth: 150,
          maxWidth: 700,
        }}
        $colorMode={colorMode}
      >
        <BookContainer_ />
        <Border_ $colorMode={colorMode} onMouseDown={handleBorderDragStart} />
      </Firstbox_>
    </main>
  );
};

const Firstbox_ = styled.div<{ $colorMode: "light" | "dark" }>`
  position: relative;
  border-right: 1px solid #eee;
  border-color: ${(props) => (props.$colorMode == "light" ? "#eee" : "black")};
`;

const Border_ = styled.div<{ $colorMode: "light" | "dark" }>`
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 4px;
    height: 100%;
    cursor: ew-resize;
  }
`;

export default Main;
