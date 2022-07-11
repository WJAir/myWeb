import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {siteConfig.title}
        </div>
      </div>
    </section>
  );
}