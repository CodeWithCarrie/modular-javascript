/**** CLASS METHODS: SOLUTION ****/

/*
    Up until now, your game characters have only held passive data 
    (like names and health numbers). To make a game interactive, your 
    characters need the ability to perform actions—like sprinting, 
    casting spells, or drinking a potion. We handle actions by attaching 
    functions to our classes, known as Methods.

    You can attach actions to a class in two completely different ways, 
    and choosing the right one is critical for keeping your game fast and 
    lag-free:
        - Inside the Constructor (The Heavy Duplicate): If you attach a function 
        inside the constructor using this.attack = () => {}, JavaScript 
        completely duplicates that entire function body in memory for every 
        single player you create. If you have 10,000 players on a screen, you 
        waste memory on 10,000 identical copies of the same action.
        - Below the Constructor (The Shared Class Method): By writing the action 
        as a standard method outside the constructor block, JavaScript places 
        a single copy of that function on a shared structural template. No 
        matter how many thousands of players are spawned, they all quietly 
        share the exact same function block, making your code incredibly 
        memory efficient.
*/

/** EXAMPLE 1 - RECONSTRUCTING ACTIONS THE RIGHT WAY **/

class Wizard {
	constructor(wizardName, startingMagic = 50) {
		this.name = wizardName;
		this.magicPoints = startingMagic;

		// AVOID THIS FOR ACTIONS: This duplicates memory space for every instance
		this.badRestMethod = () => {
			this.magicPoints += 10;
		};
	}

	// RECOMMENDED METHOD SYNTAX: Written cleanly below the constructor block.
	// Every instance shares this single blueprint function automatically.
	castSpell(spellName, cost) {
		if (this.magicPoints >= cost) {
			this.magicPoints -= cost;
			return `${this.name} casts ${spellName}! Magic remaining: ${this.magicPoints}.`;
		} else {
			return `${this.name} does not have enough magic to cast ${spellName}!`;
		}
	}
}

/** EXAMPLE 2 - RUNNING REUSABLE ACTIONS **/
const player1 = new Wizard("Merlin", 60);
const player2 = new Wizard("Gandalf", 15);

// Both characters execute the exact same shared background logic perfectly
console.log(player1.castSpell("Fireball", 40));
console.log(player2.castSpell("Lightning Bolt", 30));
