import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-1.png";
import logoRed from "../../assets/Logo-2.png";
import ThemeContext from "../../Store/Context/ThemeContext/ThemeContext";
import Container from "../UI/Container/Container";
import Img from "../UI/Img/Img";
import SocialIcons from "../UI/SocialIcons/SocialIcons";
import "./Footer.css";
const footerItemsData = [
	{ text: "Home", to: "/" },
	{ text: "Movies", to: "/Movies" },
	{ text: "Series", to: "/Series" },
];
const icons = [
	"fa-brands fa-facebook-f",
	"fa-brands fa-twitter",
	"fa-brands fa-instagram",
];
function Footer() {
	const themeContext = useContext(ThemeContext);
	return (
		<footer>
			<div className="footer-top">
				<Container>
					<div className="row">
						<div className="col">
							<div className="footer-logo">
								<Link to="/">
									<Img
										className="logo-img"
										src={themeContext.Theme == "blue" ? logo : logoRed}
									/>
								</Link>
							</div>
							<p>
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry.
							</p>
							<ul className="social-links">
								{icons.map((element, index) => (
									<li key={index}>
										<SocialIcons className={element} />
									</li>
								))}
							</ul>
						</div>
						<div className="col">
							<h4 className="footer-title">Explore</h4>
							<ul className="row explore-items">
								{footerItemsData.map((element, index) => (
									<li key={index}>
										<Link to={element.to}>{element.text}</Link>
									</li>
								))}
							</ul>
						</div>
						<div className="col">
							<h4 className="footer-title">Explore</h4>
							<p>
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry.
							</p>
						</div>
					</div>
				</Container>
			</div>
			<div className="footer-bottom">
				<Container>
					<div className="row">
						<p> Copyright 2021 stremlab All Rights Reserved.</p>
					</div>
				</Container>
			</div>
		</footer>
	);
}

export default Footer;
