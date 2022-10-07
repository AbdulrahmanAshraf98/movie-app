import React from "react";
import SearchResultItem from "./SearchResultsCard/SearchResultItem";
const SearchResultListPreview = ({ data }) => {
	return data.map((item) => (
		<div className="col" key={item.id}>
			<SearchResultItem item={item} />
		</div>
	));
};

export default SearchResultListPreview;
