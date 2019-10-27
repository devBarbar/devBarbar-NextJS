import Link from "next/link";

import Layout from "../components/Layout";
import Banner from "../components/Banner";

export default () => (
  <Layout>
    <div>
      <Banner />

      <div id="main">
        <section id="one" className="tiles">
          <article
            style={{ backgroundImage: `url('/static/images/pic01.jpg')` }}
          >
            <header className="major">
              <h3>Real Estate and Consulting Landing Page</h3>
              <p>GatsbyJS, NetlifyCMS</p>
            </header>
            <Link href="/immobilienConsulting">
              <a className="link primary"></a>
            </Link>
          </article>
          <article
            style={{ backgroundImage: `url('/static/images/pic02.jpg')` }}
          >
            <header className="major">
              <h3>Tempus</h3>
              <p>feugiat amet tempus</p>
            </header>
            <Link href="/landing">
              <a className="link primary"></a>
            </Link>
          </article>
          <article
            style={{ backgroundImage: `url('/static/images/pic03.jpg')` }}
          >
            <header className="major">
              <h3>Magna</h3>
              <p>Lorem etiam nullam</p>
            </header>
            <Link href="/landing">
              <a className="link primary"></a>
            </Link>
          </article>
          <article
            style={{ backgroundImage: `url('/static/images/pic04.jpg')` }}
          >
            <header className="major">
              <h3>Ipsum</h3>
              <p>Nisl sed aliquam</p>
            </header>
            <Link href="/landing">
              <a className="link primary"></a>
            </Link>
          </article>
          <article
            style={{ backgroundImage: `url('/static/images/pic05.jpg')` }}
          >
            <header className="major">
              <h3>Consequat</h3>
              <p>Ipsum dolor sit amet</p>
            </header>
            <Link href="/landing">
              <a className="link primary"></a>
            </Link>
          </article>
          <article
            style={{ backgroundImage: `url('/static/images/pic06.jpg')` }}
          >
            <header className="major">
              <h3>Etiam</h3>
              <p>Feugiat amet tempus</p>
            </header>
            <Link href="/landing">
              <a className="link primary"></a>
            </Link>
          </article>
        </section>
        <section id="two">
          <div className="inner">
            <header className="major">
              <h2>About me</h2>
            </header>
            <p>
              I am currently a student at frankfurt university of applied
              science, working towards my bachelors degree in Computer Science.
              My expertise is in developing fullstack Applications using React
              with NextJS or building Nanoservice & Socket Architecture using
              Python.
            </p>
            <ul className="actions">
              <li>
                <Link href="#contact">
                  <a className="button next">Contact me</a>
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  </Layout>
);
