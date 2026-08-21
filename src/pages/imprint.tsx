import React from "react";
import Head from "@docusaurus/Head";
import Contact from "../components/contact/index";
import Footer from "../components/footer/index";
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