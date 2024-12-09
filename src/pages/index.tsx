import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className="container flex flex-col my-auto items-center">
      <h1 className="">{siteConfig.title}</h1>
      <p className="">{siteConfig.tagline}</p>
      <div className={styles.buttons}>
        <Link
          className="bg-red-600 p-2 rounded-md text-white"
          to="/docs/welcome"
        >
          Get Started
        </Link>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Simple immersion tracking tool! Main objective is to provide a user-friendly platform for effortlessly tracking your immersion activities along the way."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
