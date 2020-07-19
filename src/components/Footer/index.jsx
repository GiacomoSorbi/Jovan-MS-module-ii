import React from "react";
import "./Footer.css";
import Instagram from "./socmed/instagram.svg";
import Twitter from "./socmed/twitter.svg";
import Facebook from "./socmed/facebook.svg";

const Footer = () => (
	<footer className='footer'>
		<div className='foottext'>
			<p>creArch © 2020</p>
		</div>

		<div className='socmed'>
			<a
				href='https://www.twitter.com/crearch'
				target='_blank'
				rel='noopener noreferrer'
			>
				<img className='iconlogo' src={Twitter} alt='twitter-logo' />
			</a>
			<a
				href='https://www.instagram.com/cre_arch'
				target='_blank'
				rel='noopener noreferrer'
			>
				<img className='iconlogo' src={Instagram} alt='instagram-logo' />
			</a>
			<a
				href='https://www.facebook.com/Cre_Arch-102378538229159'
				target='_blank'
				rel='noopener noreferrer'
			>
				<img className='iconlogo' src={Facebook} alt='facebook-logo' />
			</a>
		</div>
	</footer>
);
export default Footer;
