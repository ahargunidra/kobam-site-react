function Artikel() {
  const a = 3;
  const b = 3;

  return (
    <>
      <h1 className="mb-3" data-aos="zoom-in">
        Artikel
      </h1>
      {[...Array(a)].map((value, index) => (
        <div className="row" key={index}>
          {[...Array(b)].map((value, index) => (
            <div
              className="col-md-6 col-lg-4 mb-4 d-flex"
              data-aos="fade-up"
              key={index}
            >
              <div className="card card-shadow rounded">
                <div className="card-body p-3">
                  <img
                    src="https://laravel.com/img/logomark.min.svg"
                    alt="laravel"
                    className="card-img-top rounded mb-3"
                  />
                  <h6 className="card-title">Lorem ipsum dolor sit amet.</h6>
                  <div className="text-secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestias vitae beatae laborum excepturi aperiam minus!
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </>
  );
}

export default Artikel;
