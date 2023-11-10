import { Box } from "@chakra-ui/react";
import Head from "next/head";
import { appConfig } from "../config";

export default function Home() {
  return (
    <>
      <Head>
        <title>{`Home | ${appConfig.title}`}</title>
      </Head>

      <Box display="flex" flexDirection="column" gap="space-md"></Box>
    </>
  );
}
