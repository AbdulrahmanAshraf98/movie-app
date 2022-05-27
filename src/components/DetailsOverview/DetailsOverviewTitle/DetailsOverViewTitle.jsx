import React from "react";

function DetailsOverViewTitle({ title, status, release_date, genres }) {
	return (
		<div className="title">
			<h2>{title}</h2>
			<ul className="info-about">
				<li className="release-info">
					<span>{status}</span>
					<span>{release_date}</span>
				</li>
				<li className="genres">
					{genres &&
						genres.map((genre) => (
							<span key={genre.id} id={genre.id}>
								{genre.name}
							</span>
						))}
				</li>
			</ul>
		</div>
	);
}

export default DetailsOverViewTitle;
