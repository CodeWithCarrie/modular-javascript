/**** UNIT TESTING BASICS: PRACTICE SOLUTION ****/

/** EXERCISE 2: DEBUGGING INVENTORY ARRAY MATCHERS **/

import { generateStarterKit } from "../armory.js";

test("generateStarterKit creates a complete physical gear list", () => {
	const kit = generateStarterKit();

	// BUG FIX: Standardized strict array content structural testing via .toEqual
	expect(kit).toEqual(["Iron Sword", "Steel Shield", "Health Potion"]);

	// BUG FIX: Swapped broken .toBe check for array containment validation
	expect(kit).toContain("Steel Shield");
});
