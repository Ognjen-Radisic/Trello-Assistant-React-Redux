import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";

const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="navbar__container">
				<Link to="/">
					<h5>Home</h5>
				</Link>
				<Link to="/">
					<h5>Trello</h5>
				</Link>
				<Link to="/">
					<h5>About</h5>
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
