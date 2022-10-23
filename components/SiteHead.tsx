import { fonts } from "../options/fonts";
import GoogleFont from "../components/GoogleFont";
import { useEffect } from "react";

export default function SiteHead() {
  return (
    <>
      {/* {fonts.map((font, key) => {
        return <GoogleFont key={key} fontFamily={font} />;
      })} */}

      <title>Mete Gultekin</title>
      <meta name="description" content="Portfolio site made by Mete Gültekin" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/images/favicon.png"
      />
    </>
  );
}
