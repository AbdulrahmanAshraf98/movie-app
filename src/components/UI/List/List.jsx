import React from "react";
import ListItem from "./ListItem/ListItem";

function List({ data }) {
	return data.map((element) => {
		return <ListItem key={element.id} item={element} />;
	});
}

export default List;
