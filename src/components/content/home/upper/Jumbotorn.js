/* eslint-disable jsx-a11y/anchor-is-valid */
import { useLocation } from "react-router-dom";
import "./jumbotron.css";

function Jumbotorn() {
  const location = useLocation();

  return (
    <div className="bg-light p-5 rounded-lg ">
      {/* kalau routnya home */}
      {location.pathname === "/" && (
        <div className="row">
          <div className="col-lg-6 col-md-8 py-lg-5 mx-auto text-xl-left text-tengah">
            <h1 className="display-4 float-md-left" data-aos="fade-right">
              Kobam Site
            </h1>
            <p className="lead float-md-left" data-aos="fade-right">
              Bersama komunitas <strong>belajar program</strong> dan
              <strong>berbagi tutorial</strong> tentang tips pemrograman
            </p>
            <div className="mt-4">
              <a
                className="btn btn-danger btn-lg"
                href="#"
                role="button"
                data-aos="fade-right"
              >
                Mulai Belajar
              </a>
              <a
                className="btn btn-outline-danger btn-lg ms-2"
                href="#"
                data-aos="fade-right"
              >
                Tutorial
              </a>
            </div>
          </div>
          <div className="col-lg-6 d-none d-lg-block mt-5">
            <img
              className="position-absolute"
              src="/img/about-us.svg"
              alt="about-us"
              data-aos="zoom-in"
            />
          </div>
        </div>
      )}

      {/* kalau routnya tutorial */}
      {location.pathname === "/tutorial" && (
        <div className="text-center">
          <h1>Pelajarai Bahasa Yang Kamu Sukai!</h1>
        </div>
      )}
    </div>
  );
}

export default Jumbotorn;
