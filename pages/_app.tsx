import "../public/static/styles/globals.css";
import "../public/static/styles/layout_bg.css";
import type { AppProps } from "next/app";
import { NextPageWithLayout } from "../types/page";

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
