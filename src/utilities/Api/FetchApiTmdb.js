const baseUrl = "https://api.themoviedb.org/3";

export const fetchFromTmdbApi = async (url) => {
	try {
		const response = await fetch(
			`${baseUrl}/${url}&api_key=${process.env.REACT_APP_TMDB_API_KEY}`,
		);
		if (response.ok) {
			const responseDate = await response.json();
			return responseDate;
		}
		
	
	} catch (error) {
		throw new Error(error);
	}
};
