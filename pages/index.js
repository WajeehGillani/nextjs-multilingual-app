import Head from "next/head";
import Album from "../src/Album";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Album />
    </div>
  );
}
