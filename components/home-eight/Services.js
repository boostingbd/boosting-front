import React, { Component } from 'react';
import Link from 'next/link';
import * as Icon from 'react-feather';

class Services extends Component {
    render() {
        return (
            <div className="agency-services-area ptb-80">
                <div className="container">
                    <div className="section-title st-fs-28">
                        <span className="sub-title">Our Solutions</span>
                        <h2>Our Services</h2>
                        <div className="bar"></div>
                        <p>We provide Design Development and marketing services .</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="agency-services-box">
                                <img src={require("../../static/images/agency-image/agency-services-img1.jpg")} alt="image" />

                                <div className="content">
                                    <h3>
                                        <Link href="#">
                                            <a>Facebook Marketing</a>
                                        </Link>
                                    </h3>

                                    <Link href="#">
                                        <a className="read-more-btn">
                                            Read More <Icon.PlusCircle />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="agency-services-box">
                                <img src={require("../../static/images/agency-image/agency-services-img2.jpg")} alt="image" />

                                <div className="content">
                                    <h3>
                                        <Link href="#">
                                            <a>Email Marketing </a>
                                        </Link>
                                    </h3>

                                    <Link href="#">
                                        <a className="read-more-btn">
                                            Read More <Icon.PlusCircle />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="agency-services-box">
                            <img src={require("../../static/images/agency-image/agency-services-img3.jpg")} alt="image" />

                                <div className="content">
                                    <h3>
                                        <Link href="#">
                                            <a>SMS Marketing</a>
                                        </Link>
                                    </h3>

                                    <Link href="#">
                                        <a className="read-more-btn">
                                            Read More <Icon.PlusCircle />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="agency-services-box">
                            <img src={require("../../static/images/agency-image/agency-services-img4.jpg")} alt="image" />

                                <div className="content">
                                    <h3>
                                        <Link href="#">
                                            <a>Ecommerce Website </a>
                                        </Link>
                                    </h3>

                                    <Link href="#">
                                        <a className="read-more-btn">
                                            Read More <Icon.PlusCircle />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="agency-services-box">
                            <img src={require("../../static/images/agency-image/agency-services-img5.jpg")} alt="image" />

                                <div className="content">
                                    <h3>
                                        <Link href="#">
                                            <a>Mobile Apps </a>
                                        </Link>
                                    </h3>

                                    <Link href="#">
                                        <a className="read-more-btn">
                                            Read More <Icon.PlusCircle />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="agency-services-box">
                                <img src={require("../../static/images/agency-image/agency-services-img6.jpg")} alt="image" />

                                <div className="content">
                                    <h3>
                                        <Link href="#">
                                            <a>Graphics Design</a>
                                        </Link>
                                    </h3>

                                    <Link href="#">
                                        <a className="read-more-btn">
                                            Read More <Icon.PlusCircle />
                                        </a>
                                    </Link>
                                </div>
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
                <div className="shape4">
                    <img src={require("../../static/images/shape4.svg")} alt="shape" />
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
            </div>
        );
    }
}

export default Services;