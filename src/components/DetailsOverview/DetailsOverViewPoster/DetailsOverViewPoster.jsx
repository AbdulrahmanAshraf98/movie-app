import Img from "../../UI/Img/Img";
function DetailsOverViewPoster({
	src,
	alt,
	openModalHandler,
	favoriteAdd,
	favoriteRemoveItem,
	isFavorite,
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
							<a className="playTrailer" onClick={openModalHandler}>
								<i className="fa-solid fa-play"></i>
							</a>
						</div>
						{!currentUser && (
							<div className={`card-options add`} onClick={favoriteAdd}>
								<i className="fa-solid fa-heart"></i>
							</div>
						)}
						{!isFavorite && currentUser && (
							<div className={`card-options add`} onClick={favoriteAdd}>
								<i className="fa-solid fa-heart"></i>
							</div>
						)}
						{currentUser && isFavorite && (
							<div className={`card-options `} onClick={favoriteRemoveItem}>
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
