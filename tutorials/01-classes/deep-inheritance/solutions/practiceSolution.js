/**** DEEP INHERITANCE: PRACTICE SOLUTION ****/

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
    Create a child class named 'WarAirShip' that extends 'AirShip'.
    1. The constructor should take three arguments: 'vesselName', 'flightAltitude', and 'cannonsCount'.
    2. Use 'super' to pass 'vesselName' and 'flightAltitude' directly up to the parent.
    3. Save 'cannonsCount' locally to an internal property named 'this.weaponsCount'.
*/
class WarAirShip extends AirShip {
	constructor(vesselName, flightAltitude, cannonsCount) {
		super(vesselName, flightAltitude);
		this.weaponsCount = cannonsCount;
	}
}

// Testing the multi-tier cascade instantiation
const dreadnought = new WarAirShip("The Behemoth", 5000, 16);
console.log(
	`${dreadnought.name} cruising at ${dreadnought.altitude} feet with ${dreadnought.weaponsCount} operational cannons! Base Speed: ${dreadnought.speed}`
);

/** EXERCISE 2: DECODING THE RELAY ORDER **/

class BaseInventoryItem {
	constructor() {
		this.isStorable = true;
	}
}

class WeaponItem extends BaseInventoryItem {
	constructor(power) {
		super(); // Relays up to BaseInventoryItem
		this.damage = power;
	}
}

class CursedSword extends WeaponItem {
	// FIX: Included 'power' inside the parameters list so it can be passed up the line
	constructor(power, curseEffect) {
		// FIX: Fixed the broken ordering by ensuring super() runs before 'this' assignments
		super(power);
		this.curse = curseEffect;
	}
}

const shadowBlade = new CursedSword(85, "Life Drain");
console.log(
	`\nYou drew the sword! Damage: ${shadowBlade.damage}. Curse type: ${shadowBlade.curse}. Item storable status: ${shadowBlade.isStorable}`
);
