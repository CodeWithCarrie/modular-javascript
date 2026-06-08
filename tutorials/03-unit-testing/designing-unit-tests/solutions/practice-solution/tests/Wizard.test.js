/**** DESIGNING UNIT TESTS: PRACTICE SOLUTION ****/

import Wizard from "../Wizard.js";

describe("Wizard class", () => {
    // Declare (but do not instantiate) a variable to store a wizard
    let testMage;

    /*
        Implement a 'beforeEach' hook loop to reinitialize 
        'testMage' as a fresh instance of the 'Wizard' class before every test.
    */
    beforeEach(() => {
        testMage = new Wizard("Merlin");
    });

    test("learnSpell method saves multiple sequential spells", () => {
        // 1. ARRANGE - Create two spells
        const spellA = "Teleport";
        const spellB = "Lightning Bolt";

        // 2. ACT - Call the .learnSpell method twice (one for each spell)
        testMage.learnSpell(spellA);
        testMage.learnSpell(spellB);

        // 3. ASSERT - Write an assertion that does a deep equality check of the spells array
        // and a second assertion that checks its length
        expect(testMage.spells).toEqual(["Teleport", "Lightning Bolt"]);
        expect(testMage.spells.length).toBe(2);
    });
});