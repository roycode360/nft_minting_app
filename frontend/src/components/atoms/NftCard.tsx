import Image from "next/image";
import { ReactElement } from "react";

import { TNFT } from "@/types";
import classNames from "classnames";

type Props = {
  nft: TNFT;
  index: number;
};

export const NftCard = ({ nft }: Props): ReactElement => {
  // Logic for displaying new tag: if NFT is created less than a minute ago
  const isNew = Date.now() - new Date(nft.createdAt).getTime() < 60000;

  return (
    <div
      className={classNames(
        { "border-brandBorder": !isNew, "border-brandBorderGreen": isNew },
        "overflow-hidden border-1 border-brandBorder rounded-xl bg-brandFormBg relative"
      )}
    >
      <p
        className={classNames(
          { hidden: !isNew },
          "h-6, w-48.02px bg-brandGreenLight text-brandBorderGreen leading-14.52px font-extralight text-xs absolute rounded-full block z-10 right-4 top-4 px-3 py-1"
        )}
      >
        New
      </p>
      <div className="relative w-full h-48">
        <Image src={nft.logoUrl} fill alt="NFT" className="object-cover" />
      </div>
      <div className="px-5 py-3">
        <p>
          <span className="font-bold leading-4">{nft.name}</span>
        </p>
        <p className="mt-2 text-sm leadinf-14 text-brandLabelText">
          {nft.description}
        </p>
      </div>
    </div>
  );
};
