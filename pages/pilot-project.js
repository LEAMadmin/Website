import Head from "next/head";
import Navbar from "../components/navbar/Navbar";
import Pilot from "../components/pilot/Pilot";
import Footer from "../components/footer/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>LEAM - Pilot Project</title>
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>
      <Navbar />
      <Pilot />
      <Footer />
    </div>
  );
}
