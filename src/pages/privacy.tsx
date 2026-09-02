import React from "react";
import Head from "@docusaurus/Head";
import Contact from "../components/contact/index";
import Footer from "../components/footer/index";
import Privacy from "../components/privacy/index";

const Home: React.FC = () => {
    return (
        <>
            <Head>
                <title>Marcel Dechant Privacy Policy</title>
            </Head>
            <Privacy />
            <Contact />
            <Footer />
        </>
    );
};

export default Home;