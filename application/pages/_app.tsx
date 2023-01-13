import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChainId, Web3sdksProvider } from "@web3sdks/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3sdksProvider desiredChainId={ChainId.Mumbai}>
      <Component {...pageProps} />
    </Web3sdksProvider>
  );
}

export default MyApp;
