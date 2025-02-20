import Image from "next/image";
import { ReactElement } from "react";

export const HeroSection = (): ReactElement => {
  return (
    <section className="w-full mx-auto xl:w-4/5 my-36">
      <div className="flex flex-col items-center w-full mx-auto text-center xl:w-3/4">
        <h1 className="text-4xl font-bold text-white xl:text-6xl">
          Discover & Collect Extraordinary NFTs
        </h1>
        <p className="my-10 font-sans text-sm leading-5 xl:text-xl font-extralight text-brandWhite">
          Enter the world of digital art and collectibles. Explore unique NFTs
          created by artists worldwide.
        </p>
        <div className="flex items-center gap-4 mx-7 xl:mx-0">
          <button className="flex items-center gap-3 px-6 transition-all xl:px-8 h-58px btn-gradient rounded-xl hover:opacity-90">
            <Image
              src="/images/rocket.png"
              alt="app logo"
              width={20}
              height={20}
              className="w-4"
            />
            <span className="text-xs font-bold xl:text-base">
              Start Creating
            </span>
          </button>
          <button className="flex items-center gap-3 px-4 xl:px-6 h-58px bg-brandBtnBgDark rounded-xl border-1 border-brandBtnBorder">
            <Image
              src="/images/video.png"
              alt="app logo"
              width={20}
              height={20}
              className="w-4"
            />
            <span className="text-xs xl:text-base">Watch Demo</span>
          </button>
        </div>
      </div>
    </section>
  );
};
