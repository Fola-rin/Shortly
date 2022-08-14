import React, { useState } from "react";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import MenuIcon from "@mui/icons-material/Menu";

import "../../styles/Header.scss";

type Props = {};

const Header = (props: Props) => {
	const [show, setShow] = useState<boolean>(false);
	return (
		<header className="header" id="top">
			<div className="header-wrapper">
				<div className="logo">
					<a href="#top">
						<Logo />
					</a>
				</div>
				<div className="nav-container">
					<div className="nav-wrapper">
						<div className="nav-mobile-trigger">
							<button
								onClick={() => {
									setShow(!show);
								}}
							>
								<MenuIcon />
							</button>
						</div>
						<div className={`nav-contents${show ? " show" : ""}`}>
							<nav className="nav-links">
								<a href="#about" onClick={() => setShow(false)}>
									About
								</a>
								<a href="#resources" onClick={() => setShow(false)}>
									Resources
								</a>
								<a href="#features" onClick={() => setShow(false)}>
									Features
								</a>
							</nav>
							<nav className="cta">
								<a href="#cta" onClick={() => setShow(false)}>
									Login
								</a>
								<a href="#cta" onClick={() => setShow(false)}>
									{" "}
									Sign Up
								</a>
							</nav>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
