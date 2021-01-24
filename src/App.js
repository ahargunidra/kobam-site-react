import React from "react";
import Navbar from "./components/navbar/Navbar";
import Body from "./components/content/Body";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <Body></Body>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default App;
