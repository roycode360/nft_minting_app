import { CreateNFTRequest, TNFT } from "@/types";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function fetchGallery(
  walletAddress: string
): Promise<TNFT[] | undefined> {
  try {
    const response = await fetch(
      `${API_BASE_URL}/nft/gallery?walletAddress=${encodeURIComponent(walletAddress)}`,
      {
        method: "GET",
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || `Error! Status: ${response.status}`);
    }

    const result = await response.json();
    if (result.success) {
      return result.data;
    } else {
      throw new Error(result.message || "Failed to load gallery");
    }
  } catch (error) {
    console.error("Error fetching gallery:", error);
    throw error;
  }
}

export async function createNft(
  createNftRequest: CreateNFTRequest
): Promise<TNFT | undefined> {
  try {
    const response = await fetch(`${API_BASE_URL}/nft`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(createNftRequest),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || `Error! Status: ${response.status}`);
    }

    const result = await response.json();
    if (result.success) {
      return result.data;
    } else {
      throw new Error(result.message || "Failed to load NFT");
    }
  } catch (error) {
    console.error("Error fetching gallery:", error);
    throw error;
  }
}
