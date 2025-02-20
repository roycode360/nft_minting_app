import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";

export default function CustomConnectButton() {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        mounted,
      }) => {
        const ready = mounted;
        const connected = ready && account && chain;

        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <button
                    onClick={openConnectModal}
                    type="button"
                    className="flex items-center h-10 gap-2 px-3 rounded-full sm:px-5 btn-gradient"
                  >
                    <Image
                      src="/images/wallet-icon.png"
                      width={16}
                      height={16}
                      alt="wallet icon"
                      className="ml-2"
                    />
                    <span className="text-sm font-extralight sm:text-base">
                      Connect Wallet
                    </span>
                  </button>
                );
              }

              if (chain.unsupported) {
                return (
                  <button
                    onClick={openChainModal}
                    type="button"
                    className="flex items-center h-10 gap-2 px-3 text-sm rounded-full sm:px-5 btn-gradient sm:text-base"
                  >
                    Wrong network
                  </button>
                );
              }

              return (
                <div className="flex flex-col gap-3 sm:flex-row">
                  <button
                    onClick={openChainModal}
                    type="button"
                    className="items-center hidden h-10 gap-2 px-3 text-sm rounded-full xl:flex sm:px-5 btn-gradient sm:text-base"
                  >
                    {chain.hasIcon && (
                      <div
                        style={{
                          background: chain.iconBackground,
                          width: 12,
                          height: 12,
                          borderRadius: 999,
                          overflow: "hidden",
                          marginRight: 4,
                        }}
                      >
                        {chain.iconUrl && (
                          <img
                            alt={chain.name ?? "Chain icon"}
                            src={chain.iconUrl}
                            style={{ width: 12, height: 12 }}
                          />
                        )}
                      </div>
                    )}
                    {chain.name}
                  </button>

                  <button
                    onClick={openAccountModal}
                    type="button"
                    className="flex items-center h-10 gap-2 px-3 text-sm rounded-full sm:px-5 btn-gradient sm:text-base"
                  >
                    {account.displayName}
                    {account.displayBalance
                      ? ` (${account.displayBalance})`
                      : ""}
                  </button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
}
