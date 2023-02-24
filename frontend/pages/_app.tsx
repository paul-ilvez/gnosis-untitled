import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import ContextProvider from "../store/AppContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <ContextProvider>
        <Component {...pageProps} />
      </ContextProvider>
    </NextUIProvider>
  );
}
