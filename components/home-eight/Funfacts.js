import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const Odometer = dynamic(import('react-odometerjs'),{
    ssr: false,
    loading: () => 0
});

class Funfacts extends React.Component {

    state = {
        download: 0,
        feedback: 0,
        worker: 0,
        contributor: 0
    };

    componentDidMount(){
        this.setState({ 
            download: 3,
            feedback: 100,
            worker: 20,
            contributor: 1000
        });
    }

    render(){
        const { download, feedback, worker, contributor } = this.state;
        return (
            <section className="funfacts-area ptb-80">
                <div className="container">
                    <div className="section-title st-fs-28">
                        <h2>We Completed 1000+ Projects Successfully & Counting</h2>
                        <div className="bar"></div>
                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
                    </div>
    
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-6">
                            <div className="funfact">
                                <h3>
                                    <Odometer format="d" duration={500} value={download} />
                                </h3>
                                <p>Years Experience</p>
                            </div>
                        </div>
    
                        <div className="col-lg-3 col-md-3 col-6">
                            <div className="funfact">
                                <h3>
                                    <Odometer format="d" duration="500" value={feedback} />+
                                </h3>
                                <p>Clients</p>
                            </div>
                        </div>
    
                        <div className="col-lg-3 col-md-3 col-6">
                            <div className="funfact">
                                <h3>
                                    <Odometer format="d" duration="500" value={worker} />+
                                </h3>
                                <p>Workers</p>
                            </div>
                        </div>
    
                        <div className="col-lg-3 col-md-3 col-6">
                            <div className="funfact">
                                <h3>
                                    <Odometer format="d" duration="500" value={contributor} />+
                                </h3>
                                <p>Projects</p>
                            </div>
                        </div>
                    </div>
    
                    <div className="contact-cta-box">
                        <h3>Have any question about us?</h3>
                        <p>Don't hesitate to contact us</p>
                        <Link href="#">
                            <a className="btn btn-primary">Contact Us</a>
                        </Link>
                    </div>
    
                    <div className="map-bg">
                        <img src={require("../../static/images/map.png")} alt="map" />
                    </div>
                </div>
            </section>
        )
    }
}

export default Funfacts