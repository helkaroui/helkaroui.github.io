import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Translate from '@docusaurus/Translate';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';
import { CommentWidget } from '../components/comment-widget';
import useBaseUrl, { useBaseUrlUtils } from '@docusaurus/useBaseUrl';

import Features, { FeatureItem } from '@site/src/data/features';

import Tweet from '@site/src/components/Tweet';
import Tweets, { type TweetItem } from '@site/src/data/tweets';

import ReactTyped from "react-typed";

export default function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`My Geek Cookbook`}
      description="Hamza EL KAROUI is a data engineer specializing in Apache Spark, Delta Lake, Apache Kafka (with brief forays into a wider data engineering space.">
      <Header siteConfig={siteConfig} />
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

          </div>
        </section>

        {/* <TweetsSection /> */}

        <GetInTouch />

        <section className={styles.sectionDescription}>
          <div className="container">
            <CommentWidget />
          </div>
        </section>
      </main>
    </Layout>
  );
}

function Header(){
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (<header className={clsx('hero hero--primary ') + styles.heroBanner}>
  <div className="container">
    <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
    <p className={styles.heroSubtitle}>
      <ReactTyped strings={[">_ "+siteConfig.tagline]} typeSpeed={100} loop />
    </p>
  </div>
</header>);
}

function GetInTouch() {

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={clsx(styles.section)}>
          <h2>How to get in touch ?</h2>
          <p>Tweet me up, I'm 🐦 <a href="https://twitter.com/Stringly_Typed" target="_blank">@Stringly_Typed</a></p>
          <p>Contact me by mail 📬 <a href="mailto:helkarou@gmail.com" target="_blank">helkarou@gmail.com</a></p>
          <p>I'm also present on LinkedIn 📋 <a href="https://linkedin.com/in/hamza-el-karoui" target="_blank">hamza-el-karoui</a> </p>
        </div>
      </div>
    </section>
  );
}

function TweetsSection() {
  const tweetColumns: TweetItem[][] = [[], [], []];
  Tweets.filter((tweet) => tweet.showOnHomepage).forEach((tweet, i) =>
    tweetColumns[i % 3]!.push(tweet),
  );

  return (
    <div className={clsx(styles.section, styles.sectionAlt)}>
      <div className="container">
        <Heading as="h2" className={clsx('margin-bottom--lg', 'text--center')}>
          <Translate>Loved by many engineers</Translate>
        </Heading>
        <div className={clsx('row', styles.tweetsSection)}>
          {tweetColumns.map((tweetItems, i) => (
            <div className="col col--4" key={i}>
              {tweetItems.map((tweet) => (
                <Tweet {...tweet} key={tweet.url} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FeaturesContainer() {
  const firstRow = Features.slice(0, 3);
  const secondRow = Features.slice(3);

  return (
    <div className="container text--center">
      <Heading as="h2">
        <Translate>Main features</Translate>
      </Heading>
      <div className="row margin-bottom--lg">
        {firstRow.map((feature, idx) => (
          <Feature feature={feature} key={idx} />
        ))}
      </div>
      <div className="row">
        {secondRow.map((feature, idx) => (
          <Feature
            feature={feature}
            key={idx}
            className={clsx('col--4', idx === 0 && 'col--offset-2')}
          />
        ))}
      </div>
    </div>
  );
}

function Feature({
  feature,
  className,
}: {
  feature: FeatureItem;
  className?: string;
}) {
  const { withBaseUrl } = useBaseUrlUtils();

  return (
    <div className={clsx('col', className)}>
      <img
        className={styles.featureImage}
        alt={feature.title}
        width={Math.floor(feature.image.width)}
        height={Math.floor(feature.image.height)}
        src={withBaseUrl(feature.image.src)}
        loading="lazy"
      />
      <Heading as="h3" className={clsx(styles.featureHeading)}>
        {feature.title}
      </Heading>
      <p className="padding-horiz--md">{feature.text}</p>
    </div>
  );
}
