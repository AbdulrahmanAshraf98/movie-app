import { createContext } from "react";

const AuthContext = createContext({
	UID: "",
	isLogin: false,
});

export default AuthContext;
