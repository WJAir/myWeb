import React from 'react';
import styles from './index.module.css';
import Layout from '@theme/Layout';

export default function Hello() {
    return (
        <Layout title="Hello" description="Hello React Page">
            <div className={styles.shell}>
                <div className={styles.box}>
                    <img src="/img/pub/spring.jpg" alt="" />
                    <span>spring</span>
                </div>
                <div className={styles.box}>
                    <img src="/img/pub/summer.jpg" alt="" />
                    <span>summer</span>
                </div>
                <div className={styles.box}>
                    <img src="/img/pub/autumn.jpg" alt="" />
                    <span>autumn</span>
                </div>
                <div className={styles.box}>
                    <img src="/img/pub/winter.jpg" alt="" />
                    <span>winter</span>
                </div>
            </div>
        </Layout>
    );
}