import { createContext } from "react";

const AuthContext = createContext({
	UID: "",
	isLogin: false,
	SetUIDHandler: () => {},
	SetIsLoginHandler: () => {},
	logoutHandler: () => {},
});

export default AuthContext;
