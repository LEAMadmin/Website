import Head from "next/head";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/landing/hero/Hero";
import Products from "../components/landing/products/Products";
import Partners from "../components/landing/partners/Partners";
import Features from "../components/landing/features/Features";
import Footer from "../components/footer/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>LEAM</title>
        <link rel="icon" href="/assets/favicon.ico" />
        <meta
          name="description"
          content="LEAM enables isotropic properties in polymer 3D printing"
        />
      </Head>
      <Navbar />
      <Hero />
      <Products />
      <Partners />
      <Features />
      <Footer />
    </div>
  );
}
