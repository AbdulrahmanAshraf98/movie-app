import "./App.css";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import Modal from "./components/UI/Modal/Modal";

function App() {
	return (
		<>
			<Navbar></Navbar>
			<Main />
			<Footer></Footer>
		</>
	);
}

export default App;
