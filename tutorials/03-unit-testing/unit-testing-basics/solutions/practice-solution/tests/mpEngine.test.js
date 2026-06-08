/**** UNIT TESTING BASICS: PRACTICE SOLUTION ****/

/*
    Practice writing clean test definitions and applying the correct 
    Jest matchers to evaluate primitive values and arrays.
*/

/** EXERCISE 1: TESTING MANA REGENERATION BOUNDS **/

import { regenerateMP } from "../mpEngine.js";

/*
    Write a Jest test block using 'test()' that asserts:
    1. Calling regenerateMP(45, 15) returns exactly 60 using '.toBe()'
    2. Calling regenerateMP(90, 20) safely caps out at 100 using '.toBe()'
*/
test("regenerateMP adds points correctly and respects maxMP", () => {
	expect(regenerateMP(45, 15)).toBe(60);
	expect(regenerateMP(90, 20)).toBe(100);
});
