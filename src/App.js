import { useContext, useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";

import ModalContextProvider from "./Store/Context/ModalContext/ModalContextProvider";
import ThemeContext from "./Store/Context/ThemeContext/ThemeContext";
import ThemeContextProvider from "./Store/Context/ThemeContext/ThemeContextProvider";

function App() {
	const themeContext = useContext(ThemeContext);
	useEffect(() => {}, []);
	return (
		<ModalContextProvider>
			<div
				className={`warper ${themeContext.Theme === "red" ? "red" : "blue"}`}>
				<Navbar></Navbar>
				<Main />
				<Footer></Footer>
			</div>
		</ModalContextProvider>
	);
}

export default App;
