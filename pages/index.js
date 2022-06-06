import { Navbar } from "../components/navbar";
import "bootstrap/dist/css/bootstrap.css";
import { Home } from "../components/home";

export default () => (
  <>
    <div>
      <Navbar />

      <Home />
      <br />
      <h1 className="text-center">Mon site</h1>
    </div>
  </>
);
