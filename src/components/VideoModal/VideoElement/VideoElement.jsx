import React from "react";

function VideoElement({ item, isActive }) {
	return (
		item &&
		isActive && (
			<iframe
				src={`https://www.youtube.com/embed/${item.key}`}
				title="YouTube video player"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen="allowfullscreen"></iframe>
		)
	);
}

export default VideoElement;
