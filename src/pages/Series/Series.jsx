import { useContext } from "react";
import SearchModal from "../../components/SearchModal/SearchModal";
import SeriesList from "../../components/SeriesList/SeriesList";
import Container from "../../components/UI/Container/Container";
import ModalContext from "../../Store/Context/ModalContext/ModalContext";
import "./Series.css";
function Series() {
	const context = useContext(ModalContext);
	return (
		<>
			{context.SearchModuleIsOpen && <SearchModal type="tv" />}
			{!context.SearchModuleIsOpen && (
				<section className="Series">
					<Container>
						<div className="row">
							<SeriesList />
						</div>
					</Container>
				</section>
			)}
		</>
	);
}

export default Series;
