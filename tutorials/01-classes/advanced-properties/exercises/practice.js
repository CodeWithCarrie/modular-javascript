/**** ADVANCED PROPERTIES & DEFAULT VALUES: PRACTICE ****/

/*
    Practice setting up structural default states and optional fallback values 
    for newly generated game objects.
*/

/** EXERCISE 1: THE MOUNT FACTORY **/

/*
    TODO: Create a class named 'GameMount' (like a horse or creature a player rides).
    1. The constructor should accept one parameter: 'animalType'.
    2. Give 'animalType' an optional default value of "Horse".
    3. Inside the constructor, hardcode a default property: 'this.speedMultiplier' set to 1.5.
*/

/*
    TODO: Instantiate two mounts to test your defaults:
    1. Create 'basicMount' without passing any arguments.
    2. Create 'epicMount' and pass it the string "Dragon".
    Log both to see how the optional parameter behaves.
*/

/** EXERCISE 2: REPAIRING THE SHIELD BLUEPRINT **/

/*
    TODO: The class definition below is not as flexible as it needs to be. 
    Fix it so that all shields automatically start with a durability of 100 and
    while an element can be specified, if it is omitted, the default value is "Fire".
*/
class MagicShield {
	constructor(shieldName, element, durability) {
		this.name = shieldName;
		this.protectionElement = element;
		this.durability = durability;
	}
}

/*
    TODO: Test the repaired class. Create a shield named "Aegis" but do not pass an 
    element parameter. Log a statement that describes the shield to the player.
*/
