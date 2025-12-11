import { useMemo } from "react";

import "./App.css";
import {
  BitKeepAdapter,
  GateWalletAdapter,
  LedgerAdapter,
  OkxWalletAdapter,
  TokenPocketAdapter,
  TronLinkAdapter,
  TrustAdapter,
  BybitWalletAdapter,
  ImTokenAdapter,
  BinanceWalletAdapter,
  FoxWalletAdapter,
  TomoWalletAdapter,
} from "@tronweb3/tronwallet-adapters";
import { WalletModalProvider } from "@tronweb3/tronwallet-adapter-react-ui";
import { WalletProvider } from "@tronweb3/tronwallet-adapter-react-hooks";
import Demo from "./demo";
import { useRef } from "react";
import { WalletReadyState, type Adapter } from "@tronweb3/tronwallet-abstract-adapter";

function App() {
  const adapters = useMemo(
    () => [
      new TronLinkAdapter(),
      new TokenPocketAdapter(),
      new TrustAdapter(),
      new OkxWalletAdapter(),
      new BitKeepAdapter(),
      new GateWalletAdapter(),
      new ImTokenAdapter(),
      new BybitWalletAdapter(),
      new BinanceWalletAdapter(),
      new FoxWalletAdapter(),
      new TomoWalletAdapter(),
      new LedgerAdapter(),
    ],
    []
  );

  const isFirstSelectAdapter = useRef(true);
  function handleAdapterChanged(adapter: Adapter | null) {
    if (!adapter) return;
    if (isFirstSelectAdapter.current) {
      // When page is first loaded, disable open wallet website
      isFirstSelectAdapter.current = false;
      return;
    }
    if (adapter.readyState === WalletReadyState.NotFound) {
      window.open(adapter.url, "_blank");
    }
    adapter.once("readyStateChanged", (readyState) => {
      if (readyState === WalletReadyState.NotFound) {
        window.open(adapter.url, "_blank");
      }
    });
  }
  return (
    <>
      <WalletProvider adapters={adapters} autoConnect onAdapterChanged={handleAdapterChanged}>
        <WalletModalProvider>
          <Demo />
        </WalletModalProvider>
      </WalletProvider>
    </>
  );
}

export default App;
