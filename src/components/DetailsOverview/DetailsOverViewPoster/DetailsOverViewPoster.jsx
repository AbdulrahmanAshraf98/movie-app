import { useContext } from "react";
import AuthContext from "../../../Store/Context/Auth/AuthContext";
import Img from "../../UI/Img/Img";

function DetailsOverViewPoster({
	src,
	alt,
	openModalHandler,
	favoriteAdd,
	favoriteRemoveItem,
	foundItemHandler,
}) {
	const authContext = useContext(AuthContext);
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
						<div
							className={`card-options ${foundItemHandler ? "d-none" : "add"}`}
							onClick={favoriteAdd}>
							<i className="fa-solid fa-heart"></i>
						</div>
						<div
							className={`card-options ${
								foundItemHandler && authContext.isLogin ? "" : "d-none"
							}`}
							onClick={favoriteRemoveItem}>
							<i className="fa-solid fa-heart"></i>
						</div>
					</Img>
				</>
			</div>
		)
	);
}

export default DetailsOverViewPoster;
