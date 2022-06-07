import React from "react";

function Img({ className, src, alt, children }) {
	return (
		<div className={className}>
			<img src={src} alt={alt} />
			{children}
		</div>
	);
}

export default Img;
