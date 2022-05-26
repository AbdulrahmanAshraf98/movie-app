import SeriesList from "../../components/SeriesList/SeriesList";
import Container from "../../components/UI/Container/Container";
import "./Series.css";
function Series() {
	return (
		<section className="Series">
			<Container>
				<div className="row">
					<SeriesList />
				</div>
			</Container>
		</section>
	);
}

export default Series;
