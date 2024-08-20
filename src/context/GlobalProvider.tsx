import React, { ReactNode } from "react";
/* react query */
import { QueryClient, QueryClientProvider } from "react-query";
/* chakra UI */
import { ChakraProvider } from "@chakra-ui/react";

/* context */
import { MainContainerProvider } from "../context";

const queryClient = new QueryClient();

const GlobalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <MainContainerProvider>{children}</MainContainerProvider>
      </ChakraProvider>
    </QueryClientProvider>
  );
};

export default GlobalProvider;
