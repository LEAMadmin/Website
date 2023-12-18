import Head from "next/head";
import Navbar from "../components/navbar/Navbar";
import Team from "../components/team/Team";
import Footer from "../components/footer/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>LEAM - Team</title>
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>
      <Navbar />
      <Team />
      <Footer />
    </div>
  );
}
