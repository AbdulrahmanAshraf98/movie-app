import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectCurrentUser } from "../../../Store/Auth/user.selector";
import { SignOutUser } from "../../../utilities/firebase/firebase";
import NavbarItem from "../NavbarItem/NavbarItem";
const navbarItemsData = [
	{ text: "Home", to: "/" },
	{ text: "Movies", to: "/Movies" },
	{ text: "Series", to: "/Series" },
];
const NavbarItems = ({ className, closeNavbarHandler }) => {
	const currentUser = useSelector(selectCurrentUser);
	return (
		<div className={className}>
			<ul>
				{navbarItemsData.map((element, index) => (
					<NavbarItem
						key={index}
						to={element.to}
						text={element.text}
						closeNavbarHandler={closeNavbarHandler}
					/>
				))}
				{currentUser && (
					<>
						<NavbarItem
							key={4}
							to={"/Favorite"}
							text={"Favorite"}
							closeNavbarHandler={closeNavbarHandler}
						/>
						<Link
							to={"/"}
							onClick={(e) => {
								e.preventDefault();
								SignOutUser();
								closeNavbarHandler();
							}}>
							logout
						</Link>
					</>
				)}
				{!currentUser && <NavbarItem key={4} to={"/Auth"} text={"LogIn"} />}
			</ul>
		</div>
	);
};
export default NavbarItems;
