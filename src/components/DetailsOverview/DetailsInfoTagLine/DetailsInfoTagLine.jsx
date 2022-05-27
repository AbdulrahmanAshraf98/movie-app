import React from "react";

function DetailsInfoTagLine({ tagline }) {
	return (
		<div className="tag-line">
			<p>
				{tagline &&
					tagline
						.split(".")
						.map((sentence, index) => <span key={index}>{sentence}</span>)}
			</p>
		</div>
	);
}

export default DetailsInfoTagLine;
