import { arrayUnion, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import React, { useContext, useEffect, useReducer, useState } from "react";
import { db } from "../../../utilities/firebase/firebase";
import favoriteReducer from "../../Reducer/FavourtieReducer";
import AuthContext from "../Auth/AuthContext";
import FavoriteContext from "./FavoriteContext";

function FavoriteContextProvider({ children }) {
	const authContext = useContext(AuthContext);
	const UserId = authContext.UID;
	// const [favoriteItems, setFavoriteItems] = useState([]);
	const [favoriteItems, dispatchFavoriteItems] = useReducer(
		favoriteReducer,
		[],
	);
	const [isLoading, setIsLoading] = useState(true);
	const addToFavoriteHandler = async (item) => {
		dispatchFavoriteItems({ type: "ADD-ITEM", payload: item });
		const docRef = doc(db, "Favourite", UserId);
		const docSnap = await getDoc(docRef);
		if (!docSnap.exists()) {
			await setDoc(
				doc(db, "Favourite", UserId),
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
		return;
	};
	const removeFromFavoriteHandler = async (id) => {
		const newArray = favoriteItems.filter((element) => element.id !== id);
		dispatchFavoriteItems({ type: "SET-ITEMS", payload: newArray });
		const docRef = doc(db, "Favourite", UserId);
		const docSnap = await getDoc(docRef);
		if (!docSnap.exists()) {
			return;
		}
		await updateDoc(docRef, {
			items: newArray,
		});

		return;
	};
	const foundItem = (id) => {
		if (!favoriteItems) {
			return;
		}
		const foundItem = favoriteItems.find(
			(favoriteItem) => id === favoriteItem.id,
		);
		if (foundItem) {
			return true;
		}
		return false;
	};
	const getFavoriteData = async () => {
		if (UserId) {
			const docRef = doc(db, "Favourite", UserId);
			const docSnap = await getDoc(docRef);
			if (docSnap.exists()) {
				const data = docSnap.data();
				dispatchFavoriteItems({ type: "SET-ITEMS", payload: data.items });
				setIsLoading(false);
			}
			setIsLoading(false);
			return;
		}
		setIsLoading(false);
		return;
	};
	const getFavoriteItems = () => {
		return favoriteItems;
	};
	useEffect(() => {
		getFavoriteData();
	}, []);

	const favoriteContext = {
		favoriteItems,
		addToFavoriteHandler,
		removeFromFavoriteHandler,
		foundItem,
		getFavoriteData,
		getFavoriteItems,
		isLoading,
	};
	return (
		<FavoriteContext.Provider value={favoriteContext}>
			{children}
		</FavoriteContext.Provider>
	);
}

export default FavoriteContextProvider;
