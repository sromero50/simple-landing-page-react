import React from "react";
import Jumbotron from "./jumbotron.jsx";
import Navbar from "./navbar.jsx";
import Footer from "./footer.jsx";
import Cards from "./cards.jsx";

//create your first component

// const Home = () => {
// 	return (
// 		<div className="container">
// 			<Jumbotron />
// 			<Cards />
// 			<Cards />
// 			<Cards />
// 			<Cards />
// 		</div>
// 	);
// };

const Home = () => {
	return (
		<div className="container-fluid">
			<Navbar />
			<div className="container">
				<Jumbotron />
				<div className="row">
					<Cards />
					<Cards />
					<Cards />
					<Cards />
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
