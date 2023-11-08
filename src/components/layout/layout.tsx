import { Box, Heading, useDisclosure } from "@chakra-ui/react";
import { appConfig } from "../../config";
import SideNavContent from "./side-nav-content";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const { isOpen: isMiniSideNav, onToggle: onToggleMiniSideNav } = useDisclosure({
    defaultIsOpen: false,
  });

  return (
    <Box
      display="flex"
      bgColor="bg.body"
    >
      <Box
        as="nav"
        display={{ base: "none", md: "flex" }}
        position="fixed"
        w={isMiniSideNav ? "24" : "72"}
        h="full"
        borderRight="1px"
        borderColor="border"
        p="space-md"
      >
        <SideNavContent />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        flexGrow="1"
        minH="100vh"
        ml={{ base: "none", md: isMiniSideNav ? "24" : "72" }}
      >
        <Box
          as="header"
          position="sticky"
          p="space-md"
          bgColor="bg.opaque"
        >
          <Heading
            as="h6"
            size="md"
            fontWeight="semibold"
          >
            Good Morning,
          </Heading>
        </Box>
        <Box
          as="main"
          flexGrow="1"
        >
          {children}
        </Box>
        <Box
          as="footer"
          bgColor="bg.clear"
          p="space-sm"
          color="text.secondary"
          fontSize="sm"
          textAlign="center"
        >
          {appConfig.copyright}
        </Box>
      </Box>
    </Box>
  );
}
