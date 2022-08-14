import React, { useEffect } from "react";
import Home from "./pages/Home";

type Props = {};

const App = (props: Props) => {
	useEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth",
		});
	}, []);

	return <Home />;
};

export default App;
