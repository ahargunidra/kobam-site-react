function About() {
  return (
    <div className="mb-4">
      <h1 className="text-center" data-aos="zoom-in" id="about-us">
        About Us
      </h1>
      <div className="row mt-5">
        <div className="col">
          <img
            src="/img/about.svg"
            alt="about"
            className="d-block mx-auto"
            data-aos="zoom-in"
          />
        </div>
        <div className="col">
          <p data-aos="zoom-in">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            corporis minus ab voluptates distinctio ut, aperiam modi aliquam!
            Doloremque quibusdam impedit sunt illum ipsa ullam tempora explicabo
            rerum. Similique, commodi.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
