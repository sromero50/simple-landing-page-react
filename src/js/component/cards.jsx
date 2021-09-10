import React from "react";

//create your first component
const Cards = () => {
	const style = {
		width: "17rem",
		display: "inline-block",
		border: "none"
	};
	return (
		<div className="card col" style={style}>
			<img
				className="card-img-top"
				src="https://www.caballerovillalpandoabogados.mx/img/our-office-8.jpg"
				alt="Card image cap"></img>
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make
					up the bulk of the card content.
				</p>
				<a href="#" className="btn btn-primary">
					Find Out More!
				</a>
			</div>
		</div>
	);
};

export default Cards;
