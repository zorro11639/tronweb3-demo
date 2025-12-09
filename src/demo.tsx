import { useWalletModal } from "@tronweb3/tronwallet-adapter-react-ui";

function Demo() {
  const { setVisible } = useWalletModal();

  return (
    <div>
      <button
        onClick={() => {
          setVisible(true);
        }}
      >
        CLICK TO CONNECT
      </button>
    </div>
  );
}

export default Demo;
