// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
	createUserWithEmailAndPassword,
	getAuth,
	signInWithEmailAndPassword,
	signOut,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBr2_2Q77XsByGHoU__4v4kQYcDeysB8Jw",
	authDomain: "movie-app-99180.firebaseapp.com",
	databaseURL: "https://movie-app-99180-default-rtdb.firebaseio.com",
	projectId: "movie-app-99180",
	storageBucket: "movie-app-99180.appspot.com",
	messagingSenderId: "99775019986",
	appId: "1:99775019986:web:3718ae83a08a1000dae60b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export const registerWithEmailAndPassword = async (email, password) => {
	let result = {
		user: "",
		error: "",
	};
	try {
		const user = await createUserWithEmailAndPassword(auth, email, password);
		result.user = user;
	} catch (error) {
		result.error = error.code;
	}
	return result;
};
export const signInWithEmail = async (email, password) => {
	let result = {
		user: "",
		error: null,
	};
	try {
		const userCredential = await signInWithEmailAndPassword(
			auth,
			email,
			password,
		);
		result.user = userCredential.user;
	} catch (error) {
		result.error = error.code;
	}
	return result;
};
export const SignOutUser = () => signOut(auth);
