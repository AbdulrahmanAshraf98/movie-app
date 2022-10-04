import React from "react";
import {
	LazyLoadImage,
	trackWindowScroll,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
function Img({ className, src, alt, children, scrollPosition }) {
	return (
		<div className={className}>
			<LazyLoadImage
				alt={alt}
				effect="blur"
				src={src}
				wrapperClassName={className}
				threshold={200}
				scrollPosition={scrollPosition}
			/>
			{children}
		</div>
	);
}

export default trackWindowScroll(Img);
