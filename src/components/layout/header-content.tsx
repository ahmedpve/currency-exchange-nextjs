import { Box, Container, Heading, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function HeaderContent() {
  const [time, setTime] = useState<Date>();

  useEffect(() => {
    setInterval(() => setTime(new Date()), 1000);
  }, [time]);

  return (
    <Container maxW="container.lg" display="flex" justifyContent="space-between" alignItems="center" h="full">
      <Heading as="h6" size="md">
        Cairo, Egypt
      </Heading>
      <Box>
        <Text>
          {new Date().toLocaleDateString("en", {
            weekday: "long",
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </Text>
        <Text>{time?.toLocaleTimeString("en")}</Text>
      </Box>
    </Container>
  );
}
