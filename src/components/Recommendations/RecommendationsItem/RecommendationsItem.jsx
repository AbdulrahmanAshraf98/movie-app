import React from "react";
import { useNavigate } from "react-router-dom";
import { scrollTop } from "../../../utilities/ScrollTop";
import Img from "../../UI/Img/Img";

function RecommendationsItem({ item, mediaType, isActive }) {
	const navigateTo = useNavigate();
	const redirectPath =
		mediaType === "tv" ? `/Tv/${item.id}` : `/Movies/Movie/${item.id}`;
	const onClickHandler = (e) => {
		e.preventDefault();
		navigateTo(`${redirectPath}`);
		scrollTop();
	};
	console.log(item);
	return (
		<div className="cast-item Recommendations-item" onClick={onClickHandler}>
			<Img
				className="actor-img img-box"
				src={
					item.poster_path
						? `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${item.poster_path}`
						: item.backdrop_path
						? `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${item.backdrop_path}`
						: "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg"
				}
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
