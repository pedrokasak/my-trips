import { AppProps } from "next/app";
import Head from "next/head";
import GlobalStyles from "styles/global";


function App({ Component, pageProps }: AppProps) {
    return (
    <>
        <Head>
            <title>React Avançado</title>
            <link rel="stylesheet" href="style.css" />
            <meta name="description" content="A simple project starter to work with Typescript, React, NextJS" />
        </Head>
        <GlobalStyles />
        <Component {...pageProps} />;
    </>
    )
  }

export default App