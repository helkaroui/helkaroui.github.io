import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import {CommentWidget} from '../components/comment-widget';

export default function Home() {
    const context = useDocusaurusContext();
    const { siteConfig = {} } = context;
    return (
        <Layout
            title={`My Geek Cookbook`}
            description="Hamza EL KAROUI is a data engineer specializing in Apache Spark, Delta Lake, Apache Kafka (with brief forays into a wider data engineering space.">
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
                            to={useBaseUrl('data_processing/spark/')}>
                            Explore Spark Internals 📝
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
                            <p>Hi 👋🏼, my name is <strong>Hamza EL KAROUI</strong>, proud Tunisian 🇹🇳, senior data engineer and freelancer.</p>
                            <Link to={useBaseUrl('about/')} target="_blank">Know more about me ...</Link>

                        </div>

                        <div className={clsx(styles.section)}>
                            <h2>How to get in touch ?</h2>
                            <p>Tweet me up, I'm 🐦 <a href="https://twitter.com/Stringly_Typed" target="_blank">@Stringly_Typed</a></p>
                            <p>Contact me by mail 📬 <a href="mailto:helkarou@gmail.com" target="_blank">helkarou@gmail.com</a></p>
                            <p>I'm also present on LinkedIn 📋 <a href="https://linkedin.com/in/hamza-el-karoui" target="_blank">hamza-el-karoui</a> </p>
                        </div>

                    </div>
                </section>
                <section className={styles.sectionDescription}>
                    <div className="container">
                        <CommentWidget/>
                    </div>
                </section>
            </main>
        </Layout>
    );
}
