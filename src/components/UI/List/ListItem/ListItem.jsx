import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../Card/Card";

function ListItem({ className, data }) {
	const navigate = useNavigate();
	const onClickHandler = (e) => {
		e.preventDefault();
		navigate(`${navigationPath}${data.id}`);
	};
	return (
		<div className="col" onClick={onClickHandler}>
			<div className={className}>
				<Card data={data} />
			</div>
		</div>
	);
}

export default ListItem;
