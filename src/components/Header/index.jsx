import React from "react";
import "./Header.css";
import Logo from "./logo/logo.svg";
import { NavLink, Link } from "react-router-dom";
import { routeFix } from "../../constants";

const Header = () => (
	<header className='header'>
		<div className='logofile'>
			<Link to={routeFix + "/"} target='_self'>
				<img src={Logo} alt='website-logo' />
			</Link>
		</div>
		<div className='headtext'>
			<Link to={routeFix + "/"} target='_self'>
				creArch - architectural photography
			</Link>
		</div>

		<nav>
			<NavLink to={routeFix + "/gallery"}>gallery </NavLink>

			<NavLink to={routeFix + "/about"}> about </NavLink>

			<NavLink to={routeFix + "/contact"}> contact </NavLink>
		</nav>
	</header>
);
export default Header;
