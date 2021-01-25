import { useEffect } from "react";
import About from "./about/About";
import Artikel from "./artikel/Artikel";
import "./body.css";
import Jumbotorn from "./upper/Jumbotorn";
import AOS from "aos";
import "aos/dist/aos.css";

function Body() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <Jumbotorn />
      <main className="flex-shrink-0 mt-3">
        <div className="container">
          <Artikel />
          <About />
        </div>
      </main>
    </>
  );
}

export default Body;
