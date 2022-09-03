import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Red+Hat+Display&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
