import { doc, onSnapshot } from "firebase/firestore";
import React, { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import Authentication from "../../pages/Authentication/Authentication";
import MovieDetails from "../../pages/Details/MovieDetails";
import SeriesDetails from "../../pages/Details/SeriesDetails/SeriesDetails";
import Favorite from "../../pages/Favorite/Favorite";
import Home from "../../pages/Home/Home";
import Movies from "../../pages/Movies/Movies";
import SearchFeed from "../../pages/SearchFeed/SearchFeed";
import Series from "../../pages/Series/Series";
import { selectCurrentUser } from "../../Store/Auth/user.selector";
import { fetchFavoriteData } from "../../Store/Favorite/favorite.actions";
import { db } from "../../utilities/firebase/firebase";
import Preloader from "../preloader/Preloader";
import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner";
function Main() {
	const dispatch = useDispatch();
	const currentUser = useSelector(selectCurrentUser);
	useEffect(() => {
		if (currentUser) {
			const docRef = doc(db, "Favourite", currentUser.uid);
			const unsubscribe = onSnapshot(docRef, (doc) => {
				if (doc.exists()) dispatch(fetchFavoriteData(doc.data().items));
				else dispatch(fetchFavoriteData([]));
			});
			return () => unsubscribe();
		}
	});
	return (
		<main>
			<Routes>
				<Route index element={<Home />} />
				<Route path="Movies" element={<Movies />} />
				<Route path="Movies/:id" element={<MovieDetails />} />
				<Route path="Movies/*" element={<Movies />} />
				<Route path="Series" element={<Series />} />
				<Route path="Tv/:id" element={<SeriesDetails />} />
				<Route path="search" element={<SearchFeed />} />
				{!currentUser && <Route path="Auth" element={<Authentication />} />}
				{currentUser && <Route path="Favorite" element={<Favorite />} />}
				<Route path="*" element={<Navigate to="/" replace />} />
			</Routes>
		</main>
	);
}

export default Main;
