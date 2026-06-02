/**** COMMONJS MODULES: SOLUTION ****/

/*
    As your software projects grow, keeping all your variables, classes, and loops 
    inside one giant JavaScript file becomes completely unmanageable. To build 
    professional applications, you must separate your code into small, isolated 
    files called Modules.

    CommonJS is the traditional module standard built directly into Node.js. It 
    operates on a strict "lock and key" system to pass data between files:
        - module.exports: By default, everything you write inside a JavaScript file 
        is completely hidden from the rest of your app. If you want another file to 
        use a variable or function, you must explicitly attach it to the module.exports 
        object at the bottom of the file.
        - require(): To pull an exported asset into a different file, you use the 
        built-in require() function, passing it the relative file pathway 
        (e.g., require('./character.js')).
*/

// COMMONJS IMPORT: We require the relative path to grab the exported object.
// (The "./" tells Node to look in the exact same folder)
const dataBundle = require("./gameData.js");

console.log("--- INITIALIZING ARCADE ASSETS ---");
console.log(`Configuring system... Default Player Health: ${dataBundle.startingHealthValue}`);
console.log(`Spawning equipment... Starter weapon designated: ${dataBundle.defaultWeaponName}`);
