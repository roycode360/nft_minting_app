# NFT Minting App

This project is a blockchain-based NFT minting application built with Next.js, RainbowKit, wagmi, and viem. It allows users to connect their Ethereum wallet, mint NFTs by interacting with a smart contract deployed on the Sepolia testnet, and view their NFT gallery.

## Features

- **Wallet Integration:**  
  Connect your Ethereum wallet with RainbowKit and wagmi.

- **Mint NFTs:**  
  Generate a unique NFT ID and mint NFTs by interacting with a smart contract.

- **Responsive Design:**  
  Custom UI components including a responsive custom connect button.

- **Backend Integration:**  
  A NestJS backend handles NFT metadata storage and gallery management.

- **Real-Time Notifications:**  
  Uses react-hot-toast to provide user feedback.

## Prerequisites

- **Node.js** (v18 or later)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/roycode360/nft_minting_app.git
   cd nft_minting_app
   cd frontend
   npm install
   ```

2. **Environment Variables:**

Create a .env.local file in the /frontend directory with:

NEXT_PUBLIC_API_URL=http://localhost:8000

3. **Usage:**

```bash
    npm run dev
```

Open http://localhost:3000 in your browser.

## Project Structure

src/app/
Contains Next.js pages, layouts, and route-level components.

src/components/
Reusable UI components (e.g., the custom connect button and minting form).

src/contracts/
Smart contract ABI files (e.g., mintingContractABI.json).

src/services/
API service functions for backend integration (e.g., NFT creation).

src/constants/
Application constants, such as contract addresses and configuration variables.

## Backend API Documentation

This backend is built with NestJS and exposes endpoints for creating NFTs, retrieving a user's NFT gallery, and fetching a specific NFT by ID.

1. **Create NFT:**
   Endpoint:
   POST /nft

Description:
Stores new NFT data in the system.

2. **Get NFT Gallery:**
   Endpoint:
   GET /nft/gallery?walletAddress=<walletAddress>

Description:
Fetches all NFTs associated with the provided wallet address.

Query Parameter:

walletAddress: The Ethereum address to look up NFTs for.

3. **Get NFT by ID**
   Endpoint:
   GET /nft/:id

Description:
Retrieves the NFT data for the given NFT ID.

Path Parameter:

id: The NFT ID (as a string, which is converted to a number).

## Submission

Deployed API link (Render): ""

Deployed frontend link (Vercel): ""

Walthrough Video: ""

Project GitHub Repository: ""
