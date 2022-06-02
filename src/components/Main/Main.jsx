import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Authentication from "../../pages/Authentication/Authentication";
import MovieDetails from "../../pages/Details/MovieDetails";
import SeriesDetails from "../../pages/Details/SeriesDetails/SeriesDetails";
import Favorite from "../../pages/Favorite/Favorite";
import Home from "../../pages/Home/Home";
import Movies from "../../pages/Movies/Movies";
import Series from "../../pages/Series/Series";
import AuthContext from "../../Store/Context/Auth/AuthContext";

function Main() {
	const authContext = useContext(AuthContext);
	return (
		<main>
			<Routes>
				<Route index element={<Home />} />
				<Route path="Movies" element={<Movies />} />
				<Route path="Movies/Movie/" element={<Movies />} />
				<Route path="Movies/Movie/:id" element={<MovieDetails />} />
				<Route path="Series" element={<Series />} />
				<Route path="Tv/:id" element={<SeriesDetails />} />

				{authContext.isLogin && (
					<>
						<Route path="Favorite" element={<Favorite />} />
					</>
				)}
				{!authContext.isLogin && (
					<>
						<Route path="Auth" element={<Authentication />} />
						<Route path="Favorite" element={<Navigate to="/" replace />} />
					</>
				)}
				{/* <Route path="*" element={<Navigate to="/" replace />} /> */}
			</Routes>
		</main>
	);
}

export default Main;
