import React from "react";
import Jumbotron from "./jumbotron";
import Navbar from "./navbar";
import Footer from "./footer";
import CardBox from "./cardBox";

const Home = () => {
	return (
		<div className="container-fluid">
			<Navbar />
			<div className="container">
				<Jumbotron />
				<div className="row">
					<CardBox />
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
