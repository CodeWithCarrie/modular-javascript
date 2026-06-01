/**** ADVANCED PROPERTIES & DEFAULT VALUES: SOLUTION ****/

/*
    When creating game characters or items, you don't always want to force 
    the developer to pass in every single piece of information. For instance, 
    every brand-new player should start at Level 1, with 0 experience points, 
    and a status of being alive. Passing those numbers in every single time 
    is repetitive and leaves room for bugs.

    To solve this, JavaScript allows you to build classes with two types of 
    automated properties:

    Hardcoded Defaults: Properties that are hardcoded directly inside the 
    constructor. They don't accept parameters because every single instance 
    starts with the exact same initial value (e.g., this.level = 1;).

    Optional Parameter Defaults: Parameters that use an equals sign (=) 
    directly in the constructor's argument list. If a value is provided when 
    creating the object, the class uses it. If it is omitted, the class 
    automatically falls back to a safe default value you chose.
*/

/** EXAMPLE 1 - THE LEVEL ONE BLUEPRINT **/

class Player {
	// We make 'weapon' optional by giving it a default string value using '='
	constructor(playerName, weapon = "Wooden Staff") {
		this.name = playerName;
		this.weapon = weapon;

		// Hardcoded properties: No parameters needed.
		// Every player starts identically here.
		this.level = 1;
		this.isAlive = true;
	}
}

/** EXAMPLE 2 - COMPARING THE INSTANCES **/

// Player 1: We pass both arguments explicitly
const warrior = new Player("Arthur", "Iron Sword");

// Player 2: We omit the second argument entirely
const wizard = new Player("Merlin");

console.log(`${warrior.name} enters the match carrying an ${warrior.weapon}!`);
console.log(`Current Status: Level ${warrior.level}.`);

console.log(`\n${wizard.name} enters the match carrying a ${wizard.weapon}!`);
console.log(`Current Status: Level ${wizard.level}.`);
