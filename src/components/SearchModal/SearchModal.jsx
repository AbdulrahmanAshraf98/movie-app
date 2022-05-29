import React, { useCallback, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import ModalContext from "../../Store/Context/ModalContext/ModalContext";
import MoviesList from "../MoviesList/MoviesList";
import Card from "../UI/Card/Card";
import Container from "../UI/Container/Container";
import Img from "../UI/Img/Img";
import Modal from "../UI/Modal/Modal";
import "./SearchModal.css";
function SearchModal({ type }) {
	const context = useContext(ModalContext);
	const [searchTearm, setSearchTearm] = useState("");
	let url = searchTearm
		? `https://api.themoviedb.org/3/search/${type}?api_key=d948c5c0ea05d8b074392d5c6641f56c&language=en-US&query=${searchTearm}&page=1&include_adult=true`
		: "";
	const [response, loading, error] = useFetch(url);
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
			<Container>
				<div className="searchForm">
					<form>
						<input
							className="searchInput"
							placeholder="search"
							onChange={onChangeHandler}
						/>
					</form>
				</div>
				<div className="movies">
					<div className="row">
						{searchResult &&
							searchResult.map((movie) => (
								<div class="col">
									<div className="Movie-item">
										<Card>
											<div className="card-top">
												<div className="card-top-box">
													<Img
														className="card-image"
														// onClick={onClick}
														src={`${
															movie.poster_path
																? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
																: movie.backdrop_path
																? `https://image.tmdb.org/t/p/w300${movie.backdrop_path}`
																: "ImagNotFound"
														}`}
													/>

													<div className="card-options">
														<i className="fa-solid fa-magnifying-glass"></i>
													</div>
													<div className="play">
														<Link to={`/Movies/Movie/${movie.id}`}>
															<i className="fa-solid fa-magnifying-glass"></i>
														</Link>
													</div>
												</div>
											</div>
											<div className="card-footer">
												<div className="card-desc">
													<h3 className="card-title">
														{movie.title ? movie.title : movie.name}
													</h3>

													<div className="card-details">
														<ul>
															<li
																className="vote-average"
																style={{
																	backgroundColor:
																		movie.vote_average > 6
																			? movie.vote_average < 7
																				? "green"
																				: "#2080e0"
																			: "red",
																}}>
																<span>{movie.vote_average}</span>
															</li>
															<li>
																{movie.release_date
																	? movie.release_date
																	: movie.first_air_date}
															</li>
														</ul>
													</div>
												</div>
											</div>
										</Card>
									</div>
								</div>
							))}
					</div>
				</div>
			</Container>
		</Modal>
	);
}

export default SearchModal;
