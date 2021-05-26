import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './about.styles.module.css';

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
                          <h1>Contextual banking experiences, built quicker</h1>
                          <p className={styles.banner_content}>The original JAVA-based low code platform, specially designed for professional developers. It has a highly
                              flexible and reliable foundation that includes a host of modern front-end, mobile, back-end, and devOps
                              technologies that go into rapidly building and delivering enterprise-grade aPaaS platforms</p>
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
                      <h2 className={styles.h2_heading}>Why WaveMaker (WM)</h2>
                      <div className="row">
                          <div className="col col--4">
                              <img className={styles.icon_image} src="../../static/img/easy-to-use.svg" />
                              <h3 className={styles.icon_heading}>Easy to use</h3>
                              <p>WaveMaker ensures easy adoption of the platform with minimal training efforts. The platform simplifies the development process. Build entire banking applications from the ground up in half the time!</p>
                          </div>
                          <div class="col col--4">
                              <img className={styles.icon_image} src="../../static/img/highly-customizable.svg" />
                              <h3 className={styles.icon_heading}>Highly customizable</h3>
                              <p>WaveMaker handles the setup of core banking functionalities, powered by FIS API, so that you can focus on tailoring the look and feel of the application to suit the needs of your clients.</p>
                          </div>
                          <div className="col col--4">
                              <img className={styles.icon_image} src="../../static/img/prefabs.svg" />
                              <h3 className={styles.icon_heading}>Reusable prefabs warehouse</h3>
                              <p>Wavemaker Prefabs simplify the development process. From account management to bill payment, we have you covered. Our prefabs are independent, with each focused on one aspect of the banking process.</p>
                          </div>
                      </div>
                  </div>
              </section>
          }
          {
              <section className={styles.sec_3}>
                  <div className="container">
                      <h2 className={styles.h2_heading}>How WM is different</h2>
                      <div className="row">
                          <div className="col col--4">
                              <img className={styles.icon_image} src="../../static/img/developer-friendly.svg" />
                              <h3 className={styles.icon_heading}>Developer friendly open <br/>
                                  standards-based real code</h3>
                              <p>Wavemaker generates code that a developer can read, edit, customize and extend without any difficulty. The platform needs no training or reskilling to gain an ability for rewriting or changing the code</p>
                          </div>
                          <div class="col col--4">
                              <img className={styles.icon_image} src="../../static/img/licensing-model.svg" />
                              <h3 className={styles.icon_heading}>Licensing model that <br/>
                                  promotes scale and growth</h3>
                              <p>WaveMaker’s transparent and predictable pricing, independent of deployment choices, no. of apps, and no. of users is ideal for both end-user and internal apps</p>
                          </div>
                          <div className="col col--4">
                              <img className={styles.icon_image} src="../../static/img/production-grade.svg" />
                              <h3 className={styles.icon_heading}>Production-grade <br/>
                                  enterprise-ready applications</h3>
                              <p>Applications rolled out on WaveMaker require minimal effort from development to production. They can be easily certified, maintained and upgraded by IT teams</p>
                          </div>
                      </div>
                  </div>
              </section>
          }
          {
              <section className={styles.sec_4}>
                  <div className="container">
                      <h2 className={styles.h2_heading}>WM professional services wing</h2>
                      <div className="row">
                          <div className="col col--9">
                          <p>To provide maximum value, WaveMaker offers 3 progressive levels of professional services worldwide: enablement, catalyst support, and large-scale enterprise implementation</p>
                          <p><b>Enablement Services provides</b> consultation by FIS WM LCD experts to build/design solutions using best practices. Our success stories within Digital One(D1) Modern Banking Platform (MBP) LOB’s, and understanding FIS’s needs to meet their objectives. A 5-day customized training program for WM newbies on a wide array of topics like building mobile applications, creating prefabs, customizing backend and front end code, etc. is included.</p>
                          <p>Enablement services are ideal for FIS Project Teams that are new to the platform, looking to launch a POC or find optimal domain-specific business solutions.</p>
                          <p><b>Catalyst support services</b> start when enablement services end. This service offers several options intended to catalyze platform adoption, ROI, and scaling of WM-powered development. The dedicated services team can either work independently or as part of the FIS project team. It typically comprises an experienced team of cross-functional consultants with expertise in WM architecture & design, user experience (UX), solution development, theme building, and deployment.</p>
                          <p className={styles.bold_image_title}><b>LCD Team Structure can be customised to your project team needs</b></p>
                         <img src="../../static/img/lcd-team.svg" />
                         <p className={styles.space_para}>WaveMaker Professional Services assigns a long-lived cross functional team constituting all disciplines of Agile SDLC UX/UI/WM Developer/QA/WM Architect based on the program or project’s need</p>
                          <p className={styles.bold_image_title}><b>Current D1 LCD Customer Implementation Team Structure</b></p>
                         <img src="../../static/img/lcd-customer.svg" />
                          </div>
                      </div>
                  </div>
              </section>
          }
      </main>
    </Layout>
  );
}
