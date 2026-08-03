import React from "react";
import Head from "@docusaurus/Head";
import Header from "../components/Header/index";
import Contact from "../components/Contact/index";
import Footer from "../components/Footer/index";
import Privacy from "../components/privacy/index";
import Imprint from "../components/imprint";


const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Marcel Dechant Legal Notice</title>
      </Head>
      <Imprint />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;