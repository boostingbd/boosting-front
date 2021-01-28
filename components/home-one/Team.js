import React from 'react'
import OwlCarousel from 'react-owl-carousel3';
import * as Icon from 'react-feather';
import Link from 'next/link'

const options = {
    items: 5,
    loop: true,
    nav: false,
    dots: true,
    autoplay: false,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1200: {
            items: 4
        },
        1500: {
            items: 5
        }
    }
}

class Team extends React.Component {
    render() {
        return (
            <section className="team-area ptb-80 bg-f9f6f6">
                <div className="container">
                    <div className="section-title">
                        <h2>Our Awesome Team</h2>
                        <div className="bar"></div>
                        <p>We have talented Team members For completed Successful projects. </p>
                        <p>More than 100  company using our services </p>
                    </div>
                </div>

                <div className="row m-0">
                    <OwlCarousel 
                        className="owl-theme"
                        {...options}
                    >
                        <div className="item">
                            <div className="item col-lg-12">
                                <div className="single-team">
                                    <div className="team-image">
                                        <img src={require("../../static/images/general/our Team/team1.jpg")} alt="image" />
                                    </div>

                                    <div className="team-content">
                                        <div className="team-info">
                                            <h3>Khaled Hasan</h3>
                                            <span>CEO & Founder</span>
                                        </div>

                                        <ul>
                                            <li>
                                                <Link href="#">
                                                    <a><Icon.Facebook /></a>
                                                </Link>
                                                
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a><Icon.Twitter /></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a><Icon.Linkedin /></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a><Icon.Gitlab /></a>
                                                </Link>
                                            </li>
                                        </ul>

                                        <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="item col-lg-12">
                                <div className="single-team">
                                    <div className="team-image">
                                        <img src={require("../../static/images/general/our Team/team2.jpg")} alt="image" />
                                    </div>

                                    <div className="team-content">
                                        <div className="team-info">
                                            <h3>Hridoy Khan</h3>
                                            <span>Director</span>
                                        </div>

                                        <ul>
                                            <li>
                                                <Link href="#">
                                                    <a><Icon.Facebook /></a>
                                                </Link>
                                                
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a><Icon.Twitter /></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a><Icon.Linkedin /></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a><Icon.Gitlab /></a>
                                                </Link>
                                            </li>
                                        </ul>

                                        <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="item col-lg-12">
                                <div className="single-team">
                                    <div className="team-image">
                                        <img src={require("../../static/images/general/our Team/team3.jpg")} alt="image" />
                                    </div>

                                    <div className="team-content">
                                        <div className="team-info">
                                            <h3>Mahbubur Rahman</h3>
                                            <span>PHP developer</span>
                                        </div>

                                        <ul>
                                            <li>
                                                <Link href="#">
                                                    <a><Icon.Facebook /></a>
                                                </Link>
                                                
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a><Icon.Twitter /></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a><Icon.Linkedin /></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a><Icon.Gitlab /></a>
                                                </Link>
                                            </li>
                                        </ul>

                                        <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="item col-lg-12">
                                <div className="single-team">
                                    <div className="team-image">
                                        <img src={require("../../static/images/general/our Team/team4.jpg")} alt="image" />
                                    </div>

                                    <div className="team-content">
                                        <div className="team-info">
                                            <h3>Shimul</h3>
                                            <span>javascript Developer</span>
                                        </div>

                                        <ul>
                                            <li>
                                                <Link href="#">
                                                    <a><Icon.Facebook /></a>
                                                </Link>
                                                
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a><Icon.Twitter /></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a><Icon.Linkedin /></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a><Icon.Gitlab /></a>
                                                </Link>
                                            </li>
                                        </ul>

                                        <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="item col-lg-12">
                                <div className="single-team">
                                    <div className="team-image">
                                        <img src={require("../../static/images/general/our Team/team5.jpg")} alt="image" />
                                    </div>

                                    <div className="team-content">
                                        <div className="team-info">
                                            <h3>Shuvo</h3>
                                            <span>Graphics Designer</span>
                                        </div>

                                        <ul>
                                            <li>
                                                <Link href="#">
                                                    <a><Icon.Facebook /></a>
                                                </Link>
                                                
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a><Icon.Twitter /></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a><Icon.Linkedin /></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a><Icon.Gitlab /></a>
                                                </Link>
                                            </li>
                                        </ul>

                                        <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="item col-lg-12">
                                <div className="single-team">
                                    <div className="team-image">
                                        <img src={require("../../static/images/general/our Team/team6.jpg")} alt="image" />
                                    </div>

                                    <div className="team-content">
                                        <div className="team-info">
                                            <h3>Sharif</h3>
                                            <span>Digital marketer</span>
                                        </div>

                                        <ul>
                                            <li>
                                                <Link href="#">
                                                    <a><Icon.Facebook /></a>
                                                </Link>
                                                
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a><Icon.Twitter /></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a><Icon.Linkedin /></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a><Icon.Gitlab /></a>
                                                </Link>
                                            </li>
                                        </ul>

                                        <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="item col-lg-12">
                                <div className="single-team">
                                    <div className="team-image">
                                        <img src={require("../../static/images/general/our Team/team7.jpg")} alt="image" />
                                    </div>

                                    <div className="team-content">
                                        <div className="team-info">
                                            <h3>Alex Maxwel</h3>
                                            <span>Marketing Manager</span>
                                        </div>

                                        <ul>
                                            <li>
                                                <Link href="#">
                                                    <a><Icon.Facebook /></a>
                                                </Link>
                                                
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a><Icon.Twitter /></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a><Icon.Linkedin /></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a><Icon.Gitlab /></a>
                                                </Link>
                                            </li>
                                        </ul>

                                        <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="item col-lg-12">
                                <div className="single-team">
                                    <div className="team-image">
                                        <img src={require("../../static/images/general/our Team/team8.jpg")} alt="image" />
                                    </div>

                                    <div className="team-content">
                                        <div className="team-info">
                                            <h3>Janny Cotller</h3>
                                            <span>Web Developer</span>
                                        </div>

                                        <ul>
                                            <li>
                                                <Link href="#">
                                                    <a><Icon.Facebook /></a>
                                                </Link>
                                                
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a><Icon.Twitter /></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a><Icon.Linkedin /></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a><Icon.Gitlab /></a>
                                                </Link>
                                            </li>
                                        </ul>

                                        <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="item col-lg-12">
                                <div className="single-team">
                                    <div className="team-image">
                                        <img src={require("../../static/images/general/our Team/team9.jpg")} alt="image" />
                                    </div>

                                    <div className="team-content">
                                        <div className="team-info">
                                            <h3>Jason Statham</h3>
                                            <span>UX/UI Designer</span>
                                        </div>

                                        <ul>
                                            <li>
                                                <Link href="#">
                                                    <a><Icon.Facebook /></a>
                                                </Link>
                                                
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a><Icon.Twitter /></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a><Icon.Linkedin /></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a><Icon.Gitlab /></a>
                                                </Link>
                                            </li>
                                        </ul>

                                        <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="item col-lg-12">
                                <div className="single-team">
                                    <div className="team-image">
                                        <img src={require("../../static/images/general/our Team/team10.jpg")} alt="image" />
                                    </div>

                                    <div className="team-content">
                                        <div className="team-info">
                                            <h3>Corey Anderson</h3>
                                            <span>Project Manager</span>
                                        </div>

                                        <ul>
                                            <li>
                                                <Link href="#">
                                                    <a><Icon.Facebook /></a>
                                                </Link>
                                                
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a><Icon.Twitter /></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a><Icon.Linkedin /></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a><Icon.Gitlab /></a>
                                                </Link>
                                            </li>
                                        </ul>

                                        <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </section>
        )
    }
}

export default Team