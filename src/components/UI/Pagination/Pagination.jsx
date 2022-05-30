import React, { useCallback, useEffect, useState } from "react";
import { scrollTop } from "../../../utilities/ScrollTop";
import generateButtons from "./generateButtons";
import "./Pagination.css";

let totalItem = 10;
let buttons = generateButtons(0, 10);

function Pagination({ itemsPerPage, SetPageNumber, currentPage, totalPages }) {
	// const [buttons, setButtons] = useState(generateButtons(0, 10));

	const nextButton = () => {
		SetPageNumber((prev) => currentPage + 1);
		if (currentPage === totalItem) {
			totalItem = totalItem + 10;
			// setButtons((prev) => generateButtons(currentPage, totalItem));
			buttons = generateButtons(currentPage, totalItem);
		}
	};

	const prevButton = () => {
		if (currentPage === 1) {
			return;
		}
		SetPageNumber((prev) => currentPage - 1);
		if (currentPage === totalItem - itemsPerPage + 1 && currentPage !== 1) {
			totalItem = totalItem - itemsPerPage;
			// setButtons((prev) =>
			// 	generateButtons(totalItem - itemsPerPage, totalItem),
			// );
			buttons = generateButtons(totalItem - itemsPerPage, totalItem);
		}
	};

	useEffect(() => {
		scrollTop();
	}, [nextButton, prevButton, SetPageNumber, currentPage]);
	useEffect(() => {}, [nextButton, prevButton, SetPageNumber]);
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
						// SetPageNumber(item);
						nextButton();
					}}>
					next
				</button>
			</div>
		</>
	);
}
export default Pagination;
