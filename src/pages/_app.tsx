import type { AppProps } from "next/app";
import Head from "next/head";
import { appConfig } from "../config";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{appConfig.title}</title>
        <meta
          name="description"
          content={appConfig.description}
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
