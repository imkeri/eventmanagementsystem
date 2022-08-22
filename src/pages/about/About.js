import React from 'react';
import './about.css';
import Title from '../../components/Title/Title';
import Eventspeaker from '../../components/eventSpeker/Eventspeaker';
import Navbar from '../navbar/Navbar';
const About = () => {
	return (
		<>
			<Navbar />
			<Title
				title={"About Us"}
				p={"Nihil officia ut sint molestiae tenetur."}
			/>
			<div class="container">
				<div class="row">
					<div class="col-lg-4 col-md-6 align-self-center">
						<div class="image-block bg-about">
							<img class="img-fluid" src="assets/img/featured-speaker.jpg" alt="" />
						</div>
					</div>
					<div class="col-lg-8 col-md-6 align-self-center">
						<div class="content-block">
							<h2>About The <span class="alternate">Eventre</span></h2>
							<div class="description-one">
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm tempor incididunt ut labore dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco.
								</p>
							</div>
							<div class="description-two">
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmtempor incididunt ut labore et dolore magna aliq enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.</p>
							</div>

						</div>
					</div>
				</div>
			</div>

			<Eventspeaker />


		</>
	)
}

export default About
