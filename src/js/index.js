//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import Home from "./component/home.jsx";
import Navbar from "./component/navbar.jsx";
import Footer from "./component/footer.jsx";
//render your react application

ReactDOM.render(<Home />, document.querySelector("#app"));

// ReactDOM.render(
// 	<React.Fragment>
// 		<Navbar />
// 		<Home />
// 		<Footer />
// 	</React.Fragment>,
// 	document.querySelector("#app")
// );
