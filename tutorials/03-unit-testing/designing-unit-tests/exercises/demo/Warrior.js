export default class Warrior {
	constructor(name) {
		this.name = name;
		this.health = 100;
		this.stance = "Defensive";
	}

	takeDamage(amount) {
		this.health -= amount;
	}

    // Refactored to handle changing back
	switchStance() {
		this.stance = this.stance === "Defensive" ? "Aggressive" : "Defensive";
	}
}
