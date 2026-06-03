/*
    Make this Warrior class blueprint available to other files.
*/
export default class Warrior {
	constructor(name) {
		this.name = name;
		this.stance = "Defensive";
	}

	switchStance() {
		this.stance = this.stance === "Aggressive" ? "Defensive" : "Aggressive";
		return `${this.name} shifts into an ${this.stance} stance.`;
	}
}
