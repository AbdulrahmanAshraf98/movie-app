import React from "react";
import Img from "../../UI/Img/Img";

function DetailsOverViewPoster({ src }) {
	// console.log("a");
	return (
		<div className="col details-overview-poster">
			<>
				<Img
					className="poster"
					src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${src}`}>
					<div className="overlay">
						<div className="playTrailer">
							<i className="fa-solid fa-play"></i>
						</div>
					</div>
				</Img>
			</>
		</div>
	);
}

export default DetailsOverViewPoster;
