import React from 'react';
import Lottie from 'lottie-react';
import Car from "../car.json";
// import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="full-bg mt-5">
      <div className="container_width">
        <div className="row">
          <div className="col-md-5">
            <div class="ser_img">
              {/* <img src="/image/imf.png" alt="#" /> */}
              <Lottie animationData={Car} loop={true} />
            </div>
          </div>

          <div className="col-md-7">
            <div className="slider_main">
              <div className="container">
                <div className="relative">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="creative">
                        <div className="auto_text">
                          <h1>
                            AUTO <br />
                            SERVICES & <br />
                            SHOWROOM
                          </h1>
                          <p>
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout. The point of using Lorem
                            Ipsum{' '}
                          </p>
                          <a class="read_more " href="/">
                            Contact US
                          </a>
                          <a class="read_more" href="/">
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
