import React from "react";

//create your first component
const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<a className="navbar-brand" href="#">
				Start Bootstrap
			</a>
			<ul className="navbar-nav ml-auto">
				<li className="nav-item active">
					<a className="nav-link" href="#">
						Home
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#">
						About
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#">
						Services
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#">
						Contact
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
