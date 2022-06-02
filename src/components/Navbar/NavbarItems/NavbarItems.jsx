import { useContext } from "react";
import AuthContext from "../../../Store/Context/Auth/AuthContext";
import NavbarItem from "../NavbarItem/NavbarItem";
const navbarItemsData = [
	{ text: "Home", to: "/" },
	{ text: "Movies", to: "/Movies" },
	{ text: "Series", to: "/Series" },
	{ text: "LogIn", to: "/Auth" },
];
const NavbarItems = ({ className }) => {
	const authContext = useContext(AuthContext);
	return (
		<div className={className}>
			<ul>
				{navbarItemsData.map((element, index) => (
					<NavbarItem key={index} to={element.to} text={element.text} />
				))}
				{authContext.isLogin && (
					<NavbarItem key={4} to={"Favorite"} text={"Favorite"} />
				)}
			</ul>
		</div>
	);
};
export default NavbarItems;
