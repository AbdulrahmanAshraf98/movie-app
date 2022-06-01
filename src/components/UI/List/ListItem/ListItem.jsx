// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Card from "../../Card/Card";
// import Img from "../../Img/Img";

// function ListItem({ className, Item }) {
// 	const navigate = useNavigate();
// 	const onClickHandler = (e) => {
// 		e.preventDefault();
// 		navigate(`${navigationPath}${Item.id}`);
// 	};
// 	return (
// 		<div className="item">
// 			<Card>
// 				<div className="card-top">
// 					<div className="card-top-box">
// 						<Img
// 							className="card-image"
// 							// onClick={onClick}
// 							src={`${
// 								Item.poster_path
// 									? `https://image.tmdb.org/t/p/w300${Item.poster_path}`
// 									: Item.backdrop_path
// 									? `https://image.tmdb.org/t/p/w300${Item.backdrop_path}`
// 									: `https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg`
// 							}`}>
// 							<div className="card-options">
// 								<i className="fa-solid fa-magnifying-glass"></i>
// 							</div>
// 							<div className="play">
// 								<Link to={`/Movies/Movie/${Item.id}`}>
// 									<i className="fa-solid fa-magnifying-glass"></i>
// 								</Link>
// 							</div>
// 						</Img>
// 					</div>
// 				</div>
// 				<div className="card-footer">
// 					<div className="card-desc">
// 						<h3 className="card-title">
// 							{Item.title ? Item.title : Item.name}
// 						</h3>

// 						<div className="card-details">
// 							<ul>
// 								<li
// 									className="vote-average"
// 									style={{
// 										backgroundColor:
// 											Item.vote_average > 6
// 												? Item.vote_average < 7
// 													? "green"
// 													: "#2080e0"
// 												: "red",
// 									}}>
// 									<span>{Item.vote_average}</span>
// 								</li>
// 								<li>
// 									{movie.release_date ? Item.release_date : Item.first_air_date}
// 								</li>
// 							</ul>
// 						</div>
// 					</div>
// 				</div>
// 			</Card>
// 		</div>
// 	);
// }

// export default ListItem;
