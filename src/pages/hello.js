import React from 'react';
import styles from './index.module.css';
import Layout from '@theme/Layout';

export default function Hello() {
    return (
        <Layout title="Hello" description="Hello React Page">
            <div className={styles.shell}>
                <div className={styles.box}>
                    <img src="https://www.blairwj.cn/img/img_1.jpg" alt="" />
                    <span>知</span>
                </div>
                <div className={styles.box}>
                    <img src="https://www.blairwj.cn/img/img_2.jpg" alt="" />
                    <span>来</span>
                </div>
                <div className={styles.box}>
                    <img src="https://www.blairwj.cn/img/img_3.jpg" alt="" />
                    <span>者</span>
                </div>
                <div className={styles.box}>
                    <img src="https://www.blairwj.cn/img/img_4.jpg" alt="" />
                    <span>之</span>
                </div>
                <div className={styles.box}>
                    <img src="https://www.blairwj.cn/img/img_5.jpg" alt="" />
                    <span>可</span>
                </div>
                <div className={styles.box}>
                    <img src="https://www.blairwj.cn/img/img_6.jpg" alt="" />
                    <span>追</span>
                </div>
            </div>
        </Layout>
    );
}