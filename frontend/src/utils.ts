import { readContract } from "viem/actions";
import { Constants } from "./constants/constants";
import contractABI from "@/contracts/mintingContractABI.json";
import { createPublicClient, http } from "viem";
import { sepolia } from "viem/chains";

export const generateUniqueId = async (): Promise<number | null> => {
  const client = createPublicClient({ chain: sepolia, transport: http() });

  let uniqueId: number | null = null;
  let attempts = 0;
  while (attempts < 10) {
    const id = Math.floor(Math.random() * 10000) + 1;
    try {
      const exists = await readContract(client, {
        address: Constants.MINTING_CONTRACT_ADDRESS,
        abi: contractABI,
        functionName: "checkId",
        args: [id],
      });
      if (!exists) {
        uniqueId = id;
        break;
      }
    } catch (err) {
      console.error("Error checking NFT ID:", err);
    }
    attempts++;
  }
  return uniqueId;
};
