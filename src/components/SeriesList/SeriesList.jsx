import SeriesListItem from "./SeriesListItem/SeriesListItem";

function SeriesList({ series }) {
	return series.map((element) => {
		return <SeriesListItem key={element.id} series={element} />;
	});
}

export default SeriesList;
