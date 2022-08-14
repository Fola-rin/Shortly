import React from "react";
import { ReactComponent as Logo } from "../../assets/icons/logo-white.svg";
import { ReactComponent as Facebook } from "../../assets/icons/socials/icon-facebook.svg";
import { ReactComponent as Instagram } from "../../assets/icons/socials/icon-instagram.svg";
import { ReactComponent as Pinterest } from "../../assets/icons/socials/icon-pinterest.svg";
import { ReactComponent as Twitter } from "../../assets/icons/socials/icon-twitter.svg";

import "../../styles/Footer.scss";

type NavWrapperPropsType = {
	title?: string;
	links?: string[];
	socials?: boolean;
};

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-wrapper">
				<div className="logo">
					<a href="#top">
						<Logo />
					</a>
				</div>
				<div className="nav-container">
					<NavWrapper
						title="Features"
						links={["Link Shortening", "Branded Links", "Analytics"]}
					/>
					<NavWrapper
						title="Resources"
						links={["Blog", "Developers", "Support"]}
					/>
					<NavWrapper
						title="Company"
						links={["About", "Our Team", " Careers", "Contact"]}
					/>
					<NavWrapper socials />
				</div>
			</div>
		</footer>
	);
};

export default Footer;

const NavWrapper = ({ title, links, socials }: NavWrapperPropsType) => {
	if (socials) {
		return (
			<div className="nav-wrapper">
				<nav className="socials">
					<a href="https://facebook.com" target="_blank" rel="noreferrer">
						<Facebook />
					</a>
					<a href="https://twitter.com" target="_blank" rel="noreferrer">
						<Twitter />
					</a>
					<a href="https://pinterest.com" target="_blank" rel="noreferrer">
						<Pinterest />
					</a>
					<a href="https://instgram.com" target="_blank" rel="noreferrer">
						<Instagram />
					</a>
				</nav>
			</div>
		);
	}
	return (
		<div className="nav-wrapper">
			<p>{title}</p>
			<nav className="nav-links">
				{links
					? links.map((link, id) => (
							<a href="#top" key={id}>
								{link}
							</a>
					  ))
					: null}
			</nav>
		</div>
	);
};
