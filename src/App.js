import { useContext, useEffect, useState } from "react";
import * as ReactDOM from "react-dom";

import "./App.css";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import Preloader from "./components/preloader/Preloader";
import LoadingSpinner from "./components/UI/LoadingSpinner/LoadingSpinner";
import Favorite from "./pages/Favorite/Favorite";
import AuthContextProvider from "./Store/Context/Auth/AuthContextProvider";
import FavoriteContextProvider from "./Store/Context/FavoriteContext/FavoriteContextProvider";
import ModalContextProvider from "./Store/Context/ModalContext/ModalContextProvider";
import ThemeContext from "./Store/Context/ThemeContext/ThemeContext";

function App() {
	const themeContext = useContext(ThemeContext);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
			console.log("a");
		}, 500);
	}, []);
	return (
		<AuthContextProvider>
			<ModalContextProvider>
				{loading && <Preloader />}
				<div
					className={`warper ${themeContext.Theme === "red" ? "red" : "blue"}`}>
					<Navbar></Navbar>
					<FavoriteContextProvider>
						<Main />
					</FavoriteContextProvider>
					<Footer></Footer>
				</div>
			</ModalContextProvider>
		</AuthContextProvider>
	);
}

export default App;
