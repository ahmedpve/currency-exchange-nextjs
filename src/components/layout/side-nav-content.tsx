import { Box, Button, Icon } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaCalendarDays, FaChartLine, FaMap, FaTableColumns } from "react-icons/fa6";
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
    <Box>
      <Box as="header">
        <Logo />
      </Box>
      <Box
        as="ul"
        display="flex"
        flexDirection="column"
        gap="space-sm"
        py="space-lg"
      >
        {navLinks.map((navLink, i) => (
          <Button
            key={i}
            as={Link}
            href={navLink.path}
            colorScheme="primary"
            variant={isNavLinkSelected(navLink.path) ? "solid" : "ghost"}
            leftIcon={<Icon as={navLink.icon} />}
            justifyContent="flex-start"
            color={isNavLinkSelected(navLink.path) ? "neutral.50" : "text.primary"}
          >
            {navLink.label}
          </Button>
        ))}
      </Box>
    </Box>
  );
}
