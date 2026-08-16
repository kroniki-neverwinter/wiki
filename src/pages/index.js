import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageHeader from "./HomepageHeader";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description="Kroniki Neverwinter community wiki"
    >
      <HomepageHeader />
    </Layout>
  );
}
