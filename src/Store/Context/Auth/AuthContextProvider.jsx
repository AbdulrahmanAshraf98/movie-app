import React, { useState } from "react";
import {
	getLocalStorage,
	localStorageIsFound,
	removeItemFromLocalStorage,
	setLocalStorage,
} from "../../../utilities/Localstorage";
import AuthContext from "./AuthContext";

function AuthContextProvider({ children }) {
	const defaultUID = localStorageIsFound("UID")
		? getLocalStorage("UID", "")
		: "";
	const defaultIsLogin = defaultUID !== "" && true;
	const [UID, setUID] = useState(defaultUID);
	const [isLogin, setIsLogin] = useState(defaultIsLogin);
	const SetUIDHandler = (UID) => {
		setUID(UID);
		setLocalStorage("UID", UID, "");
	};
	const SetIsLoginHandler = () => {
		setIsLogin(true);
	};

	const logoutHandler = () => {
		setIsLogin(false);
		setUID("");
		removeItemFromLocalStorage("UID");
	};
	const authContext = {
		UID,
		isLogin,
		SetUIDHandler: SetUIDHandler,
		SetIsLoginHandler: SetIsLoginHandler,
		logoutHandler: logoutHandler,
	};
	return (
		<AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
	);
}

export default AuthContextProvider;
