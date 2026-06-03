// A simple reusable utility function
export function getRandominRange(max, min = 0) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
