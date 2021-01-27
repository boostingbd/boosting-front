import Link from 'next/link';
import React, { Component } from 'react';

class AboutArea extends Component {
    render() {
        return (
            <section className="agency-about-area">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="agency-about-img">
                                <img src={require("../../static/images/home_about.jpg")} alt="image" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="agency-about-content">
                                <span className="sub-title">About Us</span>
                                <h2>Engaging New Audiences Through Smart Approach</h2>
                                <div className="bar"></div>
                                <p>We have provided Design development and Digital Marketing services for the last 3 years. our main Focus on provide the best services From our End.</p>

                                <p>In the last 3 years we provide services to more than 100 Clients. in our Experience we are always Trying to provide the best services from our end. We provide website design development and Digital marketing services For SME business owners. We are Always focused on Best level Services.
                                </p>

                                <Link href="#">
                                    <a className="btn btn-secondary">Discover More</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Shape Images */}
                <div className="shape2 rotateme">
                    <img src={require("../../static/images/shape2.svg")} alt="shape" />
                </div>
                <div className="shape3">
                    <img src={require("../../static/images/shape3.svg")} alt="shape" />
                </div>
                <div className="shape6 rotateme">
                    <img src={require("../../static/images/shape4.svg")} alt="shape" />
                </div>
                <div className="shape7">
                    <img src={require("../../static/images/shape4.svg")} alt="shape" />
                </div>
                <div className="shape8 rotateme">
                    <img src={require("../../static/images/shape2.svg")} alt="shape" />
                </div>
                <div className="shape10">
                    <img src={require("../../static/images/agency-image/agency-shape2.png")} alt="image" />
                </div>
            </section>
        );
    }
}

export default AboutArea;