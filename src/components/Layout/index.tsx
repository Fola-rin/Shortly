import React, { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

type Props = {
	children: ReactNode;
};

const Layout = ({ children }: Props) => {
	return (
		<>
			<Header />
			<main className="main-container">{children}</main>
			<Footer />
		</>
	);
};

export default Layout;
