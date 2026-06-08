/**** TEST-DRIVEN DEVELOPMENT (TDD): SOLUTION ****/

/*
    Test-Driven Development (TDD) is a coding practice where you invert 
    the standard programming cycle: You write your test files before you 
    write a single line of actual application code.

    You execute TDD via a strict 3-stage mechanical cadence known as the 
    Red-Green-Refactor Loop:

    🟥 Red Phase: Write a test checking for a capability that does not 
    exist yet. Run the test and watch it fail completely. This proves your 
    test is looking for the right thing and isn't giving false positives.

    🟩 Green Phase: Write the absolute bare minimum, simplest code required 
    to make that test pass. Hardcode variables if you have to—just get the 
    test to turn green as quickly as possible.

    🔄 Refactor Phase: Clean up your implementation. Remove code duplication, 
    rename variables, and optimize for edge cases. Run your test suite again 
    to confirm your optimizations didn't break existing functionality.
*/

import { checkLevelUp } from "../levelEngine.js";

describe("The checkLevelUp method", () => {
	test("returns true if character has enough XP to level up", () => {
		// Asserting a behavior pipeline that does not exist yet!
		expect(checkLevelUp({ xp: 120 }, { targetXp: 100 })).toBe(true);
	});

	// We add another facet and test it at the exact threshold for leveling up
	test("resets current XP accurately if player levels up", () => {
		const character = { xp: 100, level: 1 };
		const targetXP = 100;

		expect(checkLevelUp(character, targetXP)).toBe(true);
		expect(character.xp).toBe(0); // Testing side-effect mutations
		expect(character.level).toBe(2);
	});
});
