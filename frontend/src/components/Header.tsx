"use client";

import { ReactElement, useState } from "react";
import Image from "next/image";
import CustomConnectButton from "./atoms/CustomConnectBtn";

export const Header = (): ReactElement => {
  return (
    <div className="w-full bg-brandDark h-[73px] border-brandBorder border-b-1">
      <div className="flex items-center justify-between w-[85%] mx-auto h-full">
        <div className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="app logo"
            width={24}
            height={24}
            className=""
          />
          <span className="text-black">NFT Mint</span>
        </div>
        <CustomConnectButton />
      </div>
    </div>
  );
};
