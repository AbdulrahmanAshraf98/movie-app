import { useContext } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import SearchModal from "./components/SearchModal/SearchModal";
import ModalContext from "./Store/Context/ModalContext/ModalContext";
import ModalContextProvider from "./Store/Context/ModalContext/ModalContextProvider";

function App() {
	return (
		<ModalContextProvider>
			<Navbar></Navbar>
			<Main />
			<Footer></Footer>
		</ModalContextProvider>
	);
}

export default App;
