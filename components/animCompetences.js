// import { Parallax, ParallaxLayer } from "@react-spring/parallax";
// import { useParallaxController } from "react-scroll-parallax";
import React from "react";
import { useParallax } from "react-scroll-parallax";
import styles from "../styles/animComp.module.css";
import "bootstrap/dist/css/bootstrap.css";

export const AnimCompetences = () => {
  const { ref } = useParallax({
    rotateY: [0, 360],
  });
  return (
    <>
      <div>
        <p className="text-center">SOme content here</p>
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
        <p className="text-danger">.text-danger</p>
        <div ref={ref} className={styles.spinner}>
          <div className={styles.spinnerItem}>
            <img
              src="https://img.icons8.com/color/48/undefined/html-5--v1.png"
              height="50px"
            />
          </div>
          <div className={styles.spinnerItem}>
            <img
              src="https://img.icons8.com/color/48/undefined/javascript--v1.png"
              height="50px"
            />
          </div>
          <div className={styles.spinnerItem}>
            <img
              src="https://img.icons8.com/plasticine/100/undefined/react.png"
              height="50px"
            />
          </div>
          <div className={styles.spinnerItem}>
            <img
              src="https://img.icons8.com/ios-glyphs/30/undefined/github-2.png"
              height="50px"
            />
          </div>
          <div className={styles.spinnerItem}>
            <img
              src="https://img.icons8.com/ios/50/undefined/php-logo.png"
              height="50px"
            />
          </div>
          <div className={styles.spinnerItem}>
            <img
              src="https://img.icons8.com/color/48/undefined/css3.png"
              height="50px"
            />
          </div>
          <div className={styles.spinnerItem}>
            <img
              src="https://img.icons8.com/external-soft-fill-juicy-fish/60/undefined/external-sql-servers-and-networks-soft-fill-soft-fill-juicy-fish.png"
              height="50px"
            />
          </div>
        </div>
        <br />

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
