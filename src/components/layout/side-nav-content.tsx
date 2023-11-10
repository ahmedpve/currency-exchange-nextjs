import { Box, Button, Center, Icon } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaCalendarDays, FaChartLine, FaMap, FaTableColumns } from "react-icons/fa6";
import { appConfig } from "../../config";
import { paths } from "../../paths";
import Logo from "../elements/logo";

export default function SideNavContent() {
  const router = useRouter();
  const isNavLinkSelected = (path: string) => router.pathname === path;

  const navLinks = [
    { label: "Home", path: paths.home, icon: FaTableColumns },
    { label: "Calendar", path: paths.calendar, icon: FaCalendarDays },
    { label: "Statistics", path: paths.statistics, icon: FaChartLine },
    { label: "Map", path: paths.map, icon: FaMap },
  ];

  return (
    <Box w="full" display="flex" flexDirection="column" alignItems="center">
      <Center as="header" w="full" h="20" borderBottom="1px" borderColor="border">
        <Logo />
      </Center>
      <Box as="ul" display="flex" flexDirection="column" gap="space-sm" flexGrow="1" py="space-md">
        {navLinks.map((navLink, i) => (
          <Box key={i} as="li">
            <Button
              as={Link}
              href={navLink.path}
              colorScheme="primary"
              variant="ghost"
              leftIcon={<Icon as={navLink.icon} />}
              justifyContent="flex-start"
              w="48"
              fontWeight="bold"
              {...(!isNavLinkSelected(navLink.path) && {
                color: "text.primary",
                fontWeight: "medium",
              })}
            >
              {navLink.label}
            </Button>
          </Box>
        ))}
      </Box>
      <Box
        as="footer"
        borderTop="1px"
        borderColor="border"
        p="space-sm"
        w="full"
        color="text.secondary"
        fontSize="sm"
        textAlign="center"
      >
        {appConfig.copyright}
      </Box>
    </Box>
  );
}
