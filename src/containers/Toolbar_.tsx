import React from "react";
/* chakra ui */
import { ChakraProvider, Divider, useColorMode } from "@chakra-ui/react";

/* chakra UI */
import { IconButton, Box } from "@chakra-ui/react";
/* icons */
import { MdMoreHoriz, MdOutlineSettings } from "react-icons/md";

/* containers */
import { Settings_ } from "../containers";

const Toolbar_: React.FC = () => {
  const { colorMode } = useColorMode();
  /* 
  backgroundColor={colorMode == "light" ? "#eee" : "#000"} />
  */
  return (
    <Box
      display="flex"
      justifyContent="flex-end"
      borderWidth={1}
      borderBottomColor={colorMode == "light" ? "#eee" : "#000"}      
    >
      <Settings_ />
      {/* <IconButton
        width={16}
        variant={"ghost"}
        aria-label="Search database"
        icon={<MdOutlineSettings size={22} color="#595B5A" />}
      /> */}
    </Box>
  );
};

export { Toolbar_ };
