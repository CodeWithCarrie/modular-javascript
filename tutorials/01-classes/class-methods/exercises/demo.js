/**** CLASS METHODS ****/

/** EXAMPLE 1 - RECONSTRUCTING ACTIONS THE RIGHT WAY **/

class Wizard {
	constructor(wizardName, startingMagic = 50) {
		this.name = wizardName;
		this.magicPoints = startingMagic;
		// DEMO: Define an anonymous method that will be stored with every object instance
	}

	// DEMO: Define a named function (but omit keyword) that will be stored with the class
}

/** EXAMPLE 2 - RUNNING REUSABLE ACTIONS **/
const player1 = new Wizard("Merlin", 60);
const player2 = new Wizard("Gandalf", 15);

// DEMO: Have each player cast a spell

/* 
    Follow up with additional exercises after demo for hands-on practice 
    with problem-solving and coding!
*/
