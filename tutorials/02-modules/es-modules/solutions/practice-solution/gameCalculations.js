/*
    Add the modern ES Module export keywords to expose the 
    variable and function below to the rest of the application.
*/
export const scoreMultiplier = 2;

export function doubleScore(currentScore) {
	return currentScore * scoreMultiplier;
}
