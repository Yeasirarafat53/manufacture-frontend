import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <div
        class="container-fluid footer-bg py-5 px-sm-3 px-md-5"
        style={{ marginTop: '90px' }}
      >
        <div class="row pt-5">
          <div class="col-lg-3 col-md-6 mb-5 text-body">
            <h4 class="text-uppercase text-light mb-4">Get In Touch</h4>
            <p class="mb-2">
              <i class="fa fa-map-marker-alt text-white me-3"></i>Location,
              City, Country
            </p>
            <p class="mb-2">
              <i class="fa fa-phone-alt text-white me-3"></i>+012 345 67890
            </p>
            <p>
              <i class="fa fa-envelope text-white me-3"></i>info@example.com
            </p>
            <h6 class="text-uppercase text-white py-2">Follow Us</h6>
            <div class="d-flex justify-content-start">
              <Link
                class="btn btn-lg btn-dark btn-lg-square me-2"
                to="https://freewebsitecode.com/"
              >
                <i class="fab fa-twitter"></i>
              </Link>
              <Link
                class="btn btn-lg btn-dark btn-lg-square me-2"
                to="https://facebook.com/freewebsitecode/"
              >
                <i class="fab fa-facebook-f"></i>
              </Link>
              <Link
                class="btn btn-lg btn-dark btn-lg-square me-2"
                to="https://freewebsitecode.com/"
              >
                <i class="fab fa-linkedin-in"></i>
              </Link>
              <Link
                class="btn btn-lg btn-dark btn-lg-square"
                to="https://youtube.com/freewebsitecode"
              >
                <i class="fab fa-youtube"></i>
              </Link>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 mb-5">
            <h4 class="text-uppercase text-light mb-4">Usefull Links</h4>
            <div class="d-flex flex-column justify-content-start">
              <Link class="text-body mb-2" to="/#">
                <i class="fa fa-angle-right text-white me-2"></i>Private Policy
              </Link>
              <Link class="text-body mb-2" to="/#">
                <i class="fa fa-angle-right text-white me-2"></i>Term &amp;
                Conditions
              </Link>
              <Link class="text-body mb-2" to="/#">
                <i class="fa fa-angle-right text-white me-2"></i>New Member
                Registration
              </Link>
              <Link class="text-body mb-2" to="/#">
                <i class="fa fa-angle-right text-white me-2"></i>Affiliate
                Programme
              </Link>
              <Link class="text-body mb-2" to="/#">
                <i class="fa fa-angle-right text-white me-2"></i>Return &amp;
                Refund
              </Link>
              <Link class="text-body" to="/#">
                <i class="fa fa-angle-right text-white me-2"></i>Help &amp; FQAs
              </Link>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 mb-5">
            <h4 class="text-uppercase text-light mb-4">Car Gallery</h4>
            <div class="row mx-n1">
              <div class="col-4 px-1 mb-2">
                <Link to="/">
                  <img class="w-100" src="image/gallery-1.jpg" alt="" />{' '}
                </Link>
              </div>
              <div class="col-4 px-1 mb-2">
                <Link to="/">
                  <img class="w-100" src="image/gallery-2.jpg" alt="" />
                </Link>
              </div>
              <div class="col-4 px-1 mb-2">
                <Link to="/">
                  <img class="w-100" src="image/gallery-3.jpg" alt="" />
                </Link>
              </div>
              <div class="col-4 px-1 mb-2">
                <Link to="/">
                  <img class="w-100" src="image/gallery-4.jpg" alt="" />
                </Link>
              </div>
              <div class="col-4 px-1 mb-2">
                <Link to="/">
                  <img class="w-100" src="image/gallery-5.jpg" alt="" />
                </Link>
              </div>
              <div class="col-4 px-1 mb-2">
                <Link to="/">
                  <img class="w-100" src="image/gallery-6.jpg" alt="" />
                </Link>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 mb-5 text-body">
            <h4 class="text-uppercase text-light mb-4">Newsletter</h4>
            <p class="mb-4">
              Volup amet magna clita tempor. Tempor sea eos vero ipsum. Lorem
              lorem sit sed elitr sed kasd et
            </p>
            <div class="w-100 mb-3">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control bg-dark border-dark"
                  style={{ padding: '15px' }}
                  placeholder="Your Email"
                />
                <div class="input-group-append">
                  <button class="btn btn-warning text-uppercase p-3 btn-lg-square">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
            <i>Lorem sit sed elitr sed kasd et</i>
          </div>
        </div>
      </div>

      {/* copywrite */}
      <div class="container-fluid bg-dark py-4 px-sm-3 px-md-5">
        <p class="mb-2 text-center text-body">
          © Yeasir Arafat. All
          Rights Reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
