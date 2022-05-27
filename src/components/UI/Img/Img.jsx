import React from "react";

function Img({ className, src, children }) {
	return (
		<div className={className}>
			<img src={src} />
			{children}
		</div>
	);
}

export default Img;
