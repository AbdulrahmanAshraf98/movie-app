import React from "react";
import DropDown from "../UI/SelectBox/DropDown/DropDown";
import "./SortBy.css";
function SortBy({ onClick, className, mediaType }) {
	return (
		<div className={className}>
			<DropDown
				values={[
					{ name: "popularity.desc", id: 0 },
					{ name: "popularity.asc", id: 1 },
				]}
				defaultValue={"popularity.desc"}
				localStorageItemName={`${mediaType}SortBy`}
				onClick={onClick}
			/>
		</div>
	);
}

export default SortBy;
