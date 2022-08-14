import React from "react";
import "../../styles/Home.scss";
import { ReactComponent as BrandRecog } from "../../assets/images/features/icon-brand-recognition.svg";
import { ReactComponent as DetailedRecords } from "../../assets/images/features/icon-detailed-records.svg";
import { ReactComponent as FullyCustom } from "../../assets/images/features/icon-fully-customizable.svg";

type FeaturePropsType = {
	SRC: React.FunctionComponent<
		React.SVGProps<SVGSVGElement> & { title?: string }
	>;
	title: string;
	desc: string;
};

const Features = () => {
	return (
		<section id="features" className="features-container">
			<div className="features-wrapper">
				<div className="features-header">
					<h2>Advanced Statistics</h2>
					<p>
						Track how your links are performing across the web with our advanced
						statistics dashboard.
					</p>
				</div>
				<div className="features-contents">
					<div className="horizontal-bar"></div>
					<div className="features">
						<Feature
							SRC={BrandRecog}
							title={"Brand Recognition"}
							desc="Boost your brand recognition with each click. Generic links
								don't mean a thing. Branded links help instil confidence in your
								content."
						/>
						<Feature
							SRC={DetailedRecords}
							title={"Detailed Records"}
							desc="Gain insights into who is clicking your links. Knowing when and where 
							people engage with your content helps inform better decisions.."
						/>
						<Feature
							SRC={FullyCustom}
							title={"Fully Customizable"}
							desc="Improve brand awareness and content discoverability through customizable 
							links, supercharging audience engagement."
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Features;

const Feature = ({ SRC, title, desc }: FeaturePropsType) => {
	return (
		<div className="feature">
			<div className="img-wrapper">
				<SRC />
			</div>
			<h3>{title}</h3>
			<p>{desc}</p>
		</div>
	);
};
