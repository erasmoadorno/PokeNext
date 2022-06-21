import Footer from "./Footer";
import Navbar from "./Navbar";
import Head from "next/head";

export default function Layoult({ children }) {
  return (
    <>
      <Head>
        <title>PokéNext</title>
        <link rel="shortcut icon" href="/images/favicon.ico" />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
