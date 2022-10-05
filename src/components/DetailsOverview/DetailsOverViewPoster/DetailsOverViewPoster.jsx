import Img from "../../UI/Img/Img";
function DetailsOverViewPoster({
	src,
	alt,
	openModalHandler,
	favoriteAdd,
	currentUser,
}) {
	return (
		src && (
			<div className="col details-overview-poster">
				<>
					<Img
						className="poster"
						alt={alt}
						src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${src}`}>
						<div className="overlay">
							<a className="playTrailer" onClick={openModalHandler} href="">
								<i className="fa-solid fa-play"></i>
							</a>
						</div>
						{!currentUser && (
							<div className={`card-options add`} onClick={favoriteAdd}>
								<i className="fa-solid fa-heart"></i>
							</div>
						)}
					</Img>
				</>
			</div>
		)
	);
}

export default DetailsOverViewPoster;
