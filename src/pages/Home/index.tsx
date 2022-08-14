import React from "react";
import Layout from "../../components/Layout";
import CTA from "../../components/Sections/CTA";
import Features from "../../components/Sections/Features";
import Hero from "../../components/Sections/Hero";
import Resouces from "../../components/Sections/Resouces";

type Props = {};

const Home = (props: Props) => {
	return (
		<Layout>
			<Hero />
			<Resouces />
			<Features />
			<CTA />
		</Layout>
	);
};

export default Home;
