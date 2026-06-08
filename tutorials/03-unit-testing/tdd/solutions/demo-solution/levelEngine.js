// We write just enough code to make that exact test block pass successfully!
// export function checkLevelUp(character, targetXP) {
//     if (character.xp >= targetXP) {
//         return true;
//     }
//     return false;
// }

// Refactoring the application code to handle metrics transformation safely
export function checkLevelUp(character, targetXP) {
	if (character.xp >= targetXP) {
		character.xp -= targetXP; // Consume the spent XP safely
		character.level += 1; // Advance player rank
		return true;
	}
	return false;
}
