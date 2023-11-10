import { Box, Container } from "@chakra-ui/react";
import HeaderContent from "./header-content";
import SideNavContent from "./side-nav-content";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <Box display="flex" bgColor="bg.body">
      <Box
        as="nav"
        display={{ base: "none", lg: "flex" }}
        position="fixed"
        zIndex="docked"
        w="72"
        h="full"
        borderRight="1px"
        borderColor="border"
        bgColor="bg.clear"
      >
        <SideNavContent />
      </Box>
      <Box display="flex" flexDirection="column" flexGrow="1" minH="100vh" ml={{ base: "initial", lg: "72" }}>
        <Box
          as="header"
          position="sticky"
          zIndex="sticky"
          h="20"
          borderBottom="1px"
          borderColor="border"
          px="space-md"
          bgColor="bg.opaque"
        >
          <HeaderContent />
        </Box>
        <Box as="main" flexGrow="1" p="space-md">
          <Container maxW="container.xl">{children}</Container>
        </Box>
      </Box>
    </Box>
  );
}
