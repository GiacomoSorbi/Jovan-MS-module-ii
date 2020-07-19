import React from "react";
import "./Header.css";
import Logo from "./logo/logo.svg";
import { NavLink, Link } from "react-router-dom";

const Header = () => (
	<header className='header'>
		<div className='logofile'>
			<Link to='/' target='_self'>
				<img src={Logo} alt='website-logo' />
			</Link>
		</div>
		<div className='headtext'>
			<Link to='/' target='_self'>
				creArch - architectural photography
			</Link>
		</div>

		<nav>
			<NavLink to='/gallery'>gallery </NavLink>

			<NavLink to='/about'> about </NavLink>

			<NavLink to='/contact'> contact </NavLink>
		</nav>
	</header>
);
export default Header;
