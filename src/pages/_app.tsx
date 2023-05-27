import { AppProps } from "next/app";
import Head from "next/head";
import GlobalStyles from "styles/global";


function App({ Component, pageProps }: AppProps) {
    return (
    <>
        <Head>
            <title>My Trips</title>
            <link rel="shortcut icon" href="/img/icon-512.png"/>
            <link rel="aple-touch-icon" href="/img/icon-512.png"/>
            <link rel="manifest" href="/manifest.json" />
            <meta name="description" content="A simple to project to show my favorites spots in the world." />
        </Head>
        <GlobalStyles />
        <Component {...pageProps} />;
    </>
    )
  }

export default App