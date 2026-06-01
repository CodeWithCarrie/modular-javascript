/**** INHERITANCE BASICS: SOLUTION ****/

/*
    Imagine you are building a massive game database. You have a Warrior 
    class with properties like name and health, and a Wizard class that 
    also uses name and health. Writing those exact same lines over and 
    over inside every single character type is redundant and prone to 
    copy-paste bugs.

    Object-Oriented Programming solves this using Inheritance. You write 
    a single, broad Parent Class (like Character) containing the universal 
    basics. Then, specialized Child Classes use two powerful tools to 
    inherit and expand that genetic code:
        - The extends Keyword: This creates the genetic pipeline. By 
        declaring class Wizard extends Character, you tell JavaScript 
        that a Wizard automatically receives every single property and 
        method written inside the parent Character class.
        - The super() Handshake: When a child class initializes, it must 
        immediately shout up to its parent to run the parent's constructor 
        first. We do this by executing super(param1, param2). This 
        initializes the core universal properties before the child adds 
        its own custom traits.
*/

/** EXAMPLE 1 - THE BASE PARENT CLASS **/

class BaseCharacter {
	constructor(characterName, initialHealth) {
		this.name = characterName;
		this.health = initialHealth;
	}

	takeDamage(amount) {
		this.health -= amount;
		return `${this.name} takes ${amount} damage! Health: ${this.health}`;
	}
}

/** EXAMPLE 2 - THE EXTENDED CHILD CLASS **/

// Wizard inherits everything from BaseCharacter automatically
class Wizard extends BaseCharacter {
	constructor(characterName, initialHealth, startingMagic) {
		// STEP 1: Pass the name and health up to the parent constructor
		super(characterName, initialHealth);

		// STEP 2: Initialize specialized child properties locally
		this.magicPoints = startingMagic;
	}

	castSpell() {
		this.magicPoints -= 10;
		return `${this.name} casts a spell! Magic remaining: ${this.magicPoints}`;
	}
}

// Constructing our child instance
const merlin = new Wizard("Merlin", 80, 50);

// The child instance can use both parent methods AND child methods perfectly!
console.log(merlin.takeDamage(15)); // Parent method running
console.log(merlin.castSpell()); // Child method running
