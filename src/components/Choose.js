import React from 'react';

const Choose = () => {
  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-6 px-0">
            <div
              className="px-5 bg-dark bg-gradient d-flex align-items-center justify-content-between"
              style={{ height: '350px' }}
            >
              <img
                className="img-fluid flex-shrink-0 first-img w-50 me-4"
                src="image/banner-left.png"
                alt=""
              />
              <div className="text-end">
                <h3 className="text-uppercase text-light mb-3">
                  Want to be driver?
                </h3>
                <p className="mb-4 offer">
                  Lorem justo sit sit ipsum eos lorem kasd, kasd labore
                </p>
                <a href="/" className="price-button py-2 px-4">
                  Start Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 px-0">
            <div
              className="px-5 bg-dark d-flex align-items-center justify-content-between"
              style={{ height: '350px' }}
            >
              <div className="text-right">
                <h3 className="text-uppercase text-light mb-3">
                  LOOKING FOR A CAR?
                </h3>
                <p className="mb-4">
                  Lorem justo sit sit ipsum eos lorem kasd, kasd labore now
                </p>
                <a href="/" className="price-button py-2 px-4">
                  Start Now
                </a>
              </div>
              <img
                className="img-fluid flex-shrink-0 second-img w-50 mr-4"
                src="image/banner-right.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
