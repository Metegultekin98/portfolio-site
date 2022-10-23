import { FontFamily } from '../interfaces/IFontFamily';

export default function GoogleFont({ fontFamily }: FontFamily) {
  return (
    <link
      href={`https://fonts.googleapis.com/css2?family=${fontFamily}&display=optional`}
      rel="stylesheet"
    />
  );
}
