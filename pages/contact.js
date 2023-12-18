import Head from "next/head";
import Navbar from "../components/navbar/Navbar";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>LEAM - Contact</title>
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>
      <Navbar />
      <Contact />
      <Footer />
    </div>
  );
}
