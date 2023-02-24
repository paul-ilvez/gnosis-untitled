import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import ContextProvider from "../store/AppContext";
import Snowfall from "react-snowfall";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <ContextProvider>
        <Component {...pageProps} />
        <Snowfall />
      </ContextProvider>
    </NextUIProvider>
  );
}
