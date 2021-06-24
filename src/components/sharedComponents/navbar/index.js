import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineInfoCircle } from "react-icons/ai";

const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="navbar__container">
				<Link to="/" className="navbar__link-fix">
					<AiOutlineHome className="navbar__btn" />
				</Link>
				<Link to="/" className="navbar__logo">
					<h4>Trello</h4>
				</Link>
				<Link to="/" className="navbar__link-fix">
					<AiOutlineInfoCircle className="navbar__btn" />
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
