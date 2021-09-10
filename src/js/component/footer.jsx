import React from "react";

//create your first component
const Footer = () => {
	const style = {
		height: "80px"
	};
	return (
		<footer className="footer fixed-bottom bg-dark" style={style}>
			<div className="container-fluid text-center mt-4">
				<span className="text-white">Copyright etc</span>
			</div>
		</footer>
	);
};

export default Footer;
