import React, { useCallback, useContext, useEffect, useState } from "react";
import useFetch from "../../Hooks/useFetch";
import ModalContext from "../../Store/Context/ModalContext/ModalContext";
import MoviesList from "../MoviesList/MoviesList";
import SeriesList from "../SeriesList/SeriesList";
import Container from "../UI/Container/Container";
import Modal from "../UI/Modal/Modal";
import "./SearchModal.css";
function SearchModal({ type }) {
	const context = useContext(ModalContext);
	const [searchTearm, setSearchTearm] = useState("");
	let url = searchTearm
		? `https://api.themoviedb.org/3/search/${type}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&query=${searchTearm}&page=1&include_adult=true`
		: "";
	const [response, isLoading, error] = useFetch(url);
	const [searchResult, setSearchResult] = useState([]);
	const onChangeHandler = useCallback((e) => {
		e.preventDefault();
		setSearchTearm(e.target.value);
	}, []);
	const closeModalHandler = useCallback(() => {
		context.SearchModuleCloseHandler();
	}, []);

	useEffect(() => {
		setSearchResult(response.results);
		if (searchTearm.trim().length === 0) {
			setSearchResult([]);
		}
	}, [searchTearm]);
	return (
		<Modal
			className="searchModal"
			closeBtnClassName="closeSearchModal"
			closeModalHandler={closeModalHandler}>
			<Container
			// className={`${searchTearm.trim().length !== 0 ? "Hauto" : ""}`}>
			>
				<div className="searchForm">
					<form>
						<input
							className="searchInput"
							placeholder="search"
							onChange={onChangeHandler}
						/>
					</form>
				</div>
				<div className="row">
					{response && !isLoading && searchResult && type === "movie" && (
						<MoviesList movies={searchResult} />
					)}
					{response && !isLoading && searchResult && type === "tv" && (
						<SeriesList series={searchResult} />
					)}
				</div>
			</Container>
		</Modal>
	);
}

export default SearchModal;
