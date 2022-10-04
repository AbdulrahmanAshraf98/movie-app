import React from "react";
import { NavLink } from "react-router-dom";

function NavbarItem({ to, text, closeNavbarHandler }) {
	return (
		<li>
			<NavLink to={to} onClick={closeNavbarHandler}>
				{text}
			</NavLink>
		</li>
	);
}

export default NavbarItem;
