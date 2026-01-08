
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Head from '@docusaurus/Head';


import Hero from '@site/src/components/Hero';
import Header from '@site/src/components/Header';
import MySkills from '@site/src/components/MySkills';
import MyProjects from '@site/src/components/MyProjects';
import Contact from '@site/src/components/Contact';
import Footer from '@site/src/components/Footer';



export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <>
      <Head>
        <title>Mein Portfolio – Marcel Dechant</title>
        <meta
          name="description"
          content="Portfolio von Marcel Dechant – Webentwicklung, Projekte, Skills"
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <MySkills />
        <MyProjects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
