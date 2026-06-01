/**** DEEP INHERITANCE ****/

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
		super(characterName);
		this.magicPoints = startingMagic;
	}
}

// LEVEL 3: THE CHILD (Extends Parent)

// DEMO: Create a FireWizard class that inherits from both Wizard and BaseCharacter
// Add a fireDamage property and a castInferno() method

// DEMO: Instantiate the grandchild element

// DEMO: Log a statement with properties from different class definitions in the
// family tree, then call castInferno() and print the result.

/* 
    Follow up with additional exercises after demo for hands-on practice 
    with problem-solving and coding!
*/
