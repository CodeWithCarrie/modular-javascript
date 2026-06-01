/**** CLASS METHODS: PRACTICE ****/

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
        TODO: Create a shared class method named 'drinkPotion' below the constructor.
        It should take no parameters. Inside, add 25 to 'this.health' and return 
        a template literal string stating: "[name] drinks a potion and heals! Health: [health]"
    */
}

const champion = new GameHero("Arthur");

// TODO: Test your newly engineered action and print the result.

/** EXERCISE 2: CLEANING UP THE MEMORY TRAP **/

class EnemyOrc {
	constructor(orcName) {
		this.name = orcName;
		this.rageMeter = 0;
		// POOR ARCHITECTURE: This function gets copied into memory over and over!
		this.gainRage = () => {
			this.rageMeter += 20;
			return `${this.name} growls! Rage increased to ${this.rageMeter}.`;
		};
	}

	/*
        TODO: Look at the bad implementation above, then move it out of the constructor.
        Remember that the syntax changes when you are no longer storing it as a property
        with an anonymous definition.
    */
}

const basicOrc = new EnemyOrc("Grom");

// TODO: Call the method and print the result.
console.log(`\n${basicOrc.gainRage()}`);
