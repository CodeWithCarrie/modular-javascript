/**** ADVANCED PROPERTIES & DEFAULT VALUES: PRACTICE SOLUTION ****/

/*
    Practice setting up structural default states and optional fallback values 
    for newly generated game objects.
*/

/** EXERCISE 1: THE MOUNT FACTORY **/

/*
    Create a class named 'GameMount' (like a horse or creature a player rides).
    1. The constructor should accept one parameter: 'animalType'.
    2. Give 'animalType' an optional default value of "Horse".
    3. Inside the constructor, hardcode a default property: 'this.speedMultiplier' set to 1.5.
*/
class GameMount {
	constructor(animalType = "Horse") {
		this.type = animalType;
		this.speedMultiplier = 1.5;
	}
}

/*
    Instantiate two mounts to test your defaults:
    1. Create 'basicMount' without passing any arguments.
    2. Create 'epicMount' and pass it the string "Dragon".
    Log both to see how the optional parameter behaves.
*/
const basicMount = new GameMount();
const epicMount = new GameMount("Dragon");

console.log(
	`You summoned a standard ${basicMount.type}! Speed bonus: x${basicMount.speedMultiplier}`
);
console.log(
	`You summoned a legendary ${epicMount.type}! Speed bonus: x${epicMount.speedMultiplier}`
);

/** EXERCISE 2: REPAIRING THE SHIELD BLUEPRINT **/

class MagicShield {
	// FIX: Added a default fallback configuration value to the 'element' parameter
	constructor(shieldName, element = "Fire") {
		this.name = shieldName;
		this.protectionElement = element;
		// FIX: Moved 'durability' out of parameters and hardcoded it to start at 100
		this.durability = 100;
	}
}

/*
    Test the repaired class. Create a shield named "Aegis" but do not 
    pass an element parameter. Log what the player sees.
*/
const protectiveShield = new MagicShield("Aegis");

console.log(
	`\nYou equipped the ${protectiveShield.name} Shield! Protection type: ${protectiveShield.protectionElement}. Durability: ${protectiveShield.durability}/100.`
);
