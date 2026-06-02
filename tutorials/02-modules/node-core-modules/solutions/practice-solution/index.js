/**** NODE CORE MODULES: PRACTICE SOLUTION ****/

/*
    Practice using Node's native core libraries to look up system metrics 
    and construct automated local files.
*/

/** EXERCISE **/

// Use CommonJS syntax to import os, path, and fs
const os = require("os");
const path = require("path");
const fs = require("fs");

/*
    Build a local file generator script.
    1. Look up the total system memory of the computer using 'os.totalmem()'.
    2. Create a template literal string named 'memoryStats' reading: "Total System Memory: [bytes] bytes."
    3. Use 'path.join' to map a target file path pointing to a file named "system.txt".
    4. Use 'fs.writeFileSync' to save that string into that path destination.
    5. Use 'fs.readFileSync' in a try/catch block to read from the new file.
*/

// 1 & 2: Gather data and structure the text
const systemBytes = os.totalmem();
const memoryStats = `Total System Memory: ${systemBytes} bytes.`;

// 3: Build the safe pathway
const destinationPath = path.join(process.cwd(), "system.txt");

// 4: Write the file to disk
fs.writeFileSync(destinationPath, memoryStats);

// 5: Read from the new file to verify its contents
try {
	const data = fs.readFileSync("system.txt", "utf8");
	console.log(`REPORT: \n${data}`);
} catch (err) {
	console.error("Error reading file:", err);
}
