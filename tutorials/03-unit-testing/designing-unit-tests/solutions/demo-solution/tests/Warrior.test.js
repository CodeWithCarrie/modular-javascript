/**** DESIGNING UNIT TESTS: SOLUTION ****/

/*
    As your test suites expand, writing disorganized, chaotic test blocks 
    leads to fragile testing code. To write professional tests, we rely on 
    structured organization patterns:

    The AAA Principle (Arrange, Act, Assert): The golden rule of test design. 
    You cleanly divide every test block into three visual steps:
        - Arrange: Set up the test environment, mock data, and instances.
        - Act: Execute the target function or behavior you are actively auditing.
        - Assert: Run Jest matchers to prove the output matches your hypothesis.

    beforeEach(): If you are testing a Class instance (like a Warrior), running 
    multiple tests against the same object will bleed state data across tests 
    (e.g., Test 1 reduces the warrior's health, causing Test 2 to run with 
    damaged data). beforeEach runs cleanly before every single individual test, 
    manufacturing a pristine, identical setup every time and ensuring stable
    tests.
*/

import Warrior from "../models/Warrior.js";

describe("Warrior Class", () => {
	let testHero;

	// HOOK SETUP: Automatically instantiates a fresh player before every test
	beforeEach(() => {
		testHero = new Warrior("Arthur");
	});

	test("takeDamage method accurately lowers HP", () => {
		// 1. ARRANGE (State setup)
		const minorHit = 15;
		const criticalHit = 40;

		// 2. ACT (Execute behavior sequence)
		testHero.takeDamage(minorHit);
		testHero.takeDamage(criticalHit);

		// 3. ASSERT (Verify metrics)
		expect(testHero.health).toBe(45);
	});

	test("switchStance method alters active combat mode", () => {
		// 1. ARRANGE
		// Handled completely by the clean beforeEach hook

		// 2. ACT
		testHero.switchStance();

		// 3. ASSERT
		expect(testHero.stance).toBe("Aggressive");
	});
});

/* 
    Follow up with additional exercises after demo for hands-on practice 
    with problem-solving and coding!
*/
