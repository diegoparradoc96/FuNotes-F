import React from "react";

/* chakra ui */
import { Image, Box } from "@chakra-ui/react";
import { covers_fixed } from "../utils/cover-fixed";

interface CoverFixedProps {
  cover_fixed: string;
}

const CoverFixed_: React.FC<CoverFixedProps> = ({ cover_fixed }) => {
  return (
    <Box w={70} h={85} overflow="hidden" borderRadius={10} cursor="pointer">
      <Image h={"100%"} src={cover_fixed} />
    </Box>
  );
};

export { CoverFixed_ };
