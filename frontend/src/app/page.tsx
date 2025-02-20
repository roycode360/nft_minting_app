"use client";

import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { MintNft } from "@/components/MintNft";
import { MyNfts } from "@/components/MyNfts";
import { useAccount, useConnect, useDisconnect } from "wagmi";

function App() {
  const { address, isConnected } = useAccount();
  const { connectors, connect, status, error } = useConnect();
  const { disconnect } = useDisconnect();

  return (
    <main className="w-full">
      <Header />
      <HeroSection />
      <MintNft />
      <MyNfts />
    </main>
  );
}

export default App;
