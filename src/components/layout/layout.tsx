import { Box, Heading } from "@chakra-ui/react";
import SideNavContent from "./side-nav-content";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <Box
      display="flex"
      bgColor="bg.body"
    >
      <Box
        as="nav"
        display={{ base: "none", md: "flex" }}
        position="fixed"
        zIndex="docked"
        w="72"
        h="full"
        borderRight="1px"
        borderColor="border"
        bgColor="neutral.100"
      >
        <SideNavContent />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        flexGrow="1"
        minH="100vh"
        ml={{ base: "none", md: "72" }}
      >
        <Box
          as="header"
          position="sticky"
          zIndex="sticky"
          borderBottom="1px"
          borderColor="border"
          px="space-md"
          py="space-lg"
          bgColor="bg.opaque"
        >
          <Heading
            as="h6"
            size="md"
            fontWeight="semibold"
          >
            Good Morning!
          </Heading>
        </Box>
        <Box
          as="main"
          flexGrow="1"
          p="space-md"
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}
