import React, { useState } from "react";
import Logo from "../images/ooh.png";
import { Link } from "react-router-dom"
import ReorderIcon from '@mui/icons-material/Reorder';
import '../stylesheets/Navbar.css'

function Navbar() {
		const [openLinks, setOpenLInks] = useState(false);

		const toggleNavbar = () => {
			setOpenLInks(!openLinks);
		}

	return (
		<div className="navbar">
			<div className="leftSide" id= {openLinks ? "oper" : "close"}>
				<img src={Logo} alt=""/>
				<div className="hiddenLinks">
					<div>
						<Link to="/">Inicio</Link>
						<Link to="/menu">Menu</Link>
					</div>
					<div>
						<Link to="/about">Nosotros</Link>
						<Link to="/contact">Contacto</Link>
					</div>
				</div>
			</div>
			<div className="rightSide">
				<Link to="/">Inicio</Link>
				<Link to="/menu">Menu</Link>
				<Link to="/about">Nosotros</Link>
				<Link to="/contact">Contacto</Link>
				<button onClick={toggleNavbar}>
					<ReorderIcon />
				</button>
			</div>
		</div>
	)
}

export default Navbar