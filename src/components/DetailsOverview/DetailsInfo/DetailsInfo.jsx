import React from "react";
import DetailsInfoTagLine from "../DetailsInfoTagLine/DetailsInfoTagLine";
import DetailsOverViewTitle from "../DetailsOverviewTitle/DetailsOverViewTitle";

function DetailsInfo({
	title,
	status,
	release_date,
	genres,
	tagline,
	overview,
	seasons,
}) {
	return (
		<div className="col details-info">
			<DetailsOverViewTitle
				title={title}
				status={status}
				release_date={release_date}
				genres={genres}
			/>
			<DetailsInfoTagLine tagline={tagline} />
			<div className="overView">
				<h3>Overview</h3>
				<p>{overview}</p>
			</div>
		</div>
	);
}

export default DetailsInfo;
