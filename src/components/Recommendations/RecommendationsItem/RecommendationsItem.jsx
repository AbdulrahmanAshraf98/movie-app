import React from "react";
import { useNavigate } from "react-router-dom";
import Img from "../../UI/Img/Img";

function RecommendationsItem({ item, mediaType, isActive }) {
	const navigateTo = useNavigate();
	const redirectPath =
		mediaType === "tv" ? `/Tv/${item.id}` : `/Movies/Movie/${item.id}`;
	const onClickHandler = (e) => {
		e.preventDefault();
		navigateTo(`${redirectPath}`);

		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};
	return (
		<div className="cast-item Recommendations-item" onClick={onClickHandler}>
			<Img
				className="actor-img img-box"
				src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${item.poster_path}`}
			/>
			<div className="actor-details">
				<div className="character-name">
					<p>{item.original_title}</p>
				</div>
				<div className="actor-name">
					<p>{item.vote_average.toFixed("1")}</p>
				</div>
			</div>
		</div>
	);
}

export default RecommendationsItem;
