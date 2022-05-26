import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo-1.png";
import NavbarItems from "./NavbarItems/NavbarItems";
import "./Navbar.css";
import Container from "../UI/Container/Container";
function Navbar() {
	const [mobileNavShow, setMobileNavShow] = useState(false);
	const [stickyNavbar, setStickyNavbar] = useState(false);
	const toggleVisibility = () => {
		if (window.pageYOffset > 30) {
			setStickyNavbar(true);
		} else {
			setStickyNavbar(false);
		}
	};
	const toggleNavItemshandler = (e) => {
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
							<img src={logo} />
						</NavLink>
					</div>
					<NavbarItems
						className={!mobileNavShow ? "nav-items" : "nav-items show"}
					/>
					<div className="right-side">
						<div className="row">
							<div className="search-box">
								<a>
									<i className="fa-solid fa-magnifying-glass"></i>
								</a>
							</div>
							<div className="account-box">
								<a>
									<i className="fa-solid fa-user"></i>
								</a>
							</div>

							<a className="navbar-Toggler" onClick={toggleNavItemshandler}>
								<i className="fa-solid fa-bars"></i>
							</a>
						</div>
					</div>
				</div>
			</Container>
		</nav>
	);
}

export default Navbar;
