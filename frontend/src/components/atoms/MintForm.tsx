import { TMintForm } from "@/types";
import classNames from "classnames";
import Image from "next/image";
import { ReactElement } from "react";

type Props = {
  mintFormData: TMintForm;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  isMinting: boolean;
  isformFieldMissing: boolean;
  show: boolean;
};

export const MintForm = ({
  mintFormData,
  handleSubmit,
  handleChange,
  isMinting,
  isformFieldMissing,
  show,
}: Props): ReactElement => {
  return (
    <form
      className={classNames(
        { hidden: !show },
        "p-8 px-3 xl:px-8 xl:mx-auto border-1 border-brandBorder xl:w-576px w-full rounded-2xl bg-brandFormBg animate-scale-in-center"
      )}
      onSubmit={handleSubmit}
    >
      <p className="leading-29.05 text-2xl font-bold block mb-8">
        Mint Your NFT
      </p>
      <div className="flex flex-col my-5">
        <label
          htmlFor="name"
          className="text-sm leading-16.94 text-brandLabelText font-extralight mb-2"
        >
          NFT Name
        </label>
        <input
          name="name"
          className="px-4 rounded-lg bg-brandBorder border-1 border-brandBtnBorder placeholder:text-brandDarkWhite placeholder:font-extralight h-50px focus:outline-none font-extralight"
          placeholder="Enter NFT name"
          onChange={handleChange}
          value={mintFormData.name}
        />
      </div>
      <div className="flex flex-col my-5">
        <label
          htmlFor="description"
          className="text-sm leading-16.94 text-brandLabelText font-extralight mb-2"
        >
          Description
        </label>
        <textarea
          name="description"
          className="px-4 py-3 rounded-lg bg-brandBorder border-1 border-brandBtnBorder placeholder:text-brandDarkWhite placeholder:font-extralight focus:outline-none font-extralight"
          placeholder="Describe your NFT"
          rows={4}
          onChange={handleChange}
          value={mintFormData.description}
        />
      </div>
      <div className="flex flex-col my-5">
        <label
          htmlFor="logoUrl"
          className="text-sm leading-16.94 text-brandLabelText font-extralight mb-2"
        >
          Image URL
        </label>
        <input
          name="logoUrl"
          className="px-4 rounded-lg bg-brandBorder border-1 border-brandBtnBorder placeholder:text-brandDarkWhite placeholder:font-extralight h-50px focus:outline-none font-extralight"
          placeholder="Enter image URL"
          onChange={handleChange}
          value={mintFormData.logoUrl}
        />
      </div>
      <button
        className={classNames(
          {
            "cursor-not-allowed": isMinting || isformFieldMissing,
            "opacity-50": isMinting,
          },
          "flex items-center justify-center w-full gap-2 rounded-lg btn-gradient h-14 transition-all hover:opacity-90"
        )}
        type="submit"
        disabled={isMinting}
      >
        <Image
          src="/images/logo-alt.png"
          alt="app logo"
          width={16}
          height={15.88}
          className=""
        />
        <span>{isMinting ? "Minting..." : "Mint NFT"}</span>
      </button>
    </form>
  );
};
