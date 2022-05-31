import React, { useState } from "react";
import ThemeContext from "./ThemeContext";

function ThemeContextProvider({ children }) {
	const [Theme, setTheme] = useState("blue");
	const changeThemeHandler = (Theme) => {
		console.log(Theme);
		setTheme(Theme);
	};
	const themeContext = {
		Theme: Theme,
		changeThemeHandler: changeThemeHandler,
	};

	return (
		<ThemeContext.Provider value={themeContext}>
			{children}
		</ThemeContext.Provider>
	);
}

export default ThemeContextProvider;
