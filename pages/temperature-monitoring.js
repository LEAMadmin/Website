import Head from "next/head";
import Navbar from "../components/navbar/Navbar";
import Temperature from "../components/temperature/Temperature";
import Footer from "../components/footer/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>LEAM - Temperature Monitoring</title>
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>
      <Navbar />
      <Temperature />
      <Footer />
    </div>
  );
}
