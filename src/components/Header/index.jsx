import React from "react";
import "./Header.css";
import Logo from "./logo/logo.svg";
import { NavLink } from "react-router-dom";

const Header = () => (
	<header className='header'>
		<div className='logofile'>
			<a href='/' target='_self'>
				<img src={Logo} alt='website-logo' />
			</a>
		</div>
		<div className='headtext'>
			<a href='/' target='_self'>
				creArch - architectural photography
			</a>
		</div>

		<nav>
			<NavLink to='/gallery'>gallery </NavLink>

			<NavLink to='/about'> about </NavLink>

			<NavLink to='/contact'> contact </NavLink>
		</nav>
	</header>
);
export default Header;
