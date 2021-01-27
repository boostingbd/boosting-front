import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import OwlCarousel from 'react-owl-carousel3';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slider from './ProjectSlider'
import styles from './project.module.css'
import axios from 'axios'
import ClipLoader from "react-spinners/ClipLoader";
import * as Icon from 'react-feather'
const options = {
    loop: true,
    nav: false,
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    margin: 30,
    autoplayTimeout: 5000,
    responsive: {
        0:{
            items: 1,
        },
        576:{
            items: 2,
        },
        768:{
            items: 2,
        },
        1024:{
            items: 3,
        },
        1200:{
            items: 4,
        }
    },
}

const Projects=() => {

    const [category, setCategory] = useState('all')
	const [portfolios, setPortfolios] = useState([])
	const [selectedPortfolio, setSelectedPortfolio] = useState(null)
	const [show, setShow] = useState(false);

	const [page, setPage] = useState(0)
	const [showLoadButton, setShowLoadButton] = useState(true)

	let [loading, setLoading] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = (portfolio) => {
		setSelectedPortfolio(portfolio)
		setShow(true);
	}
   

    useEffect(() => {
        axios.get(`/portfolio/getall`)
        .then(res => {
            setPortfolios(res.data.portfolio)
            setPage(1)
            if (res.data.portfolio.length !== 20) {
                setShowLoadButton(false)
            }
            setLoading(false)
        })
        .catch(err => {
            setLoading(false)
            err && err.response && alert(err.response.data.error)
        })
    }, [])


        return (
            <section className="ml-projects-area pt-0 ptb-80">
                <Dialog
				open={show}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
				
				maxWidth='lg'
				
			>
				<div className={styles.modalHeader}>
					<h5>Project Details</h5>
					<span style={{cursor:"pointer"}} onClick={()=>handleClose()} className='close'>x</span>
				</div>
				<DialogContent>
					<div className='row' >
						<div className='col-md-6 col-sm-12'>
							<div><label>Category :</label><strong style={{ marginLeft: "10px", textTransform: "uppercase" }}>{selectedPortfolio && selectedPortfolio.category}</strong></div>
							<p>{selectedPortfolio && selectedPortfolio.shortDescription}</p>
							<p>{selectedPortfolio && selectedPortfolio.longDescription}</p>
						</div>
						<div  className='col-md-6 col-sm-12'>
							<Slider  portfolioImages={selectedPortfolio && selectedPortfolio.portfolioImages} />
						</div>
					</div>
				</DialogContent>

			</Dialog>



                <div className="container">
                    <div className="section-title st-fs-28">
                        <h2>Some of our clients testimonials about their Business success and Growths. </h2>
                        <div className="bar"></div>
                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
                    </div>
                </div>

                <div className="container-fluid">
                    <OwlCarousel 
                        className="ml-projects-slides"
                        {...options}
                    >


                    {
						loading ? <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}><ClipLoader size={80} /></div> :
							portfolios.length > 0 ? portfolios.map((portfolio, index) => {
                                if(index === 8) return
								return (
									<div key={index} >
										<div className="single-works">
											<img src={portfolio.portfolioImages[0]} alt="image" className={styles.worksThumb} />
											<span style={{ cursor: "pointer" }} onClick={() => handleShow(portfolio)} className='icon'>

												<Icon.Eye />

											</span>

											<div className="works-content">
												{/* <h3>
												<Link href="/project-details">
													<a>Incredible infrastructure</a>
												</Link>
											</h3> */}
												<p>{portfolio.shortDescription}</p>
											</div>
										</div>
									</div>

								)
							}) :
								<p>No works found</p>
					}


                        {/* <div className="single-ml-projects-box">
                            <img src={require("../../static/images/projects-img1.jpg")} alt="image" />
                            <div className="plus-icon">
                                <Link href="#">
                                    <a>
                                        <span></span>
                                    </a>
                                </Link>
                            </div>
                        </div> */}

                      
                    </OwlCarousel>
                </div>

                {/* Shape Images */}
                <div className="shape1">
                    <img src={require("../../../static/images/shape1.png")} alt="shape" />
                </div>
                <div className="shape2 rotateme">
                    <img src={require("../../../static/images/shape2.svg")} alt="shape" />
                </div>
                <div className="shape3">
                    <img src={require("../../../static/images/shape3.svg")} alt="shape" />
                </div>
                <div className="shape4">
                    <img src={require("../../../static/images/shape4.svg")} alt="shape" />
                </div>
                <div className="shape7">
                    <img src={require("../../../static/images/shape4.svg")} alt="shape" />
                </div>
                <div className="shape8 rotateme">
                    <img src={require("../../../static/images/shape2.svg")} alt="shape" />
                </div>
            </section>
        );
    }


export default Projects;