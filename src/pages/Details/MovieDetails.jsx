import { useParams } from "react-router-dom";
import Cast from "../../components/Cast/Cast";
import DetailsOverview from "../../components/DetailsOverview/DetailsOverview";
import Recommendations from "../../components/Recommendations/Recommendations";
import Container from "../../components/UI/Container/Container";
import Img from "../../components/UI/Img/Img";
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
					<DetailsOverview item={MovieDetailsData} />
					<Cast Id={id} mediaType={"movie"} />
					<Recommendations Id={id} mediaType={"movie"} />
				</>
			)}
		</>
	);
}

export default MovieDetails;
