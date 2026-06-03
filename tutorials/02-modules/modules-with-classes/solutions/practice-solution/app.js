/**** USING MODULES WITH CLASSES: PRACTICE SOLUTION ****/

/*
    Practice separating class blueprints into dedicated files and importing 
    them across complex directory structures.
*/

/*
    Import the Warrior class
*/
import Warrior from "./classes/Warrior.js";

/*
    Instantiate a new warrior named Arthur, then switch his stance and
    log the result.
*/
const hero = new Warrior("Arthur");

console.log(hero.switchStance()); // Verification of successful wiring
