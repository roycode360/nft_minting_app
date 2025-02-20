import Image from "next/image";
import { Dispatch, ReactElement, SetStateAction } from "react";
import { NftDetailsCard } from "./NftDetailsCard";
import { TNFT } from "@/types";
import classNames from "classnames";

type Props = {
  nft: TNFT | undefined;
  show: boolean;
  setMintState: Dispatch<SetStateAction<"nftForm" | "nftSuccess">>;
};

export const MintSuccess = ({
  nft,
  show,
  setMintState,
}: Props): ReactElement => {
  return (
    <div
      className={classNames(
        { hidden: !show },
        "p-8 px-3 xl:px-8 mx-auto overflow-hidden xl:w-576px w-full border-1 border-brandBorderGreen rounded-2xl bg-brandFormBg animate-scale-in-center"
      )}
    >
      <div>
        <Image
          src="/images/check.png"
          width={80}
          height={80}
          alt="success"
          className="mx-auto"
        />
        <p className="my-5 text-2xl font-bold leading-6 text-center text-brandBorderGreen">
          NFT Minted Successfully!
        </p>
        <p className="mb-8 leading-4 text-center font-extralight text-brandLabelText">
          Your NFT has been created and added to your collection
        </p>
      </div>
      <div>
        <NftDetailsCard nft={nft} />
      </div>
      <div className="flex items-center gap-3 mt-6">
        <button className="flex items-center justify-center flex-1 h-12 gap-2 rounded-lg bg-brandBorder">
          <Image src="/images/share.png" height={14} width={14} alt="share" />
          <p className="text-white font-extralight leading-19.36">Share</p>
        </button>
        <button
          className="flex items-center justify-center flex-1 h-12 gap-2 rounded-lg btn-gradient"
          onClick={() => setMintState("nftForm")}
        >
          <Image
            src="/images/logo-alt.png"
            height={15.88}
            width={16}
            alt="share"
          />
          <p className="text-white font-bold leading-19.36">Mint Another</p>
        </button>
      </div>
    </div>
  );
};
