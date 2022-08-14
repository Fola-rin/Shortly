import React from "react";

type Props = {};
const css = `.cta-wrapper {
	background-image: url("/bg/bg-boost-desktop.svg");
}

@media screen and (max-width: 450px) {
	.cta-wrapper {
		background-image: url("/bg/bg-boost-mobile.svg");
	}`;

const CTA = (props: Props) => {
	return (
		<>
			<style>{css}</style>
			<section id="cta" className="cta-container">
				<div className="cta-wrapper">
					<h2>Boost your links today</h2>
					<a href="#top">Get Started</a>
				</div>
			</section>
		</>
	);
};

export default CTA;
