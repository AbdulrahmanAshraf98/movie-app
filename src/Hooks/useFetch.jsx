import { useEffect, useState, useCallback } from "react";
const useFetch = (url) => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	const fetchData = useCallback(async () => {
		try {
			const response = await fetch(url);
			if (!response.ok) {
				throw new Error("Error");
			}
			const responseData = await response.json();
			setData(responseData);
			setIsLoading((prevState) => {
				return false;
			});
		} catch (e) {
			setIsLoading((prevState) => false);
			setError(e.message);
		}
	}, [url]);
	useEffect(() => {
		fetchData();
	}, [fetchData]);
	return [data, isLoading, error];
};
export default useFetch;
