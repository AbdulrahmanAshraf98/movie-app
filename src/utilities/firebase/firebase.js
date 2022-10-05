// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
} from "firebase/auth";
import {
	arrayRemove,
	arrayUnion,
	deleteField,
	doc,
	getDoc,
	getFirestore,
	setDoc,
	updateDoc,
} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_AUTH_DOMAIN,
	databaseURL: process.env.REACT_APP_DATABASE_URL,
	projectId: process.env.REACT_APP_PROJECT_ID,
	storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_APP_ID,
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

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
export const onAuthChangeListener = (callback) => onAuthStateChanged(auth, callback);
export const SignOutUser = () => signOut(auth);
export const addToFavoriteDocument = async (userAuthId, favoriteItem) => {
	if (!userAuthId) return;
	const favoriteDocRef = doc(db, "Favourite", userAuthId);
	try {
		const favoriteSnapShot = await getDoc(favoriteDocRef);
		let updatedDoc = null;
		if (!favoriteSnapShot.exists()) {
			updatedDoc = await setDoc(
				doc(db, "Favourite", userAuthId),
				{
					items: [favoriteItem],
				},
				{ merge: true },
			);
		}
		updatedDoc = await updateDoc(favoriteDocRef, {
			items: arrayUnion(favoriteItem),
		});
	} catch (error) {
		throw new Error(error);
	}

};
export const removeFavoriteDocument = async (userAuthId, favoriteItem) => {
	const favoriteDocRef = doc(db, "Favourite", userAuthId);
	const favoriteSnapShot = await getDoc(favoriteDocRef);
	if (!favoriteSnapShot.exists()) return;
	await updateDoc(favoriteDocRef, {
		items: arrayRemove(favoriteItem),
	});
	return favoriteSnapShot;
};
export const deleteFavoriteDocument = async (userAuthId) => {
	const favoriteDocRef = doc(db, "Favourite", userAuthId);

	// Remove the 'capital' field from the document
	await updateDoc(favoriteDocRef, {
		items: deleteField(),
	});
};

// export const readFavoriteDocument = async (userAuthId, callback) => {
// 	if (!userAuthId) return;
// 	const docRef = doc(db, "Favourite", userAuthId.uid);
// 	const unsubscribe = onSnapshot(docRef, (doc) => {
// 		callback();
// 	});

// 	return unsubscribe;
// };


