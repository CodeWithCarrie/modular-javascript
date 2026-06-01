/**** CLASSES & CONSTRUCTORS: PRACTICE SOLUTION ****/

/*
    Practice defining foundational class blueprints and instantiating 
    independent entity profiles into memory.
*/

/** EXERCISE 1: THE ITEM INVENTORY FACTORY **/

/*
    Create a class blueprint named 'GameItem'.
    1. Give it a constructor that accepts two parameters: 'itemName' and 'goldValue'.
    2. Inside the constructor, map those parameters to 'this.name' and 'this.value'.
*/
class GameItem {
	constructor(itemName, goldValue) {
		this.name = itemName;
		this.value = goldValue;
	}
}

/*
    Instantiate two unique items using the 'new' keyword:
    1. Create a constant named 'potion' with a name of "Healing Potion" and a value of 50.
    2. Create a constant named 'shield' with a name of "Iron Shield" and a value of 150.
    Log both objects to verify their data structures.
*/
const potion = new GameItem("Healing Potion", 50);
const shield = new GameItem("Iron Shield", 150);

console.log("\n--- INVENTORY ACQUISITION LOGS ---");
console.log(potion);
console.log(shield);

/** EXERCISE 2: MOB SPAWNER VERIFICATION **/

class EnemyMob {
	constructor(type, powerRating) {
		this.mobType = type;
		this.power = powerRating;
	}
}

/*
    The instantiation sequence below is completely broken and throwing errors!
    Fix the code line below so that a new EnemyMob instance is successfully generated.
*/
// FIX: Added the missing 'new' keyword required to invoke a class constructor
const eliteOrc = new EnemyMob("Orc Raider", 45);

console.log(`\nA hostile ${eliteOrc.mobType} has appeared! (Power: ${eliteOrc.power})`);
