/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Footer from "../../footer/Footer";
import Jumbotorn from "../home/upper/Jumbotorn";
import "./tutorial.css";

function Tutorial() {
  const program = [
    {
      src: "https://www.petanikode.com/images/icons/php/php-plain.svg",
      nama: "PHP",
    },
    {
      src: "https://www.petanikode.com/images/icons/java/java-original.svg",
      nama: "Java",
    },
    {
      src: "https://www.petanikode.com/images/icons/python/python-original.svg",
      nama: "Python",
    },
    {
      src: "https://www.petanikode.com/images/icons/android/android-plain.svg",
      nama: "Android",
    },
    {
      src:
        "https://www.petanikode.com/images/icons/javascript/javascript-original.svg",
      nama: "Javascript",
    },
    {
      src: "https://www.petanikode.com/images/icons/html5/html5-plain.svg",
      nama: "HTML",
    },
    {
      src:
        "https://www.petanikode.com/images/icons/cplusplus/cplusplus-plain.svg",
      nama: "C++",
    },
    {
      src: "https://www.petanikode.com/images/icons/nodejs/nodejs-plain.svg",
      nama: "Nodejs",
    },
  ];

  // console.log(program);
  return (
    <React.Fragment>
      <Jumbotorn />
      <div className="container mt-5">
        <div className="row row-cols-md-4 row-cols-sm-3 row-cols-2 d-flex justify-content-between">
          {program.map((val, ind) => (
            <div className="col text-center p-4" key={ind}>
              <a href="#">
                <img src={val.src} alt="php" width="50%" />
              </a>
              <h5>
                <a href="#" className="text-dark d-block mb-3"></a>
                <a href="#" className="text-dark ling">
                  {val.nama}
                </a>
              </h5>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Tutorial;
