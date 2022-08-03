import React from "react";
import Logo from "../images/abeja.png";
import { Link } from "react-router-dom"

function Navbar() {
	return (
		<div className="navbar">
			<div className="leftSide">
				<img src={Logo} alt=""/>
			</div>
			<div className="rightSide">
				<Link to="/">Inicio</Link>
				<Link to="/menu">Menu</Link>
				<Link to="/about">Nosotros</Link>
				<Link to="/cantact">Contactanos</Link>
			</div>
		</div>
	)
}

export default Navbar