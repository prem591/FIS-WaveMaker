import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './engagement.styles.module.css';

export default function engagement() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Engagement ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <main className="styles.engagement">
        {
          <section className={styles.engagement_sec_1}>
            <div className="container">
              <div className="row">
                  <div className="col col--2"></div>
                      <div class="col col--8">
                          <h1>Grow with WaveMaker</h1>
                          <p className={styles.banner_content}>Engage with WaveMaker to understand all the offerings of the world-class professional services team equipped to collaborate with the FIS team at any stage of the SDLC, and our predictable licensing model that inspires growth and scale</p>
                      <a href="https://www.wavemaker.com/get-started/" target="_blank" className={styles.blk_btn}>Try WaveMaker for free</a>
                      </div>
                  <div className="col col--2"></div>
                    </div>
              </div>
            </section>
        }
          {
              <section className={styles.engagement_sec_2}>
                  <div className="container">
                      <h2 className={styles.h2_heading}>WM professional services wing</h2>
                      <div className="row">
                          <div className="col col--9">
                          <p>To provide maximum value, WaveMaker offers 3 progressive levels of professional services worldwide: enablement, catalyst support, and large-scale enterprise implementation</p>
                          <p><ul><li><b> Enablement Services provides</b> consultation by FIS WM LCD experts to build/design solutions using best practices. Our success stories within Digital One(D1) Modern Banking Platform (MBP) LOB’s, and understanding FIS’s needs to meet their objectives. A 5-day customized training program for WM newbies on a wide array of topics like building mobile applications, creating prefabs, customizing backend and front end code, etc. is included. <br /> <span className={styles.space_top_10}>Enablement services are ideal for FIS Project Teams that are new to the platform, looking to launch a POC or find optimal domain-specific business solutions.</span></li></ul></p>
                          <p></p>
                          <p><ul><li><b>Catalyst support services</b> start when enablement services end. This service offers several options intended to catalyze platform adoption, ROI, and scaling of WM-powered development. The dedicated services team can either work independently or as part of the FIS project team. It typically comprises an experienced team of cross-functional consultants with expertise in WM architecture & design, user experience (UX), solution development, theme building, and deployment.</li></ul></p>
                          <p className={styles.bold_image_title}><b>LCD Team Structure can be customised to your project team needs</b></p>
                         <img src="/img/lcd-team.svg" />
                         <p className={styles.space_para}><ul><li>WaveMaker Professional Services assigns a long-lived cross functional team constituting all disciplines of Agile SDLC UX/UI/WM Developer/QA/WM Architect based on the program or project’s need</li></ul></p>
                          <p className={styles.bold_image_title}><b>Current D1 LCD Customer Implementation Team Structure</b></p>
                         <img src="/img/lcd-customer.svg" />
                          </div>
                      </div>
                  </div>
              </section>
          }
          {
              <section className={styles.engagement_sec_3}>
                  <div className="container">
                      <div className="row">
                          <div className="col col--9">
                              <h2 className={styles.h2_heading}>WM Licensing</h2>
                              <p>A bad licensing model can choke your growth. WaveMaker has an affordable and uncomplicated licensing model designed to enable scale for your applications & platforms. Our pricing does not inhibit the complexity or number of apps you want to build. The subscription is available in 2 flavors</p>
                              <div className={clsx('row', styles.wm_lecensing_sec)}>
                              <div className={clsx('col col--5', styles.blue_box)}>
                              <img className={styles.icon_image} src="/img/engagement/wm-enterprise.svg" />
                              <h3 className={styles.icon_heading}>WaveMaker Enterprise</h3>
                              <p>Platform hosted on-premise or private cloud for enterprise teams</p>
                          </div>
                          <div className={clsx('col col--5', styles.blue_box)}>
                              <img className={styles.icon_image} src="/img/engagement/wm-team.svg" />
                              <h3 className={styles.icon_heading}>WaveMaker Teams</h3>
                              <p>SaaS Public Cloud-hosted application platform as a service for small teams</p>
                          </div>
                          <div className="col col--2"></div>
                              </div>
                              <p>FIS has deployed WaveMaker Enterprise within its OpenShift on-Premise <br />environment since it can be fully hosted on it.</p>
                          </div>
                      </div>
                  </div>
              </section>
          }
          {
              <section className={styles.engagement_sec_4}>
               <div className="container">
                <div className="row">
                 <div className="col col--9">
               <h2 className={styles.h2_heading}>FAQs</h2>
              <details>
                  <summary>How does the licensing work?</summary>
                  <p>WM Licensing is an annual subscription model. It is based purely on developer seats or number of developers, irrespective of no. of apps, users, or platforms. A minimum number of 10 developer seats have to be bought as part of the enterprise package</p>
              </details>
               <details>
                <summary>What are the benefits of the WM Licensing?</summary>
                 <p>Customers that subscribe to WM licensing have the following benefits:</p>
                   <ul>
                       <li>Build unlimited apps with unlimited end users (No restrictions)</li>
                       <li>Deploy the custom built apps to infrastructure combination of choice (FIS On-Premise, FIS Private Cloud)</li>
                       <li>Get premium email support</li>
                       <li>Get full access to the training material</li>
                   </ul>
               </details>
               <details>
               <summary>What about Support?</summary>
               <p>WM customers get premium support. This gives them access to contact the WM support team on a communication channel of their choice— email, phone, or on Zoom. More details about the support policy can be found here, <a href="https://www.wavemaker.com/legal/support-policy/" target="_blank">https://www.wavemaker.com/legal/support-policy/</a> </p>
              </details>
                     <details>
                         <summary>What about the application source code?</summary>
                         <p>WaveMaker supports customers to completely own the app and code with no lock-in. WaveMaker Platform provides the ability to export the complete source code of the application. The source code can be exported as a standard maven compliant Java web application.</p>
                     </details>
                     <details>
                         <summary>What about regular updates and patches?</summary>
                         <p>WaveMaker has a very active release strategy with major releases rolling out every 9 to 12 months, along with minor releases every quarter. WM supports bi-monthly releases that include patches and bug fixes. More on releases can be found here, <a href="https://www.wavemaker.com/learn/wavemaker-release-notes" target="_blank">https://www.wavemaker.com/learn/wavemaker-release-notes</a> <br /><br />All WM-licensed customers get regular updates, patches, and releases at no additional cost; it is part of the enterprise licensing and premium support policy.</p>
                     </details>
                     <details>
                         <summary>Teams and Enterprise together</summary>
                         <p>Sometimes it is very convenient to use WM TEAMS as it is SaaS-based and provides easy collaboration between FIS and WM professional team developers to work on the same project. WM supports customers to start their projects on the TEAMS edition and then transition it to the enterprise when they see fit. This way, FIS can onboard projects leveraging the WM professional team developers quickly on the SaaS offering before transitioning the project to on-Premise. Applications built on WaveMaker TEAMS can be deployed anywhere.</p>
                     </details>
                     <br />For more information, please write to <a href="mailto:info@wavemaker.com" >info@wavemaker.com</a>
               </div>

             </div>
           </div>
           </section>
          }
      </main>
    </Layout>
  );
}
