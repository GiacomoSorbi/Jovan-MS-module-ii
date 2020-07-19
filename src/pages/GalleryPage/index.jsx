import React from "react";
import ReactDOM from "react-dom";
import Gallery from "react-photo-gallery";
import { photos } from "./photos";

const GalleryPage = () => <Gallery photos={photos} direction={"column"} />;
ReactDOM.render(<GalleryPage />, document.getElementById("root"));

export default GalleryPage;
