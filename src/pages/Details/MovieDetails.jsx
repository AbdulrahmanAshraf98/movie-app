import { useParams } from "react-router-dom";
import Cast from "../../components/Cast/Cast";
import Recommendations from "../../components/Recommendations/Recommendations";
import Container from "../../components/UI/Container/Container";
import useFetch from "../../Hooks/useFetch";
import "./MovieDetails.css";
function MovieDetails() {
	const { id } = useParams();
	const [responseData, isLoading, error] = useFetch(
		`https://api.themoviedb.org/3/movie/${id}?api_key=d948c5c0ea05d8b074392d5c6641f56c&language=en-US`,
	);
	let MovieDetailsData = null;
	MovieDetailsData = responseData;
	return (
		<>
			{isLoading && !MovieDetailsData && <p>Loading</p>}
			{MovieDetailsData && (
				<>
					<section
						className="movie"
						style={{
							backgroundImage: `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${MovieDetailsData.backdrop_path})`,
						}}>
						<div className="movie-details">
							<Container>
								<div className="row">
									<div className="col movie-poster">
										<div className="poster">
											<img
												src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${MovieDetailsData.poster_path}`}
											/>
											<div className="overlay">
												<div className="playTrailer">
													<i className="fa-solid fa-play"></i>
												</div>
											</div>
										</div>
									</div>
									<div className="col movie-info-details">
										<div className="title">
											<h2>{MovieDetailsData.title}</h2>
											<ul className="info-about-movie">
												<li className="release-info">
													<span>{MovieDetailsData.status}</span>
													<span>{MovieDetailsData.release_date}</span>
												</li>
												<li className="genres">
													{MovieDetailsData.genres &&
														MovieDetailsData.genres.map((genre) => (
															<span key={genre.id} id={genre.id}>
																{genre.name}
															</span>
														))}
												</li>
											</ul>
										</div>
										<div className="tag-line">
											<p>
												{MovieDetailsData.tagline &&
													MovieDetailsData.tagline
														.split(".")
														.map((sentence, index) => (
															<span key={index}>{sentence}</span>
														))}
											</p>
										</div>
										<div className="overView">
											<h3>Overview</h3>
											<p>{MovieDetailsData.overview}</p>
										</div>
									</div>
								</div>
							</Container>
						</div>
					</section>
					<Cast Id={id} mediaType={"movie"} />
					<Recommendations />
				</>
			)}
		</>
	);
}

export default MovieDetails;
