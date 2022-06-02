import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../../components/UI/Container/Container";
import Input from "../../components/UI/Input/Input";
import SectionTitle from "../../components/UI/sectionTitle/SectionTitle";
import AuthContext from "../../Store/Context/Auth/AuthContext";
import {
	auth,
	registerWithEmailAndPassword,
	signInWithEmail,
} from "../../utilities/firebase/firebase";
import "./Authentication.css";

function Authentication() {
	const authContext = useContext(AuthContext);
	const navigate = useNavigate();
	const emailRef = useRef();
	const passwordRef = useRef();
	const [SwitchAuth, SetSwitchAuth] = useState("login");
	const [error, setError] = useState({
		emailError: "",
		password: "",
		general: "",
	});
	let login = null;
	const SwitchAuthHandler = (e) => {
		e.preventDefault();
		if (SwitchAuth === "login") {
			SetSwitchAuth("Signup");
		} else {
			SetSwitchAuth("login");
		}
	};
	const onSubmitHandler = async (e) => {
		e.preventDefault();
		const enteredValue = {
			enteredEmail: emailRef.current.value,
			enteredPassword: passwordRef.current.value,
		};
		if (SwitchAuth == "login") {
			const response = await signInWithEmail(
				enteredValue.enteredEmail,
				enteredValue.enteredPassword,
			);
			if (response.error) {
				if (response.error === "auth/invalid-email") {
					setError({ emailError: "invalid-email", password: "", general: "" });
				} else if (response.error === "auth/wrong-password") {
					setError({ emailError: "", password: "wrong-password", general: "" });
				} else {
					setError({
						emailError: "",
						password: "",
						general: `${response.error}`,
					});
				}
				return;
			}
			setError({
				emailError: "",
				password: "",
				general: "",
			});

			authContext.SetUIDHandler(`${response.user.uid}`);
			authContext.SetIsLoginHandler();
			navigate("/");
			console.log(response.user.uid, authContext.UID, authContext.isLogin);
		} else {
			const response = await registerWithEmailAndPassword(
				enteredValue.enteredEmail,
				enteredValue.enteredPassword,
			);
			if (response.error) {
				console.log(response.error);
				if (response.error === "auth/email-already-in-use") {
					setError({
						emailError: "email-already-in-use",
						password: "",
						general: "",
					});
					return;
				} else if (response.error === "auth/weak-password") {
					setError({ emailError: "", password: "weak-password", general: "" });
					return;
				} else if (response.error === "auth/invalid-email") {
					setError({ emailError: "invalid-email", password: "", general: "" });
					return;
				}
			}
			setError({
				emailError: "",
				password: "",
				general: "",
			});
			SetSwitchAuth("login");
		}
	};
	// useEffect(() => {}, [SwitchAuth, error]);

	return (
		<section className="Authentication">
			<Container>
				<div className="Auth">
					<SectionTitle>{SwitchAuth}</SectionTitle>
					<form onSubmit={onSubmitHandler} noValidate>
						<Input id="Email" label="Username" type="email" ref={emailRef} />
						{error && error.emailError && (
							<div class="Invalid-feedback">
								<p>{error.emailError}</p>
							</div>
						)}
						<Input
							id="Password"
							label="Password"
							type="password"
							ref={passwordRef}
						/>
						{error && error.password && (
							<div className="Invalid-feedback">
								<p>{error.password}</p>
							</div>
						)}
						<div className="button-group">
							<button className="submit">submit</button>
							<button className="switchAuth" onClick={SwitchAuthHandler}>
								{SwitchAuth === "login" ? "Sign Up" : "Log In"}
							</button>
						</div>
					</form>
				</div>
			</Container>
		</section>
	);
}

export default Authentication;
