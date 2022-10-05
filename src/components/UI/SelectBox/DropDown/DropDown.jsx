import React, { useCallback, useEffect, useState } from "react";
import {
	getLocalStorage,
	localStorageIsFound,
	removeItemFromLocalStorage,
	setLocalStorage,
} from "../../../../utilities/Localstorage";
import "./DropDown.css";

function DropDown({ values, defaultValue, localStorageItemName, onClick }) {
	const [isActive, setIsActive] = useState(false);

	let selectBoxValueDefaultValue = localStorageIsFound(localStorageItemName)
		? getLocalStorage(localStorageItemName, "object").name
		: defaultValue;
	const [selectBoxValue, setSelectBoxValue] = useState(
		selectBoxValueDefaultValue,
	);

	const DropDownToggle = (e) => {
		setIsActive((prevState) => !prevState);
	};
	const selectedValue = useCallback((e) => {
		const InputId = e.target.id;
		const InputText = e.target.textContent;
		setSelectBoxValue((prevState) => InputText);
		onClick(InputId);
		setIsActive((prevState) => !prevState);
		setLocalStorage(
			localStorageItemName,
			{
				name: InputText,
				id: InputId,
			},
			"object",
		);
	}, []);
	const resultHandler = useCallback((e) => {
		setSelectBoxValue((prevState) => defaultValue);
		onClick("%22%22");
		setIsActive((prevState) => !prevState);
		removeItemFromLocalStorage(localStorageItemName);
	}, []);
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
				{selectBoxValue !== defaultValue && (
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
