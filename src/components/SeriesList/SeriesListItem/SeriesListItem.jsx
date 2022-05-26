import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../UI/Card/Card";
import "./SeriesListItem.css";
function SeriesListItem({ series }) {
	const navigate = useNavigate();
	const onClickHandler = (e) => {
		e.preventDefault();
		navigate(`/Series/${series.id}`);
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
