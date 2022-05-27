import React, { useCallback, useState } from "react";
import "./DropDown.css";
function DropDown({ values, defaultValue, onClick }) {
	const [isActive, setIsActive] = useState(false);
	const [selectBoxValue, setSelectBoxValue] = useState(defaultValue);

	const DropDownToggle = (e) => {
		setIsActive((prevState) => !prevState);
	};
	const selectedValue = useCallback((e) => {
		setSelectBoxValue((prevState) => e.target.textContent);
		onClick(e.target.id);
	});

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
			</div>
			{isActive && <div className="dropDown-content">{dropdownValues}</div>}
		</div>
	);
}

export default React.memo(DropDown);
