import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import logo  from '../../static/img/main_logo.png';

import Heading from '@theme/Heading';
import styles from './index.module.css';


export const HomepageHeader = () => {
    const {siteConfig} = useDocusaurusContext();
    return (
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
        <Heading as="h1" className="hero__title">
            {siteConfig.title}
          </Heading>
        <img src={logo} alt="Alt text" />
          <div>
            <h2>Moduł:</h2><p>KronikiNeverwinter</p>
            <h2>Setting:</h2><p>Zapomniane Krainy, Wybrzeże Mieczy</p>
            <h2>Adres serwera:</h2><p>18.157.53.102</p>
            <h2>Port:</h2><p>5121 </p>
          </div>
            <Link
              className="button button--secondary button--lg"
              to="/docs/category/podstawowe-informacje">
              Więcej informacji
            </Link>
        </div>
      </header>
    );
  }