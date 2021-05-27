import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from "./index.module.css";

export default function home() {
    const context = useDocusaurusContext();
    const {siteConfig = {}} = context;
    return (
        <Layout
            title={`Home ${siteConfig.title}`}
            description="Description will go into a meta tag in <head />">
            <main>
                {
                    <section className={styles.home_banner}>
                        <div className="container">
                            <div className={clsx('row', styles.home_banner_row)}>
                                <div className="col col--6">
                                    <h1 className={styles.banner_heading}>FIS and WaveMaker: low code collaboration</h1>
                                    <p className={styles.banner_content}>Welcome! Please explore this portal to understand <br/>
                                        WaveMaker better, and access all the projects <br/>
                                        ongoing and undertaken with the platform.</p>
                                    <a href="/docs" className={styles.blk_btn}>Get started</a>
                                </div>
                                <div className="col col--6">
                                    <img className={styles.banner_image} src="img/home/WaveMaker-FIS-Img.svg"/>
                                </div>
                            </div>
                        </div>
                    </section>
                }
            </main>
        </Layout>
    );
}
