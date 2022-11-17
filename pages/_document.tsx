import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Red+Hat+Display&display=swap"
          rel="stylesheet"
        />
        <meta
          name="description"
          content="The website of Stephen Sparling, developer."
        />
        <meta property="og:title" content="Stephen Sparling" />
        <meta
          property="og:description"
          content="The website of Stephen Sparling, developer."
        />
      </Head>
      <body className="bg-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
