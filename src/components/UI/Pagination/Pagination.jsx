import React from "react";
import ReactPaginate from "react-paginate";
import "./Pagination.css";

function Pagination({ totalPages, changePageNumberHandler }) {
	return (
		<ReactPaginate
			nextLabel="next"
			previousLabel="prev"
			containerClassName="pagination-buttons-Container"
			pageLinkClassName="pagination-button"
			nextClassName="pagination_next_button"
			previousClassName="pagination_next_button"
			activeLinkClassName="pagination-button_active"
			pageCount={totalPages}
			onPageChange={changePageNumberHandler}
			pageRangeDisplayed={1}
			breakClassName={"pagination-button"}
		/>
	);
}
export default Pagination;
