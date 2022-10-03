import React, { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Main from "./components/Main/Main";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Preloader from "./components/preloader/Preloader";
import { setCurrentUser } from "./Store/Auth/user.actions";
import { selectCurrentUser } from "./Store/Auth/user.selector";
import ModalContextProvider from "./Store/Context/ModalContext/ModalContextProvider";
import ThemeContextProvider from "./Store/Context/ThemeContext/ThemeContextProvider";
import { onAuthChangeListener } from "./utilities/firebase/firebase";
import "./App.css";

function App() {
	const dispatch = useDispatch();
	const currentUser = useSelector(selectCurrentUser);
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
			<ModalContextProvider>
				<Navbar />
				<Main />
				<Footer />
			</ModalContextProvider>
		</ThemeContextProvider>
	);
}

export default App;
