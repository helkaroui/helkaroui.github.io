import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
    {
        title: 'Easy to Use',
        imageUrl: 'img/undraw_docusaurus_mountain.svg',
        description: (
            <>
                Docusaurus was designed from the ground up to be easily installed and
                used to get your website up and running quickly.
            </>
        ),
    },
    {
        title: 'Focus on What Matters',
        imageUrl: 'img/undraw_docusaurus_tree.svg',
        description: (
            <>
                Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
                ahead and move your docs into the <code>docs</code> directory.
            </>
        ),
    },
    {
        title: 'Powered by React',
        imageUrl: 'img/undraw_docusaurus_react.svg',
        description: (
            <>
                Extend or customize your website layout by reusing React. Docusaurus can
                be extended while reusing the same header and footer.
            </>
        ),
    },
];

function Feature({imageUrl, title, description}) {
    const imgUrl = useBaseUrl(imageUrl);
    return (
        <div className={clsx('col col--4', styles.feature)}>
            {imgUrl && (
                <div className="text--center">
                    <img className={styles.featureImage} src={imgUrl} alt={title}/>
                </div>
            )}
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

export default function Home() {
    const context = useDocusaurusContext();
    const {siteConfig = {}} = context;
    return (
        <Layout
            title={`My Geek Cookbook`}
            description="Sharek's Geek Cookbook is a collection of how-to guides for multiple subjects varying from establishing your own container-based self-hosting
platform, to how to optimize your big data jobs.">
            <header className={clsx('hero hero--primary', styles.heroBanner)}>
                <div className="container">
                    <h1 className="hero__title">{siteConfig.title}</h1>
                    <p className="hero__subtitle">{siteConfig.tagline}</p>
                    <div className={styles.buttons}>
                        <Link
                            className={clsx(
                                'button button--outline button--secondary button--lg',
                                styles.getStarted,
                            )}
                            to={useBaseUrl('big_data/spark/internals/overview/')}>
                            Dive into my Spark's chef notes 🚀
                        </Link>
                        <br/>
                        <Link
                            className={clsx(
                                'button button--outline button--secondary button--lg',
                                styles.getStarted,
                            )}
                            to={useBaseUrl('home_cloud/overview/')}>
                            Explore my home-cloud chef notes 📝
                        </Link>
                    </div>
                </div>
            </header>
            <main>
                <section className={styles.sectionDescription}>
                    <div className="container">
                        <h1>Welcome, fellow geek 👋</h1>
                        <div className={clsx(styles.section)}>
                            <h2>What is this ?</h2>
                            <p>Sharek's <strong>Geek Cookbook</strong> is a collection of how-to guides covering newest
                                technologies: from establishing your own container-based self-hosting platform, to how
                                to optimize your big data jobs, here you'll find all you need.</p>
                        </div>

                        <div className={clsx(styles.section)}>
                            <h2>Who is this for ?</h2>
                            <p>You already have a familiarity with concepts such as virtual machines, Docker containers,
                                LetsEncrypt SSL certificates, databases, command-line interfaces, big data
                                architectures.</p>
                        </div>

                        <div className={clsx(styles.section)}>
                            <h2>Why I called my personal website "Sharek" ?</h2>
                            <p>"Sharek" شارك is arabic for share or contribute.</p>
                        </div>

                        <div className={clsx(styles.section)}>
                            <h2>Who I'am ?</h2>
                            <p>Hi 👋🏼, my name is <strong>Hamza EL KAROUI</strong>, proud Tunisian 🇹🇳, data engineer and a full time consultant <a href="https://datafab.io" target="_blank">@DataFab.io</a>.</p>
                            <Link to={useBaseUrl('about/')} target="_blank">More about me ...</Link>

                        </div>

                        <div className={clsx(styles.section)}>
                            <h2>How to reach me ?</h2>
                            <p>Tweet me up, I'm 🐦 <a href="https://twitter.com/Stringly_Typed" target="_blank">@Stringly_Typed</a></p>
                            <p>Contact me by mail 📬 <a href="mailto:helkarou@gmail.com" target="_blank">helkarou@gmail.com</a></p>
                            <p>LinkedIn 📋 <a href="https://linkedin.com/in/hamza-el-karoui" target="_blank">hamza-el-karoui</a> </p>
                        </div>

                    </div>
                </section>

                {/*      {features && features.length > 0 && (
          <section className={styles.features}>
              <div className="container">
                  <div className="row">
                      {features.map((props, idx) => (
                          <Feature key={idx} {...props} />
                      ))}
                  </div>
              </div>
          </section>
      )}*/}
            </main>
        </Layout>
    );
}
