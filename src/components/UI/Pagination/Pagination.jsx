import React, { useCallback, useEffect, useState } from "react";
import { scrollTop } from "../../../utilities/ScrollTop";
import generateButtons from "./generateButtons";
import "./Pagination.css";

function Pagination({ itemsPerPage, SetPageNumber, currentPage, totalPages }) {
	const [buttons, setButtons] = useState(generateButtons(0, 10));
	const [totalItem, setTotalItem] = useState(10);
	if (currentPage === 1 && totalItem > 10) {
		setTotalItem(10);
		setButtons(generateButtons(0, totalItem));
	}
	if (
		currentPage === Math.floor(currentPage / 10) * totalItem &&
		totalItem !== 10
	) {
		const firstIndex = Math.floor(currentPage - 10);
		const lastIndex = currentPage;
		setTotalItem(currentPage);
		setButtons(generateButtons(firstIndex, lastIndex));
	}
 if (currentPage > totalItem) {
		const firstIndex = Math.floor(currentPage / 10) * 10;
		const lastIndex = Math.floor(currentPage / 10) * 10 + 10;
		setTotalItem(lastIndex);
		setButtons(generateButtons(firstIndex, lastIndex));
 }

	const nextButton = useCallback(() => {
		SetPageNumber(currentPage + 1);
		if (currentPage - 1 === totalItem) {
			console.log(currentPage);
			setTotalItem((prevstate) => {
				return totalItem + 10;
			});
		}
	}, [currentPage]);

	const prevContion = currentPage < totalItem;
	const prevButton = useCallback(() => {
		console.log(currentPage);
		if (currentPage === 1) {
			return;
		}
		SetPageNumber(currentPage - 1);
		if (currentPage - 1 === totalItem - itemsPerPage && currentPage !== 1) {
			setTotalItem(totalItem - itemsPerPage);
			console.log(generateButtons(currentPage - 11, totalItem - 10));
			setButtons(generateButtons(currentPage - 11, totalItem - 10));
		}
	}, [prevContion]);

	useEffect(() => {
		scrollTop();
		console.log("a");
	}, [nextButton, prevButton]);

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
