import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { PageMetadata } from "@docusaurus/theme-common";
import LayoutProvider from "@theme/Layout/Provider";

const HorizontalRule = () => {
  return <hr className="flex-grow border-4 w-full" />;
};

function Homepage() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className="container flex flex-col justify-center items-center h-screen uppercase gap-2">
      <div className="flex flex-col items-center">
        <HorizontalRule />
        <h1 className="m-0">{siteConfig.title}</h1>
        <HorizontalRule />
      </div>
      <p className="m-0">{siteConfig.tagline}</p>
      <Link className="bg-red-600 p-2 rounded-lg text-white mt-4" to="/docs/welcome">
        Get Started
      </Link>
    </div>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <LayoutProvider>
      <PageMetadata
        title={siteConfig.title}
        description="Simple immersion tracking tool! Trying to provide a user-friendly tool to effortlessly track your immersion activities online."
      />

      <main>
        <Homepage />
      </main>
    </LayoutProvider>
  );
}
