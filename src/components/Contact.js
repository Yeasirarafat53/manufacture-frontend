import React from 'react';

const Contact = () => {
  return (
    <div className="container-fluid py-5">
      <div className="container pt-5 pb-3">
        <div className="titlepage mb-4">
          <h2>
            <img src="image/heading.png" alt="" />
            Contact
          </h2>
        </div>

        <div className="row">
          <div className="col-lg-7 mb-2">
            <div
              className="contact-form bg-light mb-4"
              style={{ padding: '30px' }}
            >
              <form action="">
                <div className="row mb-3">
                  <div className="col-6 form-group">
                    <input
                      type="text"
                      name=""
                      class="form-control p-3"
                      required
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="col-6 form-group">
                    <input
                      type="email"
                      name=""
                      class="form-control p-3"
                      required
                      placeholder="Your Email"
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    class="form-control p-3"
                    placeholder="Subject"
                    required
                  ></input>
                </div>
                <div className="mb-3">
                  <textarea
                    class="form-control py-3 px-4"
                    rows="5"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>

                <div>
                  <button
                    class="btn btn-success py-3 px-5 btn-lg-square"
                    type="submit"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-5 mb-2">
            <div
              class="bg-dark d-flex flex-column justify-content-center px-5 mb-4"
              style={{ height: '435px' }}
            >
              <div class="d-flex mb-3">
                <i class="fa fa-2x fa-map-marker-alt text-primary flex-shrink-0 me-3"></i>
                <div class="mt-n1">
                  <h5 class="text-light">Head Office</h5>
                  <p>Location, City, Country</p>
                </div>
              </div>
              <div class="d-flex mb-3">
                <i class="fa fa-2x fa-map-marker-alt text-primary flex-shrink-0 me-3"></i>
                <div class="mt-n1">
                  <h5 class="text-light">Branch Office</h5>
                  <p>Location, City, Country</p>
                </div>
              </div>
              <div class="d-flex mb-3">
                <i class="fa fa-2x fa-envelope-open text-primary flex-shrink-0 me-3"></i>
                <div class="mt-n1">
                  <h5 class="text-light">Customer Service</h5>
                  <p>customer@example.com</p>
                </div>
              </div>
              <div class="d-flex">
                <i class="fa fa-2x fa-envelope-open text-primary flex-shrink-0 me-3"></i>
                <div class="mt-n1">
                  <h5 class="text-light">Return &amp; Refund</h5>
                  <p class="m-0">refund@example.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
