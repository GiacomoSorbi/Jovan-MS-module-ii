import React from "react";
import "./Slider.css";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";

const slideImages = [
	"https://crear.ch/webdev_gallery/slide_1.jpg",
	"https://crear.ch/webdev_gallery/slide_2.jpg",
	"https://crear.ch/webdev_gallery/slide_3.jpg",
	"https://crear.ch/webdev_gallery/slide_4.jpg",
	"https://crear.ch/webdev_gallery/slide_5.jpg",
];

const Slider = () => {
	return (
		<div>
			<Slide>
				<div className='each-slide'>
					<div style={{ backgroundImage: `url(${slideImages[0]})` }}></div>
				</div>
				<div className='each-slide'>
					<div style={{ backgroundImage: `url(${slideImages[1]})` }}></div>
				</div>
				<div className='each-slide'>
					<div style={{ backgroundImage: `url(${slideImages[2]})` }}></div>
				</div>
				<div className='each-slide'>
					<div style={{ backgroundImage: `url(${slideImages[3]})` }}></div>
				</div>
				<div className='each-slide'>
					<div style={{ backgroundImage: `url(${slideImages[4]})` }}></div>
				</div>
			</Slide>
		</div>
	);
};

export default Slider;
