import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { HomePage, AboutPage, ContactPage, GalleryPage } from "./pages";
import { routeFix } from "./constants";

function App() {
	return (
		<Switch>
			<Route path={routeFix} exact component={HomePage} />
			<Route path={routeFix + "/gallery"} component={GalleryPage} />
			<Route path={routeFix + "/about"} component={AboutPage} />
			<Route path={routeFix + "/contact"} component={ContactPage} />
			<Route
				path={routeFix + "*"}
				render={() => <img alt='404' src='https://crear.ch/404_page.svg' />}
			/>
		</Switch>
	);
}

export default App;
