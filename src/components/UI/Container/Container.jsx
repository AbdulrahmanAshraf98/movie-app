import React from "react";
import "./Container.css";
function Container({ children, className }) {
	return (
		<div className={`container ${className ? { className } : ""}`}>
			{children}
		</div>
	);
}

export default Container;
