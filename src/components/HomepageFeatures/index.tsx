import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Optimized for Learning',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        AlgorithmNEnglishQuests is tailored to provide a seamless learning experience in both algorithms and English. Dive deep with intuitive resources, making your learning journey both enlightening and enjoyable.
      </>
    ),
  },
  {
    title: 'Structured and Intuitive',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Our platform emphasizes a structured approach to mastering algorithms and English. The clear progression lets you prioritize and navigate through topics, ensuring a balanced and effective learning process.
      </>
    ),
  },
  {
    title: 'Community Driven Insights',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        AlgorithmNEnglishQuests is enriched by a thriving community of learners and educators. Their shared experiences and insights continuously shape the platform, guaranteeing up-to-date and relatable content.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
