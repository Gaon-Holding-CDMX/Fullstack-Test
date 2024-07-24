import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="bg-background-accent text-white h-full">
        <Head>
          <meta name="og:title" content="EVAUTH" />
        </Head>
        <body
          className={`bg-black grid grid-rows-[auto_1fr_auto] overflow-auto`}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
