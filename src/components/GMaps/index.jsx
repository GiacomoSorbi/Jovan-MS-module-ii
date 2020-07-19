import React, { Component } from "react";
import { Map, Marker, InfoWindow, GoogleApiWrapper } from "google-maps-react";

class GMaps extends Component {
	state = {
		showingInfoWindow: false,
		activeMarker: {},
		selectedPlace: {},
	};
	onMarkerClick = (props, marker, e) =>
		this.setState({
			selectedPlace: props,
			activeMarker: marker,
			showingInfoWindow: true,
		});

	onClose = (props) => {
		if (this.state.showingInfoWindow) {
			this.setState({
				showingInfoWindow: false,
				activeMarker: null,
			});
		}
	};
	render() {
		const style = {
			width: "50%",
			height: "50%",
		};
		return (
			<Map
				google={this.props.google}
				zoom={17}
				initialCenter={{
					lat: 51.52178829,
					lng: -0.13025871,
				}}
				style={style}
			>
				<Marker
					onClick={this.onMarkerClick}
					name={"creArch Photography London"}
				/>
				<InfoWindow
					marker={this.state.activeMarker}
					visible={this.state.showingInfoWindow}
					onClose={this.onClose}
				>
					<div>
						<h4>{this.state.selectedPlace.name}</h4>
					</div>
				</InfoWindow>
			</Map>
		);
	}
}
export default GoogleApiWrapper({
	apiKey: "AIzaSyDXmEALg0mzs2uTtieP1Drx5pzgSNsbjus",
})(GMaps);
