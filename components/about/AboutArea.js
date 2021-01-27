import React from 'react'

export default function About() {
	return (
		<section className="about-area ptb-80">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 col-md-12">
						<div className="about-image">
							<img src={require("../../static/images/about-one.png")} alt="image" />
						</div>
					</div>

					<div className="col-lg-6 col-md-12">
						<div className="about-content">
							<div className="section-title">
								<h2>About Us</h2>
								<div className="bar"></div>

							</div>
							<p>Boosting BD is a full-service creative  digital agency based in Dhaka,Bangladesh. We are wholeheartedly dedicated in creating online marketing and technology solutions for our clients. We have been serving our clients for 3 years. Our philosophy is to provide the best services from our side </p>

							<p>
								Here at Boosting BD, we provide services ensuring proper quality covering some most hyped areas including facebook marketing, Graphics Design and Website development. We stand at the intersection point of marketing and digital agency.

								Boosting BD operates itself as a concerted, market-led team. We are  adorned with a creative and talented team, working our level best to serve our clients. Our team is concerned in providing user-centered development and marketing solutions.
							</p>

							<p>
								We are motivated by the appetency of accepting challenges and facing them with strategic and creative solutions. We are passionate about solving problems by combining different creative techniques and strategies.

								We care about our client's values and patterns. Our key point is to create impressive digital contents to introduce our client's brand with their true audiences. We provide our services ensuring your priority over your competitors.
							</p>

						</div>
					</div>
				</div>

				<div className="about-inner-area">
					<div className="row">
						<div className="col-lg-4 col-md-6">
							<div className="about-text">
								<h3>Our History</h3>
								<p>we Started our business 3 years ago. Our main goal Provide best services . </p>
							</div>
						</div>

						<div className="col-lg-4 col-md-6">
							<div className="about-text">
								<h3>Our Mission</h3>
								<p>Our mission is to make Digital business world. We are working For SME business owners. more than 100 clients already using our services. We are always focused on Best services From our End.
								</p>
							</div>
						</div>

						<div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
							<div className="about-text">
								<h3>Who we are</h3>
								<p>We are providing Design development and marketing services For our clients . We are specially working with SME business owners. We are industry experts Designers , developers and marketers talents . </p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}