import { AnimCompetences } from "../components/animCompetences";
import { ParallaxProvider } from "react-scroll-parallax";
import { Navbar } from "../components/navbar";
import "bootstrap/dist/css/bootstrap.css";

export default () => (
  <main>
    <Navbar />
    <h1>Mes compétences</h1>
    <ParallaxProvider>
      <AnimCompetences />
    </ParallaxProvider>
  </main>
);
