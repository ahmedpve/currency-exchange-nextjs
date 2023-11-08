import { Box, Heading, Icon } from "@chakra-ui/react";
import { FaCloudSunRain } from "react-icons/fa6";
import { appConfig } from "../../config";

export default function Logo() {
  return (
    <Box
      display="flex"
      alignItems="center"
      gap="space-xs"
    >
      <Icon
        as={FaCloudSunRain}
        boxSize="12"
        color="primary.main"
      />
      <Heading
        as="h6"
        size="md"
        color="secondary.dark"
        fontWeight="extrabold"
        textTransform="uppercase"
        letterSpacing="wide"
      >
        {appConfig.title}
      </Heading>
    </Box>
  );
}
