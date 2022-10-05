import React, { useRef, useState } from "react";
import { registerWithEmailAndPassword } from "../../utilities/firebase/firebase";
import Input from "../UI/Input/Input";
import SectionTitle from "../UI/sectionTitle/SectionTitle";

const SignUp = ({ SwitchAuthHandler }) => {
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
		const response = await registerWithEmailAndPassword(
			enteredValue.enteredEmail,
			enteredValue.enteredPassword,
		);
		if (response.error) {
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
	};
	return (
		<>
			<SectionTitle>Signup</SectionTitle>
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
						Signup
					</button>
					<button className="switchAuth" onClick={SwitchAuthHandler}>
						SignIn
					</button>
				</div>
			</form>
		</>
	);
};

export default SignUp;
