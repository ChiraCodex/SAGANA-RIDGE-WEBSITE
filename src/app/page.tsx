import Head from "next/head";
import Contacts from "./components/Contacts";
import Features from "./components/Features";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Hero from "./components/Hero";
import News from "./components/News";
import Footer from "./components/Footer";
import Plots from "./components/Plots";
import About from "./components/About";
import PaymentPlan from "./components/PaymentPlan";
import HomeTypes from "./components/HomeTypes";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sagana Ridge -Experience Lifestyle Living</title>
        <meta
          name="description"
          content="Secure your future with affordable plots at Sagana Ridge. Ideal for home or investment. Prime location, ready titles."
        />
      </Head>
      <main>
        <Header />
        <Hero />
        <About />
        <Features />
        <Plots/>
        <HomeTypes/>
        <PaymentPlan/>
        <Gallery />
        <News />
        <Contacts />
        <Footer/>
      </main>
    </>
  );
}
