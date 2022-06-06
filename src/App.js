import { useContext, useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import Preloader from "./components/preloader/Preloader";
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
		}, 800);
	}, [loading]);
	return (
		<AuthContextProvider>
			<ModalContextProvider>
				{loading && <Preloader className={``} />}
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
