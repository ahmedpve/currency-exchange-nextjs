import { Box, Card, Center, DarkMode, Text } from "@chakra-ui/react";
import Head from "next/head";
import { appConfig } from "../config";

export default function Home() {
  return (
    <>
      <Head>
        <title>{`Home | ${appConfig.title}`}</title>
      </Head>

      <Box
        display="flex"
        flexDirection="column"
        gap="space-md"
      >
        <Box>
          <Text
            color="text.secondary"
            fontSize="sm"
          >
            Current Location
          </Text>
          <Text fontWeight="semibold">Cairo Governorate, Egypt</Text>
        </Box>

        <Box
          display="flex"
          gap="space-md"
        >
          <DarkMode>
            <Card
              variant="outline"
              maxW="72"
              w="full"
              borderRadius="lg"
              border="2px"
              borderColor="border"
              px="space-md"
              py="space-sm"
              bgColor="bg.filled"
            >
              <Box
                as="header"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                fontWeight="bold"
              >
                <Text>Nov, 8</Text>
                <Text>12:00 PM</Text>
              </Box>
              <Box
                my="space-lg"
                textAlign="center"
              >
                <Text
                  fontFamily="heading"
                  fontSize="5xl"
                  fontWeight="bold"
                >
                  24°C
                </Text>
                <Text fontSize="sm">Clear sky</Text>
              </Box>
              <Box
                as="header"
                display="flex"
                justifyContent="center"
                alignItems="center"
                gap="space-md"
              >
                <Text>H: 29</Text>
                <Text>L: 15</Text>
              </Box>
            </Card>
          </DarkMode>

          <Box
            display="grid"
            gridTemplateColumns="1fr 1fr 1fr"
            gap="space-sm"
          >
            <Card
              variant="outline"
              borderBottom="2px"
              borderBottomColor="primary.main"
              px="space-lg"
              py="space-md"
              textAlign="center"
            >
              <Text fontWeight="semibold">Wednesday</Text>
              <Text color="text.secondary">Nov 8</Text>
              <Center h="full">
                <Box>
                  <Text
                    as="span"
                    fontSize="3xl"
                    fontWeight="medium"
                  >
                    28°
                  </Text>{" "}
                  <Text as="span">14°</Text>
                </Box>
              </Center>
            </Card>
            <Card
              variant="outline"
              borderBottom="2px"
              borderBottomColor="primary.main"
              px="space-lg"
              py="space-md"
              textAlign="center"
            >
              <Text fontWeight="semibold">Wednesday</Text>
              <Text color="text.secondary">Nov 8</Text>
              <Center h="full">
                <Box>
                  <Text
                    as="span"
                    fontSize="3xl"
                    fontWeight="medium"
                  >
                    28°
                  </Text>{" "}
                  <Text as="span">14°</Text>
                </Box>
              </Center>
            </Card>
            <Card
              variant="outline"
              borderBottom="2px"
              borderBottomColor="primary.main"
              px="space-lg"
              py="space-md"
              textAlign="center"
            >
              <Text fontWeight="semibold">Wednesday</Text>
              <Text color="text.secondary">Nov 8</Text>
              <Center h="full">
                <Box>
                  <Text
                    as="span"
                    fontSize="3xl"
                    fontWeight="medium"
                  >
                    28°
                  </Text>{" "}
                  <Text as="span">14°</Text>
                </Box>
              </Center>
            </Card>
            <Card
              variant="outline"
              borderBottom="2px"
              borderBottomColor="primary.main"
              px="space-lg"
              py="space-md"
              textAlign="center"
            >
              <Text fontWeight="semibold">Wednesday</Text>
              <Text color="text.secondary">Nov 8</Text>
              <Center h="full">
                <Box>
                  <Text
                    as="span"
                    fontSize="3xl"
                    fontWeight="medium"
                  >
                    28°
                  </Text>{" "}
                  <Text as="span">14°</Text>
                </Box>
              </Center>
            </Card>
            <Card
              variant="outline"
              borderBottom="2px"
              borderBottomColor="primary.main"
              px="space-lg"
              py="space-md"
              textAlign="center"
            >
              <Text fontWeight="semibold">Wednesday</Text>
              <Text color="text.secondary">Nov 8</Text>
              <Center h="full">
                <Box>
                  <Text
                    as="span"
                    fontSize="3xl"
                    fontWeight="medium"
                  >
                    28°
                  </Text>{" "}
                  <Text as="span">14°</Text>
                </Box>
              </Center>
            </Card>
            <Card
              variant="outline"
              borderBottom="2px"
              borderBottomColor="primary.main"
              px="space-lg"
              py="space-md"
              textAlign="center"
            >
              <Text fontWeight="semibold">Wednesday</Text>
              <Text color="text.secondary">Nov 8</Text>
              <Center h="full">
                <Box>
                  <Text
                    as="span"
                    fontSize="3xl"
                    fontWeight="medium"
                  >
                    28°
                  </Text>{" "}
                  <Text as="span">14°</Text>
                </Box>
              </Center>
            </Card>
          </Box>
        </Box>
      </Box>
    </>
  );
}
