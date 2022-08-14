import React from "react";
import { ReactComponent as Illustration } from "../../assets/images/illustration-working.svg";
import illustration from "../../assets/images/illustration-working.svg";

import "../../styles/Home.scss";

type Props = {};

const Hero = () => {
	return (
		<section id="about" className="hero-container">
			<div className="hero-wrapper">
				<div className="text-wrapper">
					<h1>More than just shorter links</h1>
					<p>
						Build your brand's recognition and get detailed insights on how your
						links are performing.
					</p>
					<div>
						<a href="#cta">Get Started</a>
					</div>
				</div>
				<div className="svg-wrapper">
					<Illustration />
				</div>
			</div>
		</section>
	);
};

export default Hero;
