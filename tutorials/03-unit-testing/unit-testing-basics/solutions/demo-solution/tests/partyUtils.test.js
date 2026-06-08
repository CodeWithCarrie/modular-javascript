/**** UNIT TESTING BASICS: SOLUTION ****/

/*
    Up until now, to check if your code worked, you've had to temporarily set up 
    console.log statements and run extra code to check the results over and over. 
    This is time-consuming, tedious, and prone to human error.

    Unit Testing automates this process. You write short, isolated script files 
    that test one tiny "unit" of code (like a single function or class method) 
    in absolute isolation.

    For JavaScript, we use an industry-standard testing framework called Jest. 
    Jest acts like an automated quality inspector. It runs your code behind 
    the scenes, passes in test values, and uses Matchers (toBe, toEqual, 
    toContain) to verify if the actual output matches your expected results exactly.
*/

// JEST TEST FILE: We import the functions we want to inspect
import { calculateCombinedPower, getStarterSpells } from "../partyUtils.js";

// 'test()' defines an isolated testing block
test("calculateCombinedPower accurately sums combat values of party members", () => {
	let actual = calculateCombinedPower(15, 12);
	let expected = 27;

	// expect() combined with a Matcher (.toBe) establishes the assertion
	expect(actual).toBe(expected);

	// For simple assertions, you can do it all in one line
	expect(calculateCombinedPower(0, 50)).toBe(50);
});

test("getStarterSpells returns the correct initial magic array layout", () => {
	const spellbook = getStarterSpells();

	// CRITICAL: .toBe checks strict memory reference.
	expect(spellbook).not.toBe(["Fireball", "Heal Shield"]);

	// Use .toEqual to deeply compare values inside objects or arrays!
	expect(spellbook).toEqual(["Fireball", "Heal Shield"]);

	// .toContain checks if a specific item exists inside an array
	expect(spellbook).toContain("Fireball");
});
