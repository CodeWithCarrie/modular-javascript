export function regenerateMP(currentMP, regenAmount, maxMP = 100) {
	const total = currentMP + regenAmount;
	return total > maxMP ? maxMP : total;
}
