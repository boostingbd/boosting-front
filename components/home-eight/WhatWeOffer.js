import React, { Component } from "react";
import Link from "next/link";
import * as Icon from "react-feather";
import ReactWOW from "react-wow";

class WhatWeOffer extends Component {
  render() {
    return (
      <section className="solutions-area ptb-80">
        <div className="container">
          <div className="section-title st-fs-28">
            <span className="sub-title">What We Offer</span>
            <h2>Our Featured Solutions</h2>
            <div className="bar"></div>
            <p>
            We provide specially Digital marketing , Website development and Design Services For SME business owners
            </p>
          </div>

          <div className="row">
            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="solutions-box">
                <div className="icon">
                  <i className="bx bx-landscape"></i>
                  <img
                    src={require("../../static/images/agency-image/agency-icon-bg.png")}
                    alt="image"
                  />
                </div>

                <h3>
                  <Link href="#">
                    <a>Programmatic Advertising</a>
                  </Link>
                </h3>
                <p>
                  We want To Try make analytical Ad For our Customers . We have
                  Experience ad Experts
                </p>

                <Link href="#">
                  <a className="learn-more-btn">
                    <Icon.PlusCircle /> Learn More
                  </a>
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="solutions-box">
                <div className="icon">
                  <i className="bx bx-bar-chart-alt"></i>
                  <img
                    src={require("../../static/images/agency-image/agency-icon-bg.png")}
                    alt="image"
                  />
                </div>

                <h3>
                  <Link href="#">
                    <a>Strategy & Research</a>
                  </Link>
                </h3>
                <p>
                Before making ads we are Research On Products and service Demand Then set ads. We Follow International Rules and Strategy.
                </p>

                <Link href="#">
                  <a className="learn-more-btn">
                    <Icon.PlusCircle /> Learn More
                  </a>
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="solutions-box">
                <div className="icon">
                  <i className="bx bx-devices"></i>
                  <img
                    src={require("../../static/images/agency-image/agency-icon-bg.png")}
                    alt="image"
                  />
                </div>

                <h3>
                  <Link href="#">
                    <a>Design & Development</a>
                  </Link>
                </h3>
                <p>
                We provide Design and development Services For our Clients. We make eye catching and Mobile Responsive Websites . 
                </p>

                <Link href="#">
                  <a className="learn-more-btn">
                    <Icon.PlusCircle /> Learn More
                  </a>
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="solutions-box">
                <div className="icon">
                  <i className="bx bx-chalkboard"></i>
                  <img
                    src={require("../../static/images/agency-image/agency-icon-bg.png")}
                    alt="image"
                  />
                </div>

                <h3>
                  <Link href="#">
                    <a>Branding & Marketing</a>
                  </Link>
                </h3>
                <p>
                We provide Branding and Marketing services For SME business Owners. We are always focused on providing the best service From our End . 

                </p>

                <Link href="#">
                  <a className="learn-more-btn">
                    <Icon.PlusCircle /> Learn More
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <ReactWOW delay="0.5s" animation="fadeInLeft">
          <div className="shape9 slow mobile-dnone">
            <img
              src={require("../../static/images/agency-image/agency-shape1.png")}
              alt="image"
            />
          </div>
        </ReactWOW>
      </section>
    );
  }
}

export default WhatWeOffer;
