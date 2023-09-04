import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'About the Community Wiki',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
	<>
	    Makerville is a community for Indian hardware designers, makers and engineers. This wiki is knowledgebase for the community to share learnings, links, lists, and anything that will benefit their fellow maker.
      </>
    ),
  },
  {
    title: 'How does it work?',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
	<>
	    Contributions are made by opening a pull request on GitHub. Just head to any page and click on Edit this page at the bottom to start contributing. <br/>All content is licensed under CC BY-NC-SA 4.0 License.
	</>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--6')}>
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

export default function HomepageFeatures() {
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
