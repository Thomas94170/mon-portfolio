import { Navbar } from "../components/navbar";
import "bootstrap/dist/css/bootstrap.css";
import { Home } from "../components/home";
import { Footer } from "../components/footer";

export default () => (
  <>
    <div>
      <Navbar />

      <Home />

      <Footer />
    </div>
  </>
);
