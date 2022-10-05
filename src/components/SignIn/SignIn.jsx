import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmail } from "../../utilities/firebase/firebase";
import {
	getLocalStorage,
	localStorageIsFound,
	setLocalStorage,
} from "../../utilities/Localstorage";
import Input from "../UI/Input/Input";
import SectionTitle from "../UI/sectionTitle/SectionTitle";

const SignIn = ({ SwitchAuthHandler }) => {
	const navigate = useNavigate();
	const emailRef = useRef();
	const passwordRef = useRef();
	const [error, setError] = useState({
		emailError: "",
		password: "",
		general: "",
	});
	const onSubmitHandler = async (event) => {
		event.preventDefault();
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
		const response = await signInWithEmail(
			enteredValue.enteredEmail,
			enteredValue.enteredPassword,
		);
		if (response.error) {
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

		const Pathname = localStorageIsFound("prevPath")
			? getLocalStorage("prevPath", "")
			: "/";
		navigate(Pathname, { replace: true });
		setLocalStorage("prevPath", "", "");
		return;
	};
	return (
		<>
			<SectionTitle>login</SectionTitle>
			<form onSubmit={onSubmitHandler} noValidate className="fade">
				<Input id="Email" label="Email" type="email" ref={emailRef} />
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
					<button className="submit" type="submit">
						Login
					</button>
					<button className="switchAuth" onClick={SwitchAuthHandler}>
						signUp
					</button>
				</div>
			</form>
		</>
	);
};

export default SignIn;
