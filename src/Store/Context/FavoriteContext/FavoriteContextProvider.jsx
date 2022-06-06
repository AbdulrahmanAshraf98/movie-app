import { arrayUnion, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { db } from "../../../utilities/firebase/firebase";
import AuthContext from "../Auth/AuthContext";
import FavoriteContext from "./FavoriteContext";


function FavoriteContextProvider({ children }) {
	const authContext = useContext(AuthContext);
	const UserId = authContext.UID;
	const [favoriteItems, setFavoriteItems] = useState([]);
	const [buttonTrigger, setButtonTrigger] = useState(false);
	const addToFavoriteHandler = async (item) => {
		if (favoriteItems.length === 0) {
			setFavoriteItems([item]);
		} else {
			setFavoriteItems([...favoriteItems, item]);
		}

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
		setButtonTrigger(true);
		return;
	};
	const removeFromFavoriteHandler = async (id) => {
		const NewArray = favoriteItems.filter((element) => element.id !== id);
		setFavoriteItems(NewArray);
		const docRef = doc(db, "Favourite", UserId);
		const docSnap = await getDoc(docRef);
		if (!docSnap.exists()) {
			return;
		}

		await updateDoc(docRef, {
			items: NewArray,
		});
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
		if (UserId) {
			const docRef = doc(db, "Favourite", UserId);
			const docSnap = await getDoc(docRef);
			if (docSnap.exists()) {
				const data = docSnap.data();
				setFavoriteItems(data.items);
			}
			return;
		}

		return;
	};
	const getFavoriteItems = () => {
		return favoriteItems;
	};
	useEffect(() => {
		if (!favoriteItems || buttonTrigger) {
			getFavoriteData();
		}

		return () => {
			setButtonTrigger(false);
		};

		// console.log(favoriteItems);
	}, [favoriteItems, buttonTrigger]);
	useEffect(() => {
		if (UserId !== "") {
			getFavoriteData();
		}
	}, []);
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
