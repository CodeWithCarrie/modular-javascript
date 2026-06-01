/**** CLASSES & CONSTRUCTORS: SOLUTION ****/

/*
    Think of a Class as a master blueprint or a factory mold for creating 
    game assets. It doesn't represent a specific character on the screen; 
    instead, it defines the structure that every character created from it 
    must have.

    The Class Syntax: We use the class keyword followed by a capitalized 
    name (e.g., class Player). Inside, we use a special method called the 
    constructor.

    The Constructor Function: The constructor is the initialization engine. 
    It runs automatically only once—the exact moment a new character is born.

    The this Keyword: Inside the constructor, this acts as a placeholder 
    representing the specific, individual character currently being 
    manufactured. We use it to assign incoming characteristics directly to 
    that character profile.

    Instantiation (new): To actually build a real character from our 
    blueprint, we use the new keyword. This creates an Instance (a distinct 
    object containing its own separate pool of data).
*/

/** EXAMPLE 1 - THE CHARACTER BLUEPRINT **/

// These objects have identical structure. What if we had a blueprint to create
// them instead of having to be careful to code them the same way?
const arthur = {
	name: "Arthur",
	health: 100,
};
const merlin = {
	name: "Merlin",
	health: 80,
};

// This class definition ensures the same structure will be used automatically
class GameCharacter {
	// The constructor captures incoming data the moment 'new' is called
	constructor(characterName, initialHealth) {
		// 'this' binds these properties to the specific instance being created
		this.name = characterName;
		this.health = initialHealth;
	}
}

/** EXAMPLE 2 - CREATING SEPARATE INSTANCES **/

// We use the 'new' keyword to instantiate two completely unique players
const player1 = new GameCharacter("Arthur", 100);
const player2 = new GameCharacter("Merlin", 80);

// Viewing the literal representation of each object in the console shows
// they aren't just regular objects, but instances of the same class!
console.log(player1);
console.log(player2);

// Both objects share the same structural keys, but hold entirely separate data values
console.log(`\n--- ACTIVE GAME CHARACTERS ---`);
console.log(`Player 1 Loaded: Name is ${player1.name}, starting health is ${player1.health}.`);
console.log(`Player 2 Loaded: Name is ${player2.name}, starting health is ${player2.health}.`);

// Proving they are completely independent memory instances:
console.log(`\n--- COMBAT ACTION SEQUENCE ---`);
player1.health -= 10;
console.log(`${player1.name} took damage! Health dropped to: ${player1.health}`);
console.log(`${player2.name} remains safely untouched at: ${player2.health}`);
