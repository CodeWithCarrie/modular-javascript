export default class Warrior {
	constructor(name) {
		this.name = name;
		this.health = 100;
		this.stance = "Defensive";
	}
	takeDamage(amount) {
		this.health -= amount;
	}
	switchStance() {
		this.stance = "Aggressive";
	}
}
