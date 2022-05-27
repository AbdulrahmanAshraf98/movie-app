import React from "react";
import { useNavigate } from "react-router-dom";

function RecommendationsItem({ item, isActive }) {
	const navigateTo = useNavigate();
	const onClickHandler = (e) => {
		e.preventDefault();
		navigateTo(`/Movies/${item.id}`);
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};
	return (
		<div className="cast-item Recommendations-item" onClick={onClickHandler}>
			<div className="actor-img img-box">
				<img
					src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${item.poster_path}`}
				/>
			</div>
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
