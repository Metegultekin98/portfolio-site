interface AppProps {
    fontFamily: string
}

export default function GoogleFont({ fontFamily }: AppProps ) {
  return (
    <link href={`https://fonts.googleapis.com/css2?family=${fontFamily}&display=optional`} rel="stylesheet" />
  )
}
