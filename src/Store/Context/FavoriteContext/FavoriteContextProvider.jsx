import { arrayUnion, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { db } from "../../../utilities/firebase/firebase";
import AuthContext from "../Auth/AuthContext";
import FavoriteContext from "./FavoriteContext";

let initialState = [];

function FavoriteContextProvider({ children }) {
	const authContext = useContext(AuthContext);
	const [favoriteItems, setfavoriteItems] = useState([]);
	const [buttonTraguer, setButtonTraguer] = useState(false);

	const addToFavoriteHandler = async (item) => {
		const docRef = doc(db, "Favourite", authContext.UID);
		const docSnap = await getDoc(docRef);
		if (!docSnap.exists()) {
			await setDoc(
				doc(db, "Favourite", authContext.UID),
				{
					items: [item],
				},
				{ merge: true },
			);
			return;
		}
		await updateDoc(docRef, {
			items: arrayUnion(item),
		});
		setButtonTraguer(true);
		return;
	};
	const removeFromFavoriteHandler = async (id) => {
		// dispatchFavoriteItems({ type: "REMOVE-ITEM", payload: id });
		const NewArray = favoriteItems.filter((element) => element.id !== id);

		const docRef = doc(db, "Favourite", authContext.UID);
		const docSnap = await getDoc(docRef);
		if (!docSnap.exists()) {
			return;
		}
		await updateDoc(docRef, {
			items: NewArray,
		});
		setButtonTraguer(true);
		return;
	};
	const foundItem = (id) => {
		const foundItem = favoriteItems.find(
			(favoriteItem) => id === favoriteItem.id,
		);
		if (foundItem) {
			return true;
		}

		return false;
	};
	const getFavoriteData = async () => {
		if (authContext.UID) {
			const docRef = doc(db, "Favourite", authContext.UID);
			const docSnap = await getDoc(docRef);
			if (docSnap.exists()) {
				const data = docSnap.data();
				setfavoriteItems(data.items);
			}
			return;
		}

		return;
	};
	const getFavoriteItems = () => {
		return favoriteItems;
	};
	useEffect(() => {
		if (!favoriteItems || buttonTraguer) {
			getFavoriteData();
		}
		return () => {
			setButtonTraguer(false);
		};

		// console.log(favoriteItems);
	}, [favoriteItems, buttonTraguer]);
	const favoriteContext = {
		favoriteItems,
		addToFavoriteHandler,
		removeFromFavoriteHandler,
		foundItem,
		getFavoriteData,
		getFavoriteItems,
	};
	return (
		<FavoriteContext.Provider value={favoriteContext}>
			{children}
		</FavoriteContext.Provider>
	);
}

export default FavoriteContextProvider;
