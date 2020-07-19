import React from "react";
import "./AboutPage.css";

const AboutPage = () => {
	return (
		<div className='about'>
			<img
				className='photographer'
				alt='Photographer'
				src='https://crear.ch/photographer.jpg'
			/>

			<p>
				I am a London based photographer specialising in Architecture
				Photography.
			</p>

			<p>
				Originally from another city, I studied architecture and photography at
				the University of the Architecture and Photography at another city. I’ve
				spent my early career working for several architectural practices around
				the world as an architectural assistant.
			</p>
			<p>
				With a career change and moving to another country, I have moved towards
				shooting architecture and different design photography. I have spent the
				last few years working for a number of clients in this city and across
				another city, town and London.
			</p>
			<p>
				I enjoy the exploration involved in capturing the best angles possible,
				the problem solving for interior compositions and working with light to
				create dynamic and dramatic images.
			</p>
			<p>
				Even though I am based in London, I am always open to opportunities
				across the UK, Europe and worldwide.
			</p>

			<p>
				If you are an architect, interior designer, developer or work in the
				construction industry, please do get in contact and let me know how I
				can help you create imagery of value for your business.
			</p>
			<p>Jovan</p>
		</div>
	);
};

export default AboutPage;
