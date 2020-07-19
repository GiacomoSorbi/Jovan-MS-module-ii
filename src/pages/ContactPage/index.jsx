import React from "react";
import { GMaps } from "../../components";
import { Form } from "../../components";
import "./ContactPage.css";

const ContactPage = () => {
	return (
		<div className='contact'>
			<p className='contacttext'>Please get in touch using the form below</p>
			{Form}
			<p className='contacttext'>
				You can find us at the location below (click on the marker)
			</p>
			<div className='map'>
				<GMaps />
			</div>
		</div>
	);
};

export default ContactPage;
