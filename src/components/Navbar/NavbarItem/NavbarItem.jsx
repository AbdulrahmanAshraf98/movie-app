import React from "react";
import { NavLink } from "react-router-dom";

function NavbarItem({ to, text }) {
	return (
		<li>
			<NavLink to={to}>{text}</NavLink>
		</li>
	);
}

export default NavbarItem;
