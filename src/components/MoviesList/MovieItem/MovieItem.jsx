import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../UI/Card/Card";
import "./MovieItem.css";
function MovieItem({ movie }) {
	const navigate = useNavigate();
	const onClickHandler = (e) => {
		e.preventDefault();
		navigate(`/Movies/${movie.id}`);
	};
	return (
		<div className="col" onClick={onClickHandler}>
			<div className="Movie-item">
				<Card data={movie} />
			</div>
		</div>
	);
}

export default MovieItem;
