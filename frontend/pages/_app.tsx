import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import { Provider } from "react-redux";
import { store } from "@/store";
import ContextProvider from "../store/AppContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <NextUIProvider>
        <ContextProvider>
          <Component {...pageProps} />
        </ContextProvider>
      </NextUIProvider>
    </Provider>
  );
}
