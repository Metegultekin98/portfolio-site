import { Html, Head, Main, NextScript } from "next/document";
import GoogleFont from "../components/GoogleFont";
import { fonts } from "../options/fonts";

export default function Document() {
  return (
    <Html>
      <Head>
        {fonts.map((font, key) => {
          return <GoogleFont key={key} fontFamily={font} />;
        })}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
