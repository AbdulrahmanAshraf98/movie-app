import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/logo-1.png";
import logoRed from "../../assets/Logo-2.png";
import NavbarItems from "./NavbarItems/NavbarItems";
import "./Navbar.css";
import Container from "../UI/Container/Container";
import Img from "../UI/Img/Img";
import ThemeContext from "../../Store/Context/ThemeContext/ThemeContext";

function Navbar() {
	let location = useLocation();
	const themeContext = useContext(ThemeContext);
	const [mobileNavShow, setMobileNavShow] = useState(false);
	const [stickyNavbar, setStickyNavbar] = useState(false);
	const toggleVisibility = () => {
		if (window.pageYOffset > 30) {
			setStickyNavbar(true);
		} else {
			setStickyNavbar(false);
		}
	};
	const closeNavbarHandler = () => {
		setMobileNavShow(false);
	};
	const toggleNavBar = (e) => {
		e.preventDefault();
		setMobileNavShow(!mobileNavShow);
	};
	useEffect(() => {
		window.addEventListener("scroll", toggleVisibility);
		return () => {
			window.removeEventListener("scroll", toggleVisibility);
		};
	}, [setStickyNavbar]);
	return (
		<nav className={stickyNavbar ? "sticky" : ""}>
			<Container>
				<div className="row">
					<div className="left-side">
						<NavLink to="/" className="logo">
							<Img
								className="logo-img"
								src={themeContext.theme === "blue" ? logo : logoRed}
							/>
						</NavLink>
					</div>
					<NavbarItems
						className={!mobileNavShow ? "nav-items" : "nav-items show"}
						closeNavbarHandler={closeNavbarHandler}
					/>
					<div className="right-side">
						<div className="row">
							{location.pathname === "/Movies" ||
							location.pathname === "/Series" ? (
								<div className="search-box">
									<Link to={"/search"}>
										<i className="fa-solid fa-magnifying-glass"></i>
									</Link>
								</div>
							) : (
								""
							)}
							<div className="ChangeTheme">
								<select
									onChange={(e) => {
										themeContext.changeThemeHandler(e.target.value);
									}}
									value={themeContext.theme}>
									<option>blue</option>
									<option>red</option>
								</select>
							</div>

							<a className="navbar-Toggler" onClick={toggleNavBar}>
								{!mobileNavShow && <i className="fa-solid fa-bars"></i>}
								{mobileNavShow && <i class="fas fa-times"></i>}
							</a>
						</div>
					</div>
				</div>
			</Container>
		</nav>
	);
}

export default Navbar;
