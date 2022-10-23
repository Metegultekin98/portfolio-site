import { Html, Head, Main, NextScript } from "next/document";
import SiteHead from "../components/SiteHead";

export default function Document() {
  return (
    <Html>
      <Head>
        <SiteHead />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
