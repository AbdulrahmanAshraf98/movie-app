import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../../Store/Context/Auth/AuthContext";
import { SignOutUser } from "../../../utilities/firebase/firebase";
import NavbarItem from "../NavbarItem/NavbarItem";
const navbarItemsData = [
	{ text: "Home", to: "/" },
	{ text: "Movies", to: "/Movies" },
	{ text: "Series", to: "/Series" },
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
					<>
						<NavbarItem key={4} to={"/Favorite"} text={"Favorite"} />
						<Link
							to={"/"}
							onClick={(e) => {
								e.preventDefault();
								SignOutUser();
								authContext.logoutHandler();
							}}>
							logout
						</Link>
					</>
				)}
				{!authContext.isLogin && (
					<NavbarItem key={4} to={"/Auth"} text={"LogIn"} />
				)}

				{}
			</ul>
		</div>
	);
};
export default NavbarItems;
