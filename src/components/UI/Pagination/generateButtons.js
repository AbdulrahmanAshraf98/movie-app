const generateButtons = (start, length) => {
	let array = [];
	for (let i = start; i < length; i++) {
		array.push(i + 1);
	}
	return array;
};

export default generateButtons;
