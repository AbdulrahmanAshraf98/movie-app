import React from "react";
import classes from "./Error.module.css";
const Error = ({ error }) => {
	return (
		<div className={`${classes.error}`}>
			<span>
				<i class="fas fa-times"></i>
			</span>
			{error.message}
		</div>
	);
};

export default Error;
