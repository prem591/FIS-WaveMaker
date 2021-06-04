import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './enablement.styles.module.css';

export default function enablement() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Enablement ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <main>
        {
          <section className={styles.sec_1}>
            <div className="container">
              <div className="row">
                  <div className="col col--2"></div>
                      <div class="col col--8">
                          <h1>Train with WaveMaker</h1>
                          <p className={styles.banner_content}>WaveMaker(WM) gives its users a wholesome experience. From customized training programs to detailed documentation and feature-level tutorials, always be prepared.</p>
                      <a href="/docs" className={styles.blk_btn}>Take a quick tour of the platform</a>
                      </div>
                  <div className="col col--2"></div>
                    </div>
              </div>
            </section>
        }

          {
              <section className={styles.sec_2}>
                  <div className="container">
                      <div className="row">
                          <div className="col col--2"></div>
                          <div className={clsx('col col--8', styles.bg_color)}>
                              <h2 className={styles.enablement_h2_heading}>Learn @ WM</h2>
                          <p>Explore the knowledge center of WM to get step-by-step tutorials of specific features and applications. Learn how to build fully functional web and mobile applications and stay updated with our latest product releases and news.</p>
                              <a href="https://www.wavemaker.com/learn/" target="_blank" className={styles.blk_btn}>Explore the learning center</a>
                          </div>
                          <div className="col col--2"></div>
                      </div>
                  </div>
              </section>
          }
          {
              <section className={styles.sec_3}>
                  <div className="container">
                      <div className="row">
                          <div className="col col--2"></div>
                          <div className={clsx('col col--8', styles.bg_color)}>
                              <h2 className={styles.enablement_h2_heading}>FIS training</h2>
                              <p>The WM team completed a 6-day long training session with the core FIS team in September, 2020. This training was tailor-made after an in-depth understanding of the needs of the teams.</p>
                              <a href="/img/enablement/wm-useful-links.pdf" target="_blank" className={styles.blk_btn}>Useful links for first-time users</a>
                          </div>
                          <div className="col col--2"></div>
                      </div>
                  </div>
              </section>
          }
      </main>
    </Layout>
  );
}
