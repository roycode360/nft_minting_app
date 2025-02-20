"use client";

import {
  DefaultOptions,
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { type ReactNode, useState } from "react";
import { type State, WagmiProvider } from "wagmi";

import { getConfig } from "@/wagmi";
import { darkTheme, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import toast, { Toaster } from "react-hot-toast";

export function Providers(props: {
  children: ReactNode;
  initialState?: State;
}) {
  const defaultOptions: DefaultOptions = {
    queries: {
      staleTime: 0,
      retry: false,
    },
  };

  const [config] = useState(() => getConfig());
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions,
        mutationCache: new MutationCache({
          onError(err: unknown) {
            const error = new Error(err as string);
            toast.error(error.message);
          },
        }),
        queryCache: new QueryCache({
          onError(err: unknown) {
            const error = new Error(err as string);
            toast.error(error.message);
          },
        }),
      })
  );

  return (
    <WagmiProvider config={config} initialState={props.initialState}>
      <Toaster position="top-right" />
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={darkTheme()}>
          {props.children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
