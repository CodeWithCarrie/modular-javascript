/**** POLYMORPHISM: SOLUTION ****/

/*
    Polymorphism comes from Greek words meaning "many forms." In 
    programming, it represents the ability for completely different 
    classes to share the exact same method name, but execute their 
    own unique versions of that action behind the scenes.

    You implement polymorphism through two core structural techniques:
        - Method Overriding (Custom Adaptation): When a child class 
        inherits a method from a parent, it doesn't have to use it 
        exactly as written. If the child re-declares the exact same 
        method name inside its own definition, the child's custom code 
        overrides and replaces the parent's default behavior.
        - Interface Unity (The Master Collection Loop): Because 
        different specialized classes (like Warrior, Wizard, and 
        Healer) all share the same baseline structural roots, you can 
        group them together into a single, mixed array. You can then 
        loop through that array and confidently call the same method 
        name on every object, watching each character execute its own 
        custom behavior automatically without needing complex 
        conditional checks.
*/

/** EXAMPLE 1 - OVERRIDING THE PARENT ACTION **/

class GameCharacter {
	constructor(characterName) {
		this.name = characterName;
	}

	// Default action baseline
	performAction() {
		return `${this.name} stands ready for battle.`;
	}
}

class Warrior extends GameCharacter {
	// METHOD OVERRIDE: We use the exact same name to replace parent logic
	performAction() {
		return `${this.name} swings a massive iron sword!`;
	}
}

class Wizard extends GameCharacter {
	// METHOD OVERRIDE: Custom adaptation for the Wizard
	performAction() {
		return `${this.name} summons a crackling ball of blue magic!`;
	}
}

/** EXAMPLE 2 - THE POLYMORPHIC MASTER LOOP **/

// We assemble a collection of completely different class instances into one array
const activeCombatTeam = [
	new Warrior("Arthur"),
	new Wizard("Merlin"),
	new GameCharacter("Standard Guard"), // Uses default parent action
];

console.log("--- THE BATTLE BEGINS ---");

// Polymorphism in action: One simple loop, different automatic outputs!
activeCombatTeam.forEach(character => {
	// The computer dynamically checks the true type and runs the correct method
	console.log(character.performAction());
});
