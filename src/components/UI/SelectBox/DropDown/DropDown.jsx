import React, { useCallback, useEffect, useState } from "react";
import "./DropDown.css";

function DropDown({ values, defaultValue, localStorageItemName, onClick }) {
	const [isActive, setIsActive] = useState(false);
	const selectBoxValueDefualtValue = JSON.parse(
		localStorage.getItem(localStorageItemName),
	)
		? JSON.parse(localStorage.getItem(localStorageItemName)).name
		: defaultValue;
	const [selectBoxValue, setSelectBoxValue] = useState(
		selectBoxValueDefualtValue,
	);

	const DropDownToggle = (e) => {
		setIsActive((prevState) => !prevState);
	};
	const selectedValue = useCallback((e) => {
		setSelectBoxValue((prevState) => e.target.textContent);
		onClick(e.target.id);
		setIsActive((prevState) => !prevState);
		localStorage.setItem(
			localStorageItemName,
			JSON.stringify({
				name: e.target.textContent,
				id: e.target.id,
			}),
		);
	});
	const resultHandler = useCallback((e) => {
		setSelectBoxValue((prevState) => "All");
		onClick("");

		setIsActive((prevState) => !prevState);
		localStorage.removeItem(localStorageItemName);
	});
	useEffect(() => {}, [selectBoxValue]);

	let dropdownValues = values.map((value) => (
		<div
			className="dropdown-item"
			id={value.id}
			key={value.id}
			onClick={selectedValue}>
			{value.name}
		</div>
	));
	return (
		<div className="dropDown">
			<div className="dropDown-Btn" onClick={DropDownToggle}>
				{selectBoxValue}
				{selectBoxValue !== "All" && (
					<a className="Reset-btn" onClick={resultHandler}>
						<i className="fa-solid fa-xmark"></i>
					</a>
				)}
			</div>
			{isActive && <div className="dropDown-content">{dropdownValues}</div>}
		</div>
	);
}

export default React.memo(DropDown);
