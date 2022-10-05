import React, { useState } from "react";
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";
import Container from "../../components/UI/Container/Container";
import "./Authentication.css";

function Authentication() {
	const [SwitchAuth, SetSwitchAuth] = useState("login");
	const SwitchAuthHandler = (e) => {
		e.preventDefault();
		if (SwitchAuth === "login") {
			SetSwitchAuth("Signup");
		} else {
			SetSwitchAuth("login");
		}
	};

	return (
		<section className="Authentication fadeIn">
			<Container>
				<div className="Auth">
					{SwitchAuth === "login" ? (
						<SignIn SwitchAuthHandler={SwitchAuthHandler} />
					) : (
						<SignUp SwitchAuthHandler={SwitchAuthHandler} />
					)}
				</div>
			</Container>
		</section>
	);
}

export default Authentication;
