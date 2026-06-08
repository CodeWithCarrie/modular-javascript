export default class Wizard {
	constructor(name) {
		this.name = name;
		this.spells = [];
	}

	learnSpell(spellName) {
		this.spells.push(spellName);
	}
}
