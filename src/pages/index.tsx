
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';


import Hero from '@site/src/components/Hero';
import Header from '@site/src/components/Header';
import MySkills from '@site/src/components/MySkills';
import MyProjects from '@site/src/components/MyProjects';
import Contact from '@site/src/components/Contact';
import Footer from '@site/src/components/Footer';



export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <Header />
      <main>
        <Hero />
        <MySkills />
        <MyProjects />
        <Contact />
      </main>
      <Footer />
    </Layout>
  );
}
