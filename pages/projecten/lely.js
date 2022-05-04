import { Footer } from '../../components/footer';
import { Navigatie } from '../../components/navigatie';
import styles from '../../styles/containers.module.css';

export default () => {
  return (
    <>
      <Navigatie />

      <main className={styles.container}>
        <h1>Lely</h1>
        <h2>Maar dan niet de plant</h2>
        <p>
          Lely biedt oplossingen voor nagenoeg alle werkzaamheden in de
          koeienstal, en ik heb hun daarbij geholpen.
        </p>
        <br />
        <h3>Maar wat heb ik dan gedaan?</h3>
        <p>
          Ik heb gekeken naar de informatievooriening en deze een boost gegeven.
        </p>
        <br />
        <br />
        <h4>"We zijn zo blij met Daan!"</h4>
        <Footer />
      </main>
    </>
  );
};
