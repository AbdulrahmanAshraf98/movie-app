import React from "react";
import SearchResultItem from "./SearchResultsCard/SearchResultItem";
import classes from "./SearchResultListPreview.module.css";
const SearchResultListPreview = ({ data }) => {
	return data.map((item) => (
		<div className={`${classes.col}`} key={item.id}>
			<SearchResultItem item={item} />
		</div>
	));
};

export default SearchResultListPreview;
