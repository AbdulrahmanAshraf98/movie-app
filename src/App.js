import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Main from "./components/Main/Main";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Preloader from "./components/preloader/Preloader";
import { setCurrentUser } from "./Store/Auth/user.actions";
import ModalContextProvider from "./Store/Context/ModalContext/ModalContextProvider";
import ThemeContextProvider from "./Store/Context/ThemeContext/ThemeContextProvider";
import { onAuthChangeListener } from "./utilities/firebase/firebase";
import "./App.css";
import { SkeletonTheme } from "react-loading-skeleton";
import Notifications from "./components/Notifications/Notifications";
function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		const unsubscribe = onAuthChangeListener((user) => {
			if (user) {
			}
			dispatch(setCurrentUser(user));
		});
		return unsubscribe;
	});

	return (
		<ThemeContextProvider>
			<SkeletonTheme
				baseColor="var(--dark-color)"
				highlightColor={"var(--secondary-color)"}>
				<ModalContextProvider>
					<Navbar />
					<Main />
					<Notifications />
					<Footer />
				</ModalContextProvider>
			</SkeletonTheme>
		</ThemeContextProvider>
	);
}

export default App;
