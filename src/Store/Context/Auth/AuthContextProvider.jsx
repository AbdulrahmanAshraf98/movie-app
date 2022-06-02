import React, { useState } from "react";
import AuthContext from "./AuthContext";

function AuthContextProvider({ children }) {
	const [UID, setUID] = useState("");
	const [isLogin, setIsLogin] = useState(false);
	const SetUIDHandler = (UID) => {
		setUID(UID);
	};
	const SetIsLoginHandler = () => {
		setIsLogin(true);
	};

	const logoutHandler = () => {
		setIsLogin(false);
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
