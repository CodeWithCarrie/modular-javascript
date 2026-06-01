/**** DEEP INHERITANCE: PRACTICE ****/

/*
    Practice passing data across multi-generational construction links 
    to compile complex structural variations.
*/

/** EXERCISE 1: THE ULTIMATE MOUNT HIERARCHY **/

// LEVEL 1: GRANDPARENT
class CoreVehicle {
	constructor(vesselName) {
		this.name = vesselName;
		this.speed = 10;
	}
}

// LEVEL 2: PARENT
class AirShip extends CoreVehicle {
	constructor(vesselName, flightAltitude) {
		super(vesselName);
		this.altitude = flightAltitude;
	}
}

/*
    TODO: Create a child class named 'WarAirShip' that extends 'AirShip'.
    1. The constructor should take three arguments: 'vesselName', 'flightAltitude', and 'cannonsCount'.
    2. Use 'super' to pass 'vesselName' and 'flightAltitude' directly up to the parent.
    3. Save 'cannonsCount' locally to an internal property named 'this.weaponsCount'.
*/

/* 
    TODO: Create a new ship and log a description that uses properties from all three classes.
*/

/** EXERCISE 2: DECODING THE RELAY ORDER **/

class BaseInventoryItem {
	constructor() {
		this.isStorable = true;
	}
}

class WeaponItem extends BaseInventoryItem {
	constructor(power) {
		super();
		this.damage = power;
	}
}

class CursedSword extends WeaponItem {
	/* 
        TODO: Fix the constructor so that it instantiates a cursed sword properly.
        You will need to fix it in more than one way!
    */
	constructor(curseEffect) {
		this.curse = curseEffect;
		super(power);
	}
}

/* 
    TODO: Create a shadow blade and log a description using properties from all classes.
*/
