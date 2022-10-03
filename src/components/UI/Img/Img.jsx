import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
function Img({ className, src, alt, children }) {
	return (
		<div className={className}>
			<LazyLoadImage
				alt={alt}
				effect="blur"
				src={src}
				wrapperClassName={className}
				// threshold={200}
			/>
			{children}
		</div>
	);
}

export default Img;
