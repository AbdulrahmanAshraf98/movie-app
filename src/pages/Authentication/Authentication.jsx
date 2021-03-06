import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../../components/UI/Container/Container";
import Input from "../../components/UI/Input/Input";
import SectionTitle from "../../components/UI/sectionTitle/SectionTitle";
import AuthContext from "../../Store/Context/Auth/AuthContext";
import {
	registerWithEmailAndPassword,
	signInWithEmail,
} from "../../utilities/firebase/firebase";
import {
	getLocalStorage,
	localStorageIsFound,
	setLocalStorage,
} from "../../utilities/Localstorage";
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
		if (
			enteredValue.enteredEmail.trim().length === 0 &&
			enteredValue.enteredEmail.trim().length === 0
		) {
			setError({
				emailError: "You Must Entered Email",
				password: "You Must Entered Password",
				general: "",
			});
			return;
		}
		if (SwitchAuth === "login") {
			const response = await signInWithEmail(
				enteredValue.enteredEmail,
				enteredValue.enteredPassword,
			);
			if (response.error) {
				console.log(response.error);
				if (response.error === "auth/user-not-found") {
					setError({
						emailError: "user-not-found",
						password: "",
						general: "",
					});
					return;
				} else if (response.error === "auth/invalid-email") {
					setError({
						emailError: "invalid-email",
						password: "",
						general: "",
					});
				} else if (response.error === "auth/wrong-password") {
					setError({
						emailError: "",
						password: "wrong-password",
						general: "",
					});
				} else {
					setError({
						emailError: "",
						password: "",
						general: `${response.error}`,
					});
					return;
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
			const Pathname = localStorageIsFound("prevPath")
				? getLocalStorage("prevPath", "")
				: "/";
			navigate(Pathname, { replace: true });
			setLocalStorage("prevPath", "", "");
			return;
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
		<section className="Authentication fadeIn">
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
							<button className="submit">{SwitchAuth}</button>
							{/* {SwitchAuth === "login" && (
								<button className="switchAuth" onClick={SwitchAuthHandler}>
									stay login
								</button>
							)} */}

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
