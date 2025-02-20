"use client";

import { TMintForm, TNFT } from "@/types";
import { ReactElement, useMemo, useRef, useState } from "react";
import { http, useAccount } from "wagmi";
import contractABI from "@/contracts/mintingContractABI.json";
import { Constants } from "@/constants/constants";
import { waitForTransactionReceipt, writeContract } from "viem/actions";
import { sepolia } from "viem/chains";
import { createPublicClient } from "viem";
import toast from "react-hot-toast";
import { createNft } from "@/services/nft.service";
import { useWalletClient } from "wagmi";
import { MintForm } from "./atoms/MintForm";
import { MintSuccess } from "./atoms/MintSuccess";
import { generateUniqueId } from "@/utils";

export const MintNft = (): ReactElement => {
  const { address, isConnected } = useAccount();
  const { data: walletClient } = useWalletClient();

  const initMintFormData = {
    name: "",
    description: "",
    logoUrl: "",
  };

  const [loading, setLoading] = useState(false);
  const [mintState, setMintState] = useState<"nftForm" | "nftSuccess">(
    "nftForm"
  );
  const [mintFormData, setMintFormData] = useState<TMintForm>(initMintFormData);

  const [createdNft, setCreatedNft] = useState<TNFT | undefined>();

  // Handle mint form changes and update state data.
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setMintFormData({ ...mintFormData, [e.target.name]: e.target.value });
  };

  const client = useMemo(
    () => createPublicClient({ chain: sepolia, transport: http() }),
    []
  );

  const isFieldMissing =
    !mintFormData.name || !mintFormData.description || !mintFormData.logoUrl;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isFieldMissing) {
      toast.error("Please fill in all fields.");
      return;
    }
    await handleMint();
  };

  const handleMint = async () => {
    if (!isConnected || !address || !walletClient) {
      toast.error("Please connect your wallet.");
      return;
    }
    setLoading(true);
    try {
      const nftId = await generateUniqueId();
      if (nftId === null) {
        throw new Error("Failed to generate a unique NFT ID, try again!");
      }

      const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
      const nft = await createNft({
        nftId,
        walletAddress: address,
        ...mintFormData,
      });

      const metadataUrl = `${backendUrl}/nft/${nftId}`;

      // Call the smart contract mint function.
      const tx = await writeContract(walletClient, {
        account: address,
        address: Constants.MINTING_CONTRACT_ADDRESS,
        abi: contractABI,
        functionName: "mint",
        args: [nftId, metadataUrl],
      });

      // Wait for the transaction to be confirmed.
      await waitForTransactionReceipt(client, { hash: tx });
      toast.success("NFT minted successfully!");
      setMintState("nftSuccess");
      setCreatedNft(nft);
      setMintFormData(initMintFormData);
    } catch (error: any) {
      console.error("Minting error:", error);
      toast.error("Minting failed: " + error.message);
    }
    setLoading(false);
  };

  return (
    <section className="w-full">
      <div className="w-full px-2 mx-auto xl:px-0 xl:w-4/5">
        <MintForm
          mintFormData={mintFormData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          isMinting={loading}
          isformFieldMissing={isFieldMissing}
          show={mintState === "nftForm"}
        />
        <MintSuccess
          nft={createdNft}
          show={mintState === "nftSuccess"}
          setMintState={setMintState}
        />
      </div>
    </section>
  );
};
