/**** INHERITANCE BASICS: PRACTICE SOLUTION ****/

/*
    Practice using 'extends' and the 'super' handshake to derive specialized 
    sub-classes from a core root template.
*/

/** EXERCISE 1: THE WARRIOR SPECIFICATION **/

class BaseHero {
	constructor(heroName) {
		this.name = heroName;
		this.health = 100;
	}
}

/*
    Create a child class named 'Warrior' that extends 'BaseHero'.
    1. Give it a constructor that accepts 'heroName' and a new property 'shieldType'.
    2. Use 'super' to pass the 'heroName' up to the parent.
    3. Assign 'this.equippedShield' to the incoming 'shieldType' argument.
*/
class Warrior extends BaseHero {
	constructor(heroName, shieldType) {
		super(heroName);
		this.equippedShield = shieldType;
	}
}

// Testing the child instantiation
const arthur = new Warrior("Arthur", "Iron Kite Shield");
console.log(
	`${arthur.name} has full health (${arthur.health}) and an equipped ${arthur.equippedShield}!`
);

/** EXERCISE 2: REPAIRING THE EXTENDED PET BLUEPRINT **/

class CompanionAnimal {
	constructor(petName) {
		this.name = petName;
	}
}

class Griffin extends CompanionAnimal {
	// FIX: Included 'petName' as a constructor parameter so it can pass upward
	constructor(petName, flightSpeed) {
		// FIX: Added the critical missing super() execution handshake line
		super(petName);
		this.speed = flightSpeed;
	}
}

const customPet = new Griffin("SkyClaw", 120);
console.log(`\nYour pet ${customPet.name} took flight at speed ${customPet.speed}!`);
