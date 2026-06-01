/**** DEEP INHERITANCE: SOLUTION ****/

/*
    Inheritance doesn't stop at just two generations. In large applications 
    and video game architectures, you will frequently encounter deep lineage 
    tracks: a Grandparent Class -> a Parent Class -> a Child Class.
        - The Cascading Trickle: When you extend a class that is already a 
        child of another class (e.g., class FireWizard extends Wizard), 
        properties pass down completely automatically. A FireWizard instantly 
        gains access to everything inside Wizard plus everything inside the 
        grandparent BaseCharacter class.
        - The Linear super() Chain: The constructor process remains exactly 
        the same, acting like a relay race. The grandchild class calls 
        super(), which immediately runs the parent class constructor. That 
        parent class constructor then hits its own super(), passing data 
        all the way up to the grandparent.
*/

/** EXAMPLE - THE THREE-TIER GRANDPARENT TREE **/

// LEVEL 1: THE GRANDPARENT
class BaseCharacter {
	constructor(characterName) {
		this.name = characterName;
		this.health = 100;
	}
}

// LEVEL 2: THE PARENT (Extends Grandparent)
class Wizard extends BaseCharacter {
	constructor(characterName, startingMagic) {
		super(characterName); // Hands name up to BaseCharacter
		this.magicPoints = startingMagic;
	}
}

// LEVEL 3: THE CHILD (Extends Parent)
class FireWizard extends Wizard {
	constructor(characterName, startingMagic, baseFireDamage) {
		// Hands name and magic up to Wizard constructor
		super(characterName, startingMagic);
		this.fireDamage = baseFireDamage;
	}

	castInferno() {
		this.magicPoints -= 20;
		return `${this.name} casts Inferno for ${this.fireDamage} fire damage! Magic left: ${this.magicPoints}.`;
	}
}

// Instantiate the grandchild element
const ignis = new FireWizard("Ignis", 80, 45);

// Ignis uses grandparent properties (health) and grandchild methods seamlessly!
console.log(
	`${ignis.name} starts with ${ignis.health} total health and ${ignis.magicPoints} magic points.`
);
console.log(ignis.castInferno());
