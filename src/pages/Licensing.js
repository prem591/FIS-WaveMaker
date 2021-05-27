import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './licensing.styles.module.css';

export default function about() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`About ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <main>
        {
          <section className={styles.sec_1}>
            <div className="container">
              <div className="row">
                  <div className="col col--2"></div>
                      <div class="col col--8">
                          <h1>Scale with WaveMaker</h1>
                          <p className={styles.banner_content}>A bad licensing model can choke your growth. WaveMaker has an affordable and uncomplicated licensing model designed to enable scale for your applications & platforms. Our pricing is based on developer seats, and does not inhibit the complexity or number of apps you want to build.</p>
                      <a href="/docs" className={styles.blk_btn}>Start free trial</a>
                      </div>
                  <div className="col col--2"></div>
                    </div>
              </div>
            </section>
        }
          {
              <section className={styles.sec_2}>
                  <div className={clsx('container', styles.no_padding)}>
                      <div className="row">
                          <div className={clsx('col col--4', styles.pricing_table_col)}>
                              <div className={styles.pricing_table}>
                              <div className={styles.pricing_table_header}>
                              <h2 className={styles.pricing_table_header_heading}>Solo</h2>
                              <p className={styles.pricing_table_header_content}>Cloud-hosted application platform as a service for consultants. Priced per developer. Billed monthly or annually.</p>
                               </div>
                              <div className={styles.pricing_table_quote}>
                                  <h2 className={styles.pricing_table_quote_heading}>$500</h2>
                                  <p className={styles.pricing_table_quote_content}>Monthly</p>
                              </div>
                              <div className={styles.pricing_table_body}>
                                  <p className={styles.pricing_table_body_content}><img src="/img/licencing/Icon-Right.svg" />Unlimited Apps</p>
                                  <p className={styles.pricing_table_body_content}><img src="/img/licencing/Icon-Right.svg" />Unlimited App Users</p>
                                  <p className={styles.pricing_table_body_content}><img src="/img/licencing/Icon-Wrong.svg" />Team Collaboration</p>
                                  <p className={styles.pricing_table_body_content}><img src="/img/licencing/Icon-Wrong.svg" />Enterprise Integrations</p>
                                  <p className={styles.pricing_table_body_content}><img src="/img/licencing/Icon-Wrong.svg" />Enterprise Administration</p>
                                  <p className={styles.pricing_table_body_content}><img src="/img/licencing/Icon-Right.svg" />Standard Support <span
                                      className={styles.tooltip}><img src="/img/licencing/Icon-question.svg" /><span className={styles.tooltiptext}>Email and Chat support with 1 day SLA</span> </span></p>
                                  <p className={styles.pricing_table_body_content}><img src="/img/licencing/Icon-dollar.svg" />Training & Professional Services <span
                                      className={styles.tooltip}><img src="/img/licencing/Icon-question.svg" /><span className={styles.tooltiptext}>Available at additional cost</span> </span></p>
                                  <p className={styles.pricing_table_body_content}><img src="/img/licencing/Icon-Wrong.svg" />Proof of Concept (POC)</p>
                             </div>
                              </div>
                              </div>
                          <div className={clsx('col col--4', styles.pricing_table_col)}>
                              <div className={styles.pricing_table}>
                                  <div className={styles.pricing_table_header}>
                                      <h2 className={styles.pricing_table_header_heading}>Small Team</h2>
                                      <p className={styles.pricing_table_header_content}>Cloud-hosted application platform as a service for small teams. Priced per team of 5 developers. Billed annually.</p>
                                  </div>
                                  <div className={styles.pricing_table_quote}>
                                      <h2 className={styles.pricing_table_quote_heading}>Get Quote</h2>
                                  </div>
                                  <div className={styles.pricing_table_body}>
                                      <p className={styles.pricing_table_body_content}><img src="/img/licencing/Icon-Right.svg" />Unlimited Apps</p>
                                      <p className={styles.pricing_table_body_content}><img src="/img/licencing/Icon-Right.svg" />Unlimited App Users</p>
                                      <p className={styles.pricing_table_body_content}><img src="/img/licencing/Icon-Right.svg" />Team Collaboration</p>
                                      <p className={styles.pricing_table_body_content}><img src="/img/licencing/Icon-Wrong.svg" />Enterprise Integrations</p>
                                      <p className={styles.pricing_table_body_content}><img src="/img/licencing/Icon-Wrong.svg" />Enterprise Administration</p>
                                      <p className={styles.pricing_table_body_content}><img src="/img/licencing/Icon-Right.svg" />Priority Support <span
                                          className={styles.tooltip}><img src="/img/licencing/Icon-question.svg" /><span className={styles.tooltiptext}>Email and Chat support with 12-hour SLA</span> </span></p>
                                      <p className={styles.pricing_table_body_content}><img src=c/img/licencing/Icon-dollar.svg" />Training & Professional Services <span
                                          className={styles.tooltip}><img src="/img/licencing/Icon-question.svg" /><span className={styles.tooltiptext}>Available at additional cost</span> </span></p>
                                      <p className={styles.pricing_table_body_content}><img src="/img/licencing/Icon-Wrong.svg" />Proof of Concept (POC)</p>
                                  </div>
                              </div>
                          </div>
                          <div className={clsx('col col--4', styles.pricing_table_col)}>
                              <div className={styles.pricing_table}>
                                  <div className={styles.pricing_table_header}>
                                      <h2 className={styles.pricing_table_header_heading}>Enterprise</h2>
                                      <p className={styles.pricing_table_header_content}>Platform hosted on-premise or private cloud for enterprise teams. Priced per team of 10 developers. Billed annually.</p>
                                  </div>
                                  <div className={styles.pricing_table_quote}>
                                      <h2 className={styles.pricing_table_quote_heading}>Get Quote</h2>
                                  </div>
                                  <div className={styles.pricing_table_body}>
                                      <p className={styles.pricing_table_body_content}><img src="../../static/img/licencing/Icon-Right.svg" />Unlimited Apps</p>
                                      <p className={styles.pricing_table_body_content}><img src="../../static/img/licencing/Icon-Right.svg" />Unlimited App Users</p>
                                      <p className={styles.pricing_table_body_content}><img src="../../static/img/licencing/Icon-Right.svg" />Team Collaboration</p>
                                      <p className={styles.pricing_table_body_content}><img src="../../static/img/licencing/Icon-Right.svg" />Enterprise Integrations <span
                                          className={styles.tooltip}><img src="../../static/img/licencing/Icon-question.svg" /><span className={styles.tooltiptext}>Private Repos, CI/CD, Component Repository and more</span> </span></p>
                                      <p className={styles.pricing_table_body_content}><img src="../../static/img/licencing/Icon-Right.svg" />Enterprise Administration  <span
                                          className={styles.tooltip}><img src="../../static/img/licencing/Icon-question.svg" /><span className={styles.tooltiptext}>Developer Roles, Infrastructure Management, Prometheus Insights and more</span> </span></p>
                                      <p className={styles.pricing_table_body_content}><img src="../../static/img/licencing/Icon-Right.svg" />Priority Support <span
                                          className={styles.tooltip}><img src="../../static/img/licencing/Icon-question.svg" /><span className={styles.tooltiptext}>Email and Chat support with 12-hour SLA</span> </span></p>
                                      <p className={styles.pricing_table_body_content}><img src="../../static/img/licencing/Icon-dollar.svg" />Training & Professional Services <span
                                          className={styles.tooltip}><img src="../../static/img/licencing/Icon-question.svg" /><span className={styles.tooltiptext}>Available at additional cost</span> </span></p>
                                      <p className={styles.pricing_table_body_content}><img src="../../static/img/licencing/Icon-dollar.svg" />Proof of Concept (POC) <span
                                          className={styles.tooltip}><img src="../../static/img/licencing/Icon-question.svg" /><span className={styles.tooltiptext}>POC app built by WaveMaker experts. Available at additional cost.</span> </span></p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
          }

      </main>
    </Layout>
  );
}
