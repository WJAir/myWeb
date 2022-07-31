import React from 'react';
import styles from './css/index.module.css';
import Layout from '@theme/Layout';

export default function Hello() {
    return (
        <Layout title="Image" description="Airy's image">
            <div className={styles.shell}>
                <div className={styles.box}>
                    <img src="/img/pub/spring.jpg" alt='大家都是倔强的人' />
                    <span>
                        <img src='/img/icon/spring.svg' className={styles.boxIcon} alt='Airy' ></img>
                    </span>
                </div>
                <div className={styles.box}>
                    <img src="/img/pub/summer.jpg" alt="大家都是倔强的人" />
                    <span>
                        <img src='/img/icon/summer.svg' className={styles.boxIcon} alt='Airy'></img>
                    </span>
                </div>
                <div className={styles.box}>
                    <img src="/img/pub/autumn.jpg" alt="大家都是倔强的人" />
                    <span>
                        <img src='/img/icon/autumn.svg' className={styles.boxIcon} alt='Airy'></img>
                    </span>
                </div>
                <div className={styles.box}>
                    <img src="/img/pub/winter.jpg" alt="大家都是倔强的人" />
                    <span>
                        <img src='/img/icon/winter.svg' className={styles.boxIcon} alt='Airy'></img>
                    </span>
                </div>
            </div>
        </Layout>
    );
}