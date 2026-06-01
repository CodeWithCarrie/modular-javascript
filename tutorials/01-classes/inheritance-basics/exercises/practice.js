/**** INHERITANCE BASICS: PRACTICE ****/

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
    TODO: Create a child class named 'Warrior' that extends 'BaseHero'.
    1. Give it a constructor that accepts 'heroName' and a new property 'shieldType'.
    2. Use 'super' to pass the 'heroName' up to the parent.
    3. Assign 'this.equippedShield' to the incoming 'shieldType' argument.
*/

/* 
    TODO: Create a new warrior and log a description using properties from both 
    Warrior and BaseHero.
*/

/** EXERCISE 2: REPAIRING THE EXTENDED PET BLUEPRINT **/

class CompanionAnimal {
	constructor(petName) {
		this.name = petName;
	}
}

/*
    TODO: Fix the child class below so that it makes proper use of the parent's
    property.
*/
class Griffin extends CompanionAnimal {
	constructor(flightSpeed) {
		this.speed = flightSpeed;
	}
}

/* 
    TODO: Create a new griffin with both a name and speed, then log a description 
    using both properties.
*/
