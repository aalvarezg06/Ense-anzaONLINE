import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: '2º Primaria',
    link: '/docs/2pri/ut01-mi-cole-y-yo/teoria',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Contenidos educativos para segundo de primaria siguiendo el currículo LOMLOE (Extremadura).
      </>
    ),
  },
  {
    title: 'Programación',
    link: '/docs/PROG/ut01-fundamentos/teoria',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Fundamentos de programación en Java, estructuras de control, POO y gestión de excepciones.
      </>
    ),
  },
  {
    title: 'Entornos de Desarrollo',
    link: '/docs/ED/ut01-metodologias/teoria',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Metodologías ágiles, control de versiones con Git, UML y pruebas de calidad.
      </>
    ),
  },
  {
    title: 'Sistemas de Aprendizaje Automático',
    link: '/docs/SAA/ut01-fundamentos-ia-ml/teoria',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Introducción a la IA, aprendizaje supervisado y no supervisado, y redes neuronales.
      </>
    ),
  },
  {
    title: 'Programación de Servicios y Procesos',
    link: '/docs/PSP/ut01-programacion-multiproceso/teoria',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Programación multihilo, sockets, servicios en red y programación segura.
      </>
    ),
  },
  {
    title: 'Acceso a Datos',
    link: '/docs/AD/introduccion',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Manejo de ficheros, conectores JDBC, herramientas ORM (Hibernate) y bases de datos NoSQL.
      </>
    ),
  },
];

function Feature({ Svg, title, description, link }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Link to={link}>
          <Svg className={styles.featureSvg} role="img" />
        </Link>
      </div>
      <div className="text--center padding-horiz--md">
        <Link to={link}>
          <Heading as="h3">{title}</Heading>
        </Link>
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
