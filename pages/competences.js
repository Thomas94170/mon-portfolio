import { AnimCompetences } from "../components/animCompetences";
import { ParallaxProvider } from "react-scroll-parallax";

export default () => (
  <main>
    <h1>Mes compétences</h1>
    <ParallaxProvider>
      <AnimCompetences />
    </ParallaxProvider>
  </main>
);
