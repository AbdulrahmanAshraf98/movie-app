import React from "react";
import Container from "../UI/Container/Container";
import DetailsInfo from "./DetailsInfo/DetailsInfo";
import DetailsOverViewPoster from "./DetailsOverViewPoster/DetailsOverViewPoster";
import "./DetailsOverview.css";
function DetailsOverview({ item, openModalHandler }) {
	const detailsOverviewPoster = item.poster_path
		? item.poster_path
		: item.backdrop_path;
	return (
		<section
			className="Details"
			style={{
				backgroundImage: `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${item.backdrop_path})`,
			}}>
			<div className="details-overview">
				<Container>
					<div className="row">
						<DetailsOverViewPoster
							src={detailsOverviewPoster}
							openModalHandler={openModalHandler}
						/>
						<DetailsInfo
							title={item.title ? item.title : item.name}
							status={item.status}
							release_date={item.release_date}
							genres={item.genres}
							tagline={item.tagline}
							overview={item.overview}
							seasons={item.seasons}
						/>
					</div>
				</Container>
			</div>
		</section>
	);
}

export default React.memo(DetailsOverview);
