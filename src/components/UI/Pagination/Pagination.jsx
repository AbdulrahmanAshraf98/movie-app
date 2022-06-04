import React, { useCallback, useEffect, useState } from "react";
import { scrollTop } from "../../../utilities/ScrollTop";
import generateButtons from "./generateButtons";
import "./Pagination.css";

function Pagination({ itemsPerPage, SetPageNumber, currentPage, totalPages }) {
	const [buttons, setButtons] = useState(generateButtons(0, 10));
	const [totalItem, setTotalItem] = useState(10);


	const nextButton = useCallback(() => {
		if (currentPage === totalItem) {
			setTotalItem((prevstate) => {
				return totalItem + 10;
			});
			setButtons(generateButtons(currentPage, currentPage + 10));
		}
		SetPageNumber(currentPage + 1);
	}, [currentPage]);

	const prevConation = currentPage < totalItem;
	const prevButton = useCallback(() => {
		if (currentPage === 1) {
			return;
		}
		SetPageNumber(currentPage - 1);
		if (currentPage - 1 === totalItem - itemsPerPage && currentPage !== 1) {
			setTotalItem(totalItem - itemsPerPage);
			setButtons(generateButtons(currentPage - 10, totalItem - 10));
		}
	}, [prevConation]);

	useEffect(() => {
		scrollTop();
		console.log("a");
	}, [nextButton, prevButton, setButtons]);

	return (
		<>
			<div className="pagination-buttons-Container">
				<button
					className={`pagination-button 
					}`}
					onClick={prevButton}>
					prev
				</button>
				{buttons &&
					buttons.map((item, index) => (
						<button
							className={`pagination-button ${
								item === currentPage ? "active" : ""
							}`}
							onClick={() => {
								SetPageNumber(item);
							}}
							key={item}>
							{item}
						</button>
					))}
				<button
					className={`pagination-button `}
					onClick={() => {
						nextButton();
					}}>
					next
				</button>
			</div>
		</>
	);
}
export default Pagination;
