import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { HomePage, AboutPage, ContactPage, GalleryPage } from "./pages";

function App() {
	return (
		<Switch>
			<Route path='/' exact component={HomePage} />
			<Route path='/gallery' exact component={GalleryPage} />
			<Route path='/about' exact component={AboutPage} />
			<Route path='/contact' exact component={ContactPage} />
			<Route
				path='*'
				render={() => (
					<img
						alt='404'
						src='https://freefrontend.com/assets/img/html-funny-404-pages/CodePen-404-Page.gif'
					/>
				)}
			/>
		</Switch>
	);
}

export default App;
