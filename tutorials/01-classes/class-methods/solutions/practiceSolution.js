/**** CLASS METHODS: PRACTICE SOLUTION ****/

/*
    Practice engineering highly efficient class methods to allow game 
    entities to modify their own internal properties safely.
*/

/** EXERCISE 1: THE RECOVER HEALTH ACTION **/

class GameHero {
	constructor(heroName) {
		this.name = heroName;
		this.health = 70;
	}
	/*
        Create a shared class method named 'drinkPotion' below the constructor.
        It should take no parameters. Inside, add 25 to 'this.health' and return 
        a template literal string stating: "[name] drinks a potion and heals! Health: [health]"
    */
	drinkPotion() {
		this.health += 25;
		return `${this.name} drinks a potion and heals! Health: ${this.health}`;
	}
}

const champion = new GameHero("Arthur");

// Test your newly engineered action and print the result.
console.log(champion.drinkPotion());

/** EXERCISE 2: CLEANING UP THE MEMORY TRAP **/

class EnemyOrc {
	constructor(orcName) {
		this.name = orcName;
		this.rageMeter = 0;
	}

	// FIXED!
	gainRage() {
		this.rageMeter += 20;
		return `${this.name} growls! Rage increased to ${this.rageMeter}.`;
	}
}

const basicOrc = new EnemyOrc("Grom");

// Call the method and print the result.
console.log(`\n${basicOrc.gainRage()}`);
