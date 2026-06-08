// Pure utility functions used across our character modules
// DEMO: Go to tests/partyUtils to write tests

export function calculateCombinedPower(warriorAtk, wizardAtk) {
	return warriorAtk + wizardAtk;
}

export function getStarterSpells() {
	return ["Fireball", "Heal Shield"];
}
