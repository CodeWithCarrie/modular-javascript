/**** USING MODULES WITH CLASSES: SOLUTION ****/

/*
    Up until now, your classes and your execution code have lived inside 
    the exact same file. In a professional application, every class 
    blueprint should live inside its own dedicated module file (e.g., 
    Warrior.js holds only the Warrior class, Wizard.js holds only the 
    Wizard class).

    The Clean Slate Strategy: By isolating your classes into separate 
    files, your codebase remains incredibly scannable and easy to 
    maintain. Your main entry point file (main.js) simply acts as a 
    manager that imports the blueprints it needs, instantiates the 
    objects, and sets them into motion.

    Integrating Utilities: Separating your classes also allows you to mix
    and match utility helper files. For example, a class module file can 
    import a shared mathematical randomizer utility function from a 
    mathUtils.js module to dynamically calculate random combat strike 
    values behind the scenes!
*/

// Import the Wizard class (as default) and the randomization utility function
import Wizard from "./classes/Wizard.js";
import { getRandominRange } from "./utils/mathUtils.js";

// Instantiate our player using the imported blueprint
const player = new Wizard("Merlin");

// Simulate gameplay
console.log(`${player.name} enters the cave.`);

console.log(`
A troll appears! 

Choose an action:
    0 - Fight
    1 - Cast a Spell
    2 - Run
`);

console.log(player.castSpell());

console.log(`
The troll takes ${getRandominRange(10, 4)} damage! 

Choose an action:
    0 - Fight
    1 - Cast a Spell
    2 - Run
`);

console.log(player.castSpell());
