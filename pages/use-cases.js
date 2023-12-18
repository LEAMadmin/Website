import Head from "next/head";
import Navbar from "../components/navbar/Navbar";
import UseCases from "../components/usecases/UseCases";
import Footer from "../components/footer/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>LEAM - Use cases</title>
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>
      <Navbar />
      <UseCases />
      <Footer />
    </div>
  );
}
