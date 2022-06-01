import { useContext, useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import Favorite from "./pages/Favorite/Favorite";
import FavoriteContextProvider from "./Store/Context/FavoriteContext/FavoriteContextProvider";
import ModalContextProvider from "./Store/Context/ModalContext/ModalContextProvider";
import ThemeContext from "./Store/Context/ThemeContext/ThemeContext";

function App() {
	const themeContext = useContext(ThemeContext);
	useEffect(() => {}, []);
	return (
		<ModalContextProvider>
			<div
				className={`warper ${themeContext.Theme === "red" ? "red" : "blue"}`}>
				<FavoriteContextProvider>
					<Navbar></Navbar>
					<Main />
				</FavoriteContextProvider>
				<Footer></Footer>
			</div>
		</ModalContextProvider>
	);
}

export default App;
