// import { Parallax, ParallaxLayer } from "@react-spring/parallax";
// import { useParallaxController } from "react-scroll-parallax";
import { useParallax } from "react-scroll-parallax";
import styles from "../styles/animComp.module.css";

export const AnimCompetences = () => {
  const { ref } = useParallax({
    rotateY: [0, 360],
  });
  return (
    <>
      <h1>Mes compétences</h1>
      <br></br>

      <div>
        <p>SOme content here</p>
        <p>SOme content here</p>
        <p>SOme content here</p>
        <p>SOme content here</p>
        <p>SOme content here</p>
        <p>SOme content here</p>
        <p>SOme content here</p>
        <p>SOme content here</p>
        <p>SOme content here</p>
        <p>SOme content here</p>
        <p>SOme content here</p>
        <p>SOme content here</p>
        <p>SOme content here</p>
        <p>SOme content here</p>
        <p>SOme content here</p>
        <p>SOme content here</p>
        <p>SOme content here</p>
        <p>SOme content here</p>
        <p>SOme content here</p>
        <p>SOme content here</p>
        <p>SOme content here</p>
        <p>SOme content here</p>
        <div ref={ref} className={styles.spinner}>
          <div className={styles.spinnerItem}>
            <img src="../img/structure.png" />
          </div>
          <div className={styles.spinnerItem}>👏🏻</div>
          <div className={styles.spinnerItem}>🙌🏻</div>
          <div className={styles.spinnerItem}>👎🏻</div>
        </div>
        <p>SOme content here</p>
        <p>SOme content here</p>
        <p>SOme content here</p>
        <p>SOme content here</p>
        <p>SOme content here</p>
        <p>SOme content here</p>
        <p>SOme content here</p>
        <p>SOme content here</p>
        <p>SOme content here</p>
        <p>SOme content here</p>
        <p>SOme content here</p>
        <p>SOme content here</p>
        <p>SOme content here</p>
        <p>SOme content here</p>
        <p>SOme content here</p>
        <p>SOme content here</p>
        <p>SOme content here</p>
        <p>SOme content here</p>
        <p>SOme content here</p>
        <p>SOme content here</p>
        <p>SOme content here</p>
        <p>SOme content here</p>
        <p>SOme content here</p>
        <p>SOme content here</p>
        <p>SOme content here</p>
        <p>SOme content here</p>
        <p>SOme content here</p>
        <p>SOme content here</p>
        <p>SOme content here</p>
        <p>SOme content here</p>
        <p>SOme content here</p>
        <p>SOme content here</p>
        <p>SOme content here</p>
        <p>SOme content here</p>
        <p>SOme content here</p>
      </div>
    </>
  );
};
