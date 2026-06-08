/**** TEST-DRIVEN DEVELOPMENT (TDD): PRACTICE SOLUTION ****/

/*
    Practice driving development cycles using the Red-Green-Refactor loop layout 
    to write predictable variable arithmetic reduction engines.
*/

/** EXERCISE: DRIVING CODE GENERATION VIA FAILURES **/

import { reduceDamage } from "../combatMath.js";

// Write a test that ensures the reduceDamage function works,
// then run it, even though the code hasn't been written yet that
// will make it pass
test("reduces damage from raw attacks based on armor value", () => {
	// RED PROOF: This checks an un-written file asset
	expect(reduceDamage(30, 8)).toBe(22);
});
