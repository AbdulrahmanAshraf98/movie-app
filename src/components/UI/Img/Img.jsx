import React, { useState } from "react";
import "./Img.css";
function Img({ className, src, alt, children }) {
	const [lazyImg, setLazyImg] = useState(true);
	const ImgOnLoadHandler = (e) => {
		setLazyImg(false);
	};
	return (
		<div className={className}>
			{lazyImg && <div className="lazyImage"></div>}
			<img
				className={`${lazyImg ? "lazy" : "img"}`}
				src={src}
				alt={alt}
				onLoad={ImgOnLoadHandler}
			/>
			{children}
		</div>
	);
}

export default Img;
