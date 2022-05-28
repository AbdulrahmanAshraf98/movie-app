import React from "react";
import Img from "../../UI/Img/Img";

function DetailsOverViewPoster({ src, openModalHandler }) {
	// console.log("a");
	return (
		<div className="col details-overview-poster">
			<>
				<Img
					className="poster"
					src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${src}`}>
					<div className="overlay">
						<a className="playTrailer" onClick={openModalHandler}>
							<i className="fa-solid fa-play"></i>
						</a>
					</div>
				</Img>
			</>
		</div>
	);
}

export default DetailsOverViewPoster;
