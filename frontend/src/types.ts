export type TNFT = {
  nftId: number;
  name: string;
  description: string;
  logoUrl: string;
  walletAddress: string;
  createdAt: Date;
};

export type TMintForm = {
  name: string;
  description: string;
  logoUrl: string;
};

export interface CreateNFTRequest {
  nftId: number;
  name: string;
  description: string;
  logoUrl: string;
  walletAddress: string;
}
