import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Heading from "@theme/Heading";
import logo from "../../static/img/KN_logo_transparent_2.png";
import styles from "./index.module.css";

const serverDetails = [
  ["Moduł", "KronikiNeverwinter"],
  ["Setting", "Zapomniane Krainy, Wybrzeże Mieczy"],
  ["Adres serwera", "4.185.28.160"],
  ["Port", "30121"],
];

export const HomepageHeader = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <img
          src={logo}
          alt="Kroniki Neverwinter logo"
          width={512}
          height={512}
        />
        <dl className={styles.serverDetails}>
          {serverDetails.map(([label, value]) => (
            <div key={label} className={styles.serverDetail}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
        <Link
          className="button button--secondary button--lg"
          to="/docs/category/podstawowe-informacje"
        >
          Więcej informacji
        </Link>
      </div>
    </header>
  );
}
