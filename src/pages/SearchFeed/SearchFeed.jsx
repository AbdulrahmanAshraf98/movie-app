import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchResultListPreview from "../../components/SearchResultsListPreview/SearchResultListPreview";
import ListSkeleton from "../../components/Skeleton/ListSkeleton/ListSkeleton";
import Container from "../../components/UI/Container/Container";
import List from "../../components/UI/List/List";

import {
	fetchSearchResultData,
	resetSearchResultDataFailed,
} from "../../Store/SearchFeedResult/searchFeedResult.actions";
import {
	selectSearchResultData,
	selectSearchResultError,
	selectSearchResultIsLoading,
} from "../../Store/SearchFeedResult/searchFeedResult.selector";
import "./SearchFeed.css";
const SearchFeed = () => {
	const dispatch = useDispatch();
	const searchResult = useSelector(selectSearchResultData);
	const isLoading = useSelector(selectSearchResultIsLoading);
	const error = useSelector(selectSearchResultError);
	const [searchTerm, setSearchTerm] = useState("");
	const onChangeHandler = useCallback((e) => {
		e.preventDefault();
		setSearchTerm(e.target.value);
	}, []);
	useEffect(() => {
		if (searchTerm) dispatch(fetchSearchResultData(searchTerm));
		else dispatch(resetSearchResultDataFailed());
	}, [searchTerm]);
	return (
		<section className="searchFeed">
			<Container>
				<div className="searchForm">
					<form>
						<input
							className="searchInput"
							placeholder="search"
							onChange={onChangeHandler}
							value={searchTerm}
						/>
					</form>
				</div>
				{searchResult && (
					<div className={`row result`}>
						{isLoading && <ListSkeleton cards={20} />}
						{searchResult && !isLoading && (
							<SearchResultListPreview data={searchResult} />
						)}
					</div>
				)}
			</Container>
		</section>
	);
};

export default SearchFeed;
