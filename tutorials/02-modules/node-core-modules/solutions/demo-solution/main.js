/**** NODE CORE MODULES: SOLUTION ****/

/*
    Node.js comes with an array of powerful, pre-packaged utility libraries called 
    Core Modules. Because these tools are built directly into the Node environment, 
    you do not need to install them using npm.

    When importing a Core Module, you use standard ES Module syntax, but you omit 
    the relative file dot-slashes (./). You simply import the module by its direct 
    name string (e.g., from "fs"). Three of the most common core modules are:
        - os (Operating System): Interrogates the host computer's hardware to pull 
        system metrics like available memory or the user's operating system platform.
        - path (Path Weaver): Safely stitches folder and file strings together. 
        This ensures your file paths automatically adjust to use backslashes (\) on 
        Windows and forward slashes (/) on Mac or Linux, preventing cross-platform 
        crashes.
        - fs (File System): The physical bridge that allows your JavaScript code to 
        create, read, update, or delete actual files and folders directly on the 
        computer's hard drive.
*/

// CORE IMPORTS: No relative pathways ("./") required for built-in Node modules!
const os = require("os");
const path = require("path");
const fs = require("fs");

// STEP 1: Gather raw environmental data using the OS module
const hostPlatform = os.platform(); // e.g., "darwin" (Mac) or "win32" (Windows)
const currentUsername = os.userInfo().username;

const diagnosticReport = `Arcade Engine Session Log \nUser: ${currentUsername} \nPlatform: ${hostPlatform}`;

// STEP 2: Use PATH to safely construct a cross-platform file destination string.
// This creates a safe path pointing to an actual "log.txt" file in your current folder.
// IMPORTANT: Before executing the lines below, make sure you are in the same directory
// as this file! You want to ensure that the new file will be ultimately be created in
// the current working directory (cwd).
const safeFilePath = path.join(process.cwd(), "log.txt");
console.log(`Target destination safely mapped: ${safeFilePath}`);

// STEP 3: Use FS to write the string data onto the hard drive as a physical file.
// writeFileSync takes two arguments: (The file path destination, the string content to write)
fs.writeFileSync(safeFilePath, diagnosticReport);

// You should now see the new file log.txt alongside this file in the directory.

// STEP 4: Use FS to read from the file that was just written to the hard drive.
// Be sure to specify utf8 encoding to get a string.
try {
	// Read file synchronously
	const data = fs.readFileSync("log.txt", "utf8");
	console.log(`LOG: \n${data}`);
} catch (err) {
	console.error("Error reading file:", err);
}
