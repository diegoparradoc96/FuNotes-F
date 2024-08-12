import React from "react";

/* chakra UI */
import { IconButton, Box } from "@chakra-ui/react";
/* icons */
import { MdMoreHoriz, MdOutlineSettings } from "react-icons/md";

/* containers */
import { Settings_ } from "../containers";

const Toolbar_: React.FC = () => {
  return (
    <Box display="flex" justifyContent="flex-end">
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
