import React, { useCallback, useEffect, useState } from "react";
import { scrollTop } from "../../../utilities/ScrollTop";
import generateButtons from "./generateButtons";
import "./Pagination.css";

function Pagination({ itemsPerPage, SetPageNumber, currentPage, totalPages }) {
	const [buttons, setButtons] = useState(generateButtons(0, 10));
	const [totalItem, setTotalItem] = useState(10);
	if (currentPage === 1 && totalItem > 10) {
		console.log(1);
		totalItem = 10;
		setButtons(generateButtons(0, totalItem));
	}

	const nextButton = () => {
		console.log(currentPage);
		console.log(totalItem);

		if (currentPage === totalItem) {
			setTotalItem((prevstate) => totalItem + 10);
			setButtons(generateButtons(currentPage, currentPage + 10));
		}
		SetPageNumber((prev) => currentPage + 1);
	};

	const prevButton = () => {
		if (currentPage === 1) {
			return;
		}
		SetPageNumber((prev) => currentPage - 1);

		if (currentPage - 1 === totalItem - itemsPerPage && currentPage !== 1) {
			setTotalItem((prevstate) => totalItem - itemsPerPage);
			setButtons(generateButtons(currentPage - 11, totalItem - 10));
		}
	};

	useEffect(() => {
		scrollTop();
	}, [nextButton, prevButton]);
	useEffect(() => {}, [
		buttons,
		totalItem,
		nextButton,
		prevButton,
		currentPage,
	]);
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
