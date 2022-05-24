import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Movies from "../../pages/Movies/Movies";
import Series from "../../pages/Series/Series";

function Main() {
	return (
		<main>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/Movies" element={<Movies />} />
				<Route path="/Series" element={<Series />} />
			</Routes>
		</main>
	);
}

export default Main;
