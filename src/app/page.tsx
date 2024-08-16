"use client";
import React, { useState } from "react";
import styled from "styled-components";
import { QueryClient, QueryClientProvider } from "react-query";
/* chakra UI */
import { ChakraProvider, Divider, useColorMode } from "@chakra-ui/react";

/* containers */
import { BookContainer_, NotebookCreator_, Toolbar_ } from "../containers";
/* context */
import { MainContainerProvider } from "../context";

// Create a client
const queryClient = new QueryClient();

export default function Home() {
  const { colorMode } = useColorMode();
  console.log("cambio el modo de color: ", colorMode);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startWidth, setStartWidth] = useState(0);
  const [firstBoxWidth, setFirstBoxWidth] = useState(300);

  const handleBorderDragStart = (e: any) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setStartWidth(e.target.offsetWidth);
  };
  const handleBorderDragEnd = () => {
    setIsDragging(false);
  };
  const handleBorderDrag = (e: any) => {
    if (!isDragging) return;
    const movementX = e.clientX - startX;
    const newWidth = startWidth + movementX * 1; // Ajutar sensibilidad
    setFirstBoxWidth(newWidth);
  };

  const Firstbox_ = styled.div`
    position: relative;
    border-right: 1px solid #eee;
  `;

  const Border_ = styled.div<{ colorMode: "light" | "dark" }>`
    &::after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      width: 4px;
      height: 100%;
      cursor: ew-resize;
      border-color: ${(props) => (props.colorMode == "light" ? "red" : "blue")};
      background: ${(props) => (props.colorMode == "light" ? "red" : "blue")};
    }
  `;

  /* 
  sacar los proveedores de aqui. tengo problemas con los providers y  este componente
  */
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <main
          className="flex flex-col h-screen select-none w-full"
          onMouseMove={handleBorderDrag}
          onMouseUp={handleBorderDragEnd}
        >
          <Toolbar_ />

          <Divider />

          <Firstbox_
            className="h-full"
            style={{
              width: `${firstBoxWidth}px`,
              minWidth: 150,
              maxWidth: 700,
            }}
          >
            <BookContainer_ />
            <Border_ colorMode={colorMode} onMouseDown={handleBorderDragStart} />
          </Firstbox_>
        </main>
      </ChakraProvider>
    </QueryClientProvider>
  );
}
