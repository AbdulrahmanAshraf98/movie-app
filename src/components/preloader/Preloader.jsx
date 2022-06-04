import React, { useContext } from "react";
import logo from "../../assets/logo-1.png";
import logo2 from "../../assets/Logo-2.png";
import ThemeContext from "../../Store/Context/ThemeContext/ThemeContext";
import Img from "../UI/Img/Img";
import "./preloader.css";
function Preloader({ className }) {
	const themeContext = useContext(ThemeContext);

	return (
		<div className={`preloader ${className}`}>
			<Img src={themeContext.Theme === "blue" ? logo : logo2} />
		</div>
	);
}

export default Preloader;
