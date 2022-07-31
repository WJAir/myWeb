import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './css/index.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Head from '@docusaurus/Head';
import HomepageFeatures from '../components/HomepageFeatures';
import Link from '@docusaurus/Link';
import clsx from 'clsx';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className="hero">
      <div className={styles.welcome_intro}>
        {/* <h1 className={styles.hero_titles}>大家都是倔强的人</h1> */}
        <div>
          <img src="/img/mains.svg" alt='飞离地球！！！' title='飞离地球！！！' className={styles.welcome_svg} />
        </div>
        <h1 className={styles.hero_title}>
          <span style={{ color: 'var(--ifm-color-primary)' }}>
            Over the mountains,mountains
          </span>
        </h1>
        <p className={styles.hero__subtitle}>
          很早就有写些什么的想法，关于自己，关于他们，只是，每到刚要下笔的时候，却又不知从何说起，很多事，找不到合适的语言来表达，
          我不知道我这已经过了的二十多年，是该如何的，那些犯过的错，遇见的人，说过的话，好像都变得模糊了。
          <a href='docs/about' alt='Airy' title='Airy' className='button button--outline button--primary '>Go →</a>
        </p>
        <div className={styles.about_button}>
          {/* QQ */}
          <Link
            className={clsx(
              styles.getStarted, styles.mains, styles.scale
            )}
            to={""}>
            <img className={styles.QRcode} src="img/pub/QQ.jpg" alt="APP" />
            <img className={styles.logo} src='img/icon/qq.svg'></img>
          </Link>

          {/* 微信 */}
          <Link
            className={clsx(
              styles.getStarted, styles.mains, styles.scale
            )}
            to={""}>
            <img className={styles.QRcode} src="img/pub/WeChat.png" alt="APP" />
            <img className={styles.logo} src='img/icon/微信.svg'></img>
          </Link>

          {/* 公众号 */}
          <Link
            className={clsx(
              styles.getStarted, styles.mains, styles.scale
            )}
            to={""}>
            <img className={styles.QRcode} src="img/pub/公众号.jpg" alt="公众号" />
            <img className={styles.logo} src='img/icon/微信公众号.svg'></img>
          </Link>
        </div>
      </div>

    </div >
  );
}

export default function Home() {
  return (
    <Layout
      description="Over the mountains,mountains">
      <Head>
        <title>Airy</title>
      </Head>
      <HomepageHeader />
      {/* <main>
        <br />
        <HomepageFeatures />
      </main> */}
    </Layout>
  );
}
