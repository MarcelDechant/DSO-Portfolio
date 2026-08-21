
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Head from '@docusaurus/Head';


import Hero from '@site/src/components/hero';
import Header from '@site/src/components/header';
import MySkills from '@site/src/components/my-skills';
import MyProjects from '@site/src/components/my-projects';
import Contact from '@site/src/components/contact';
import Footer from '@site/src/components/footer';



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
