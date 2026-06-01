/**** CLASSES & CONSTRUCTORS: PRACTICE ****/

/*
    Practice defining foundational class blueprints and instantiating 
    independent entity profiles into memory.
*/

/** EXERCISE 1: THE ITEM INVENTORY FACTORY **/

/*
    TODO: Create a class blueprint named 'GameItem'.
    1. Give it a constructor that accepts two parameters: 'itemName' and 'goldValue'.
    2. Inside the constructor, map those parameters to 'this.name' and 'this.value'.
*/

/*
    TODO: Instantiate two unique items using the 'new' keyword:
    1. Create a constant named 'potion' with a name of "Healing Potion" and a value of 50.
    2. Create a constant named 'shield' with a name of "Iron Shield" and a value of 150.
    Log both objects to verify their data structures.
*/

/** EXERCISE 2: MOB SPAWNER VERIFICATION **/

class EnemyMob {
	constructor(type, powerRating) {
		this.mobType = type;
		this.power = powerRating;
	}
}

/*
    TODO: The instantiation sequence below is completely broken and throwing errors!
    Fix the code line below so that a new EnemyMob instance is successfully generated.
*/
const eliteOrc = EnemyMob("Orc Raider", 45);

console.log(`\nA hostile ${eliteOrc.mobType} has appeared! (Power: ${eliteOrc.power})`);
