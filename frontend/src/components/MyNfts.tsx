import { ReactElement } from "react";
import { useAccount } from "wagmi";
import { useQuery } from "@tanstack/react-query";
import classNames from "classnames";

import { fetchGallery } from "@/services/nft.service";
import { TNFT } from "../types";
import { NftCard } from "./atoms/NftCard";

export const MyNfts = (): ReactElement => {
  const { address, isConnected } = useAccount();

  const { data } = useQuery({
    queryKey: ["fetch-wallet-nfts"],
    queryFn: () => fetchGallery(address!),
    enabled: isConnected,
  });

  return (
    <section className="w-[85%] mx-auto my-24">
      <p className="text-2xl font-bold leading-6">Your NFT Gallery</p>
      {/* if no NFTs */}
      <div
        className={classNames(
          {
            hidden: data?.length && data?.length > 0,
          },
          "flex items-center justify-center h-48"
        )}
      >
        <p className="text-brandDarkWhite font-extralight">
          No NFTs found, please mint your first one using the widget above.
        </p>
      </div>
      <div
        className={classNames(
          { hidden: data?.length === 0 },
          "grid grid-cols-1 gap-6 mt-10 xl:grid-cols-3"
        )}
      >
        {data?.map((nft: TNFT, ind: number) => (
          <NftCard key={ind} nft={nft} index={ind} />
        ))}
      </div>
    </section>
  );
};
