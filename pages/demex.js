import Head from "next/head";
import Navbar from "../components/navbar/Navbar";
import Demex from "../components/demex/Demex";
import Footer from "../components/footer/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>LEAM - Demex</title>
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>
      <Navbar />
      <Demex />
      <Footer />
    </div>
  );
}
