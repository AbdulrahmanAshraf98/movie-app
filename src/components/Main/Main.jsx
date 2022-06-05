import React, { Suspense, useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Authentication from "../../pages/Authentication/Authentication";
import MovieDetails from "../../pages/Details/MovieDetails";
import SeriesDetails from "../../pages/Details/SeriesDetails/SeriesDetails";
import Favorite from "../../pages/Favorite/Favorite";
import Home from "../../pages/Home/Home";
import Movies from "../../pages/Movies/Movies";
import Series from "../../pages/Series/Series";
import AuthContext from "../../Store/Context/Auth/AuthContext";
import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner";

function Main() {
	const authContext = useContext(AuthContext);
	const isLogin = authContext.isLogin;
	return (
		<main>
			<Routes>
				<Route index element={<Home />} />
				<Route path="Movies" element={<Movies />} />
				<Route path="Movies/Movie/" element={<Movies />} />
				<Route path="Movies/Movie/:id" element={<MovieDetails />} />
				<Route path="Series" element={<Series />} />
				<Route path="Tv/:id" element={<SeriesDetails />} />
				{isLogin === false && (
					<Route path="Auth" element={<Authentication />} />
				)}
				{isLogin === true && <Route path="Favorite" element={<Favorite />} />}
				<Route path="*" element={<Navigate to="/" replace />} />
			</Routes>
		</main>
	);
}

export default Main;
