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

  return (
    <>
      <WalletProvider adapters={adapters} autoConnect>
        <WalletModalProvider>
          <Demo />
        </WalletModalProvider>
      </WalletProvider>
    </>
  );
}

export default App;
