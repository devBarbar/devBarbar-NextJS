import Head from "next/head";

import Layout from "../components/Layout";

export default () => (
  <Layout>
    <Head>
      <title>Generic Page</title>
      <meta name="description" content="Generic Page" />
    </Head>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>
              <a href="https://immobilien-und-consulting.netlify.com/">
                Neubauer und Sohn
              </a>
            </h1>
          </header>
          <span className="image main">
            <img src="/static/images/pic11.jpg" alt="" />
          </span>
          <p>
            This project Is a Landingpage Generator for an frankfurt based real
            estate agency. The goal of the application was to create a custom
            CMS in which they would be able to generate Landingpages by
            themself. Since the content of the Pages would be static I decided
            to use GatsbyJS together with NetlifyCMS and to create the
            Landingpages at build time. They are able to input all of their
            informations into the CMS, which would create a JSON File. This
            triggers a git hook and gatsby would restart the build process,
            sourcing the content and generating a new landingpage from the JSON
            File.
          </p>
          <p>
            Technologies used
            <ul>
              <li>React (Gatsby)</li>
              <li>Styled-Components</li>
              <li>Netlify CMS</li>
              <li>Dynamically Sourcing from JSON</li>
            </ul>
          </p>
          <p></p>
        </div>
      </section>
    </div>
  </Layout>
);
