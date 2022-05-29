import React from "react";
import "./LoadingSpinner.css";
function LoadingSpinner() {
	return (
		<div className="Loadingspinner">
			<div className="sk-chase">
				<div className="sk-chase-dot"></div>
				<div className="sk-chase-dot"></div>
				<div className="sk-chase-dot"></div>
				<div className="sk-chase-dot"></div>
				<div className="sk-chase-dot"></div>
				<div className="sk-chase-dot"></div>
			</div>
		</div>
	);
}

export default LoadingSpinner;
