import React from "react";
import "./CastItem.css";
import ImagNotFound from "../../../assets/broken-1.png";
function CastItem({ item, isActive }) {
	return (
		<div className="cast-item">
			<div className="actor-img img-box">
				<img
					src={`${
						item.profile_path
							? `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${item.profile_path}`
							: ImagNotFound
					}`}
				/>
			</div>
			<div className="actor-details">
				<div className="character-name">
					<p>{item.character}</p>
				</div>
				<div className="actor-name">
					<p>{item.name}</p>
				</div>
			</div>
		</div>
	);
}

export default CastItem;
