/**** COMMONJS MODULES: PRACTICE SOLUTION ****/

/*
    Practice using CommonJS syntax to isolate settings data matrices 
    and import them cleanly into an entry point file.
*/

/** EXERCISE: REPAIRING THE EXPORT COUPLING **/

/*
    Write the matching CommonJS import statement to 'require' the 
    settings module from its relative file path ("./settings.js"). 
    Capture it in a constant named 'config', then replace null values
    in the log statements with the correct references.
*/
const config = require("./settings.js");

console.log(`Welcome to ${config.gameTitle}!`);
console.log(`Maximum allowed team size: ${config.maxPartySize} players.`);
