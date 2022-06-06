import React from "react";
import Img from "../../UI/Img/Img";
import "./CastItem.css";
function CastItem({ item, isActive }) {
	return (
		<div className="cast-item">
			<div className="actor-img img-box">
				<Img
					className="actor-img img-box"
					src={`${
						item.profile_path
							? `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${item.profile_path}`
							: "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg"
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
