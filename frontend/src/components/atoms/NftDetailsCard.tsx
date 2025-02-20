import { myNfts } from "@/mock/nftData";
import { TNFT } from "@/types";
import Image from "next/image";
import { ReactElement } from "react";

export const NftDetailsCard = ({
  nft,
}: {
  nft: TNFT | undefined;
}): ReactElement => {
  return (
    <div className="w-full p-6 xl:w-510px bg-brandBtnBgDark rounded-xl">
      <div className="relative h-64 overflow-hidden rounded-lg">
        <Image src={nft?.logoUrl ?? ""} alt="" fill />
      </div>
      <div className="flex flex-col gap-4 mt-6">
        <div>
          <p className="leading-16.94 text-sm font-extralight text-brandLabelText mb-1">
            NFT Name
          </p>
          <p className="font-semibold leading-4">{nft?.name}</p>
        </div>
        <div>
          <p className="leading-16.94 text-sm font-extralight text-brandLabelText mb-1">
            Description
          </p>
          <p className="leading-4 font-extralight text-brandWhite">
            {nft?.description}
          </p>
        </div>
        <div>
          <p className="leading-16.94 text-sm font-extralight text-brandLabelText mb-1">
            NFT ID
          </p>
          <p className="leading-4 font-extralight text-brandPurple">
            {nft?.nftId}
          </p>
        </div>
      </div>
    </div>
  );
};
