/**** POLYMORPHISM ****/

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

// DEMO: Create a Warrior class that inherits from GameCharacter
// Override the performAction() method to return a different result

// DEMO: Create a Wizard class that inherits from GameCharacter
// Override the performAction() method to return a different result

// DEMO: Assemble a collection of completely different class instances

console.log("--- THE BATTLE BEGINS ---");

// DEMO: Iterate over the array and have each character perform their action

/* 
    Follow up with additional exercises after demo for hands-on practice 
    with problem-solving and coding!
*/
