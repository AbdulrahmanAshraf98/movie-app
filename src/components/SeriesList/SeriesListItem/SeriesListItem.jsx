import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../UI/Card/Card";
import "./SeriesListItem.css";
function SeriesListItem({ series }) {
	const navigate = useNavigate();
	const onClickHandler = (e) => {
		e.preventDefault();
		navigate(`/Series/${series.id}`);
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};
	return (
		<div className="col" onClick={onClickHandler}>
			<div className="Series-item">
				<Card data={series} />
			</div>
		</div>
	);
}

export default SeriesListItem;
