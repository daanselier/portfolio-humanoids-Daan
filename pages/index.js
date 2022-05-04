import styles from '../styles/containers.module.css';

import TeamPlaatje from '../public/plaatjes/team.svg';
import AccessibilityPlaatje from '../public/plaatjes/accessibility.svg';
import DevelopmentPlaatje from '../public/plaatjes/development.svg';
import Lely from '../public/plaatjes/lely.svg';
import { Navigatie } from '../components/navigatie';
import { Footer } from '../components/footer';
import { Projectkaart } from '../components/projectkaart';
import { Verhaalkaart } from '../components/verhaalkaart';

export default () => {
  return (
    <>
      <Navigatie />
      <main className={styles.container}>
        <h1>Hi, ik ben Daan. Designer by day | DJ by night</h1>
        <section className={styles.cardContainer}>
          <Projectkaart
            titel="Lely Nederland"
            beschrijving="Development"
            Plaatje={Lely}
            paginaUrl="/projecten/lely"
          />
          <Projectkaart
            titel="Lely Nederland"
            beschrijving="Development"
            Plaatje={Lely}
            paginaUrl="/projecten/lely"
          />
          <Verhaalkaart>
            <h2>DJ by night</h2>
            <img src="https://i.postimg.cc/859zmGgg/romina-veliz-DGKJz-Omjy-S4-unsplash.jpg" />
            <figcaption>Ik draai ook Tech House</figcaption>
          </Verhaalkaart>
        </section>
        <Footer />
      </main>
    </>
  );
};
